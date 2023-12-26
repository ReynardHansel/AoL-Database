import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-screen p-10">
          <Link href="/data-maintanance" className="card">
            Data Maintanance
          </Link>
          <Link href="/report" className="card">
            Report
          </Link>
    </div>
    </>
  )
}
