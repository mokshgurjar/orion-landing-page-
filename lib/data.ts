import type {
    PipelineStep,
    ValidationLayer,
    Feature,
    ComparisonRow,
    Platform,
    Stat,
    TrustFact,
} from '@/types'

export const PIPELINE_STEPS: PipelineStep[] = [
    { num: '01', name: 'Intent Interpreter' },
    { num: '02', name: 'Stack Resolver' },
    { num: '03', name: 'IISG Generator' },
    { num: '04', name: 'Architect' },
    { num: '05', name: 'Planner' },
    { num: '06', name: 'Context Curator' },
    { num: '07', name: 'Parallel Roles' },
    { num: '08', name: 'Integrator' },
    { num: '09', name: 'Validation Gate' },
    { num: '10', name: 'Checkpoint Manager' },
    { num: '11', name: 'Atomic Executor' },
    { num: '12', name: 'Memory & Logging' },
    { num: '13', name: 'Pattern Recognition' },
    { num: '14', name: 'Failure Analysis' },
    { num: '15', name: 'Rollback Engine' },
]

export const VALIDATION_LAYERS: ValidationLayer[] = [
    { num: '01', name: 'Syntax', desc: 'Parse-level correctness for every target language.' },
    { num: '02', name: 'Type', desc: 'Full static type resolution and inference checks.' },
    { num: '03', name: 'Security', desc: 'OWASP-aligned vulnerability pattern detection.' },
    { num: '04', name: 'Performance', desc: 'Complexity and regression benchmarking on every diff.' },
    { num: '05', name: 'Integration', desc: 'Cross-module contract and interface compatibility.' },
    { num: '06', name: 'Formal', desc: 'Mathematical proof that output satisfies IISG contracts.' },
]

export const FEATURES: Feature[] = [
    {
        title: 'Deterministic Pipeline',
        desc: "Same prompt. Same codebase. Same output — byte for byte. Orion's 15-stage pipeline is fully deterministic: no randomness, no divergent outputs, no surprises. Verified nightly against 50 real projects.",
        vs: 'Antigravity, Cursor, Windsurf → non-deterministic',
        tag: 'DETERMINISTIC',
    },
    {
        title: 'IISG — Intent Contracts',
        desc: 'The Intent-Interface Specification Generator creates formal contracts before a single line of code is written. Every agent is bound to these contracts. No agent can produce output that violates the intent you specified.',
        vs: 'No competitor → has formal pre-code contracts',
        tag: 'CONTRACTS',
    },
    {
        title: '6-Layer Validation Gate',
        desc: 'Every change passes six independent layers — Syntax, Type, Security, Performance, Integration, and Formal Verification — before it can touch your filesystem. Not a suggestion. A hard gate.',
        vs: 'Others → 1–2 layer checks at most',
        tag: 'VALIDATION',
    },
    {
        title: 'Atomic Executor + Rollback',
        desc: 'Changes are applied transactionally — all or nothing. Every checkpoint is an immutable snapshot. Roll back to any point in history, instantly, with zero partial state corruption.',
        vs: 'Others → no transactional undo',
        tag: 'TRANSACTIONAL',
    },
    {
        title: 'Cost Preview',
        desc: 'Before any agent runs, Orion shows the estimated token cost of the task. Review it, adjust scope, then approve. No surprise bills. No invisible usage burning in the background.',
        vs: 'Antigravity, Cursor, Windsurf → no pre-execution cost view',
        tag: 'COST_PREVIEW',
    },
    {
        title: 'Full AI Auditability',
        desc: 'Every decision every agent makes is logged, timestamped, and explainable. You can inspect the full reasoning chain behind every file change. Compliance-ready from day one.',
        vs: 'Others → black-box agent decisions',
        tag: 'AUDITABLE',
    },
    {
        title: 'Planning Mode vs Fast Mode',
        desc: 'Planning Mode runs all 15 pipeline stages with full 6-layer validation, parallel agents, and IISG contracts. Fast Mode runs a 6-stage condensed pipeline in 4–10 seconds with a lighter model. You choose the mode. Orion never auto-switches.',
        vs: 'Others → one fixed execution path, no user-controlled mode switch',
        tag: 'EXECUTION_MODE',
    },
    {
        title: 'MCP Inside the Pipeline',
        desc: 'MCP tool calls are formally dispatched through a dedicated MCP Dispatcher with per-agent tool isolation, rollback-awareness, and full auditability. Tool calls are planned in the IISG contract and user-approved before any external system is touched.',
        vs: 'Antigravity + Claude Code → MCP is not integrated into the AI execution pipeline',
        tag: 'MCP_INTEGRATION',
    },
]

export const COMPARISON_COLS = ['Orion', 'Antigravity', 'Cursor', 'Windsurf', 'Claude Code'] as const

export const COMPARISON_ROWS: ComparisonRow[] = [
    { feature: 'Deterministic output', values: [true, false, false, false, false] },
    { feature: 'Pre-code formal contracts (IISG)', values: [true, false, false, false, false] },
    { feature: 'MCP integrated into execution pipeline', values: [true, false, false, false, false] },
    { feature: 'MCP tool declarations in IISG contracts', values: [true, false, false, false, false] },
    { feature: '6-layer validation gate', values: [true, false, false, false, false] },
    { feature: 'Atomic transactional executor', values: [true, false, false, false, false] },
    { feature: 'Pre-execution cost preview', values: [true, false, false, false, false] },
    { feature: 'Full AI + MCP decision audit log', values: [true, false, false, false, false] },
    { feature: 'User-controlled execution mode', values: [true, false, false, false, false] },
    { feature: 'UI-driven MCP Store (no config files)', values: [true, true, false, false, false] },
    { feature: 'Git-scoped MCP config (.mcp.json)', values: [true, false, false, false, true] },
    { feature: 'Per-agent MCP tool isolation', values: [true, false, false, false, false] },
    { feature: 'Skills system (SKILL.md)', values: [true, false, false, false, true] },
    { feature: 'Always-on context file (ORION.md)', values: [true, false, false, false, true] },
    { feature: 'Parallel agent execution (6 agents)', values: [true, true, false, false, false] },
    { feature: 'VS Code fork (full extension support)', values: [true, true, true, true, false] },
    { feature: 'Free to use', values: [true, true, '$20/mo', '$15/mo', '$17/mo'] },
]

export const PLATFORMS: Platform[] = [
    { os: 'Windows', icon: 'AppWindow', arch: '64-bit', featured: false },
    { os: 'macOS', icon: 'Command', arch: 'Universal Binary', featured: true },
    { os: 'Linux', icon: 'Hexagon', arch: '.deb / .rpm', featured: false },
]

export const STATS: Stat[] = [
    { value: '15', label: 'Pipeline Stages' },
    { value: '6', label: 'Validation Layers' },
    { value: '∞', label: 'Atomic Rollbacks' },
    { value: '100%', label: 'Auditable' },
]

export const TRUST_FACTS: TrustFact[] = [
    'MCP Pipeline-Integrated',
    '6-layer validation',
    'Atomic rollback',
    'Pre-execution cost preview',
    'Every AI decision auditable',
]

export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'Blog', href: '/blog' },
    { label: 'Compare', href: '/#compare' },
    { label: 'Download', href: '/download' },
] as const
