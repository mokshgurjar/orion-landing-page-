import Nav from '@/components/layout/Nav'
import Download from '@/components/sections/Download'
import Footer from '@/components/layout/Footer'

export const metadata = {
    title: 'Download Orion',
    description: 'Download the Orion Agent and IDE for macOS, Windows, or Linux.',
}

export default function DownloadPage() {
    return (
        <>
            <Nav />
            <div style={{ paddingTop: '80px' }}>
                {/* Re-use the existing download component directly */}
                <Download />
            </div>
            <Footer />
        </>
    )
}
