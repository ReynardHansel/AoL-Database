import Link from 'next/link'

export default function Crud({ searchParams }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-screen p-10">
        <Link href="#" className="card">Select</Link>
        <Link href="#" className="card">Insert</Link>
        <Link href="#" className="card">Delete</Link>
        <Link href="#" className="card">Update</Link>
    </div>
  )
}

