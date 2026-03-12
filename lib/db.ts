import { neon } from '@neondatabase/serverless';
import type { NeonQueryFunction } from '@neondatabase/serverless';

// Lazy connection — the neon client is only instantiated the first time sql is
// called (at runtime/request time), NOT when this module is imported.
// This prevents Next.js from throwing during the build-time page-data collection
// phase when DATABASE_URL hasn't been injected into the environment yet.
let _client: NeonQueryFunction<false, false> | null = null;

function getClient(): NeonQueryFunction<false, false> {
  if (!_client) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    _client = neon(process.env.DATABASE_URL);
  }
  return _client;
}

// A callable Proxy wrapping the lazy client.
// Using a function as the Proxy target makes it callable (tagged template syntax).
// The get trap forwards .query / .unsafe / .transaction and any other props.
export const sql = new Proxy(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function lazyNeon(...args: any[]) {
    return (getClient() as unknown as (...a: unknown[]) => unknown)(...args);
  } as unknown as NeonQueryFunction<false, false>,
  {
    get(_target, prop) {
      const client = getClient();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const value = (client as any)[prop];
      return typeof value === 'function' ? value.bind(client) : value;
    },
  }
);

// Function to initialize the database table
export async function initDb() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        token TEXT UNIQUE NOT NULL,
        active INTEGER DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Database initialized: subscribers table is ready.');
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
}
