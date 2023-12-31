import Link from 'next/link'

export default function DataMaintanance() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-screen p-10">
        <Link className="card" 
        href={{
            pathname: "../CRUD",
            query: {
                value: 'sailors'
            }
        }}
        >
            Sailors
        </Link>
        
        <Link className="card"
        href={{
            pathname:"../CRUD",
            query: {
                value:'boats'
            }
        }}
        >
            Boats
        </Link>

        <Link className="card col-span-1 lg:col-span-2"
        href={{
            pathname:"../CRUD",
            query: {
                value:'reserves'
            }
        }}
        >
            Reserves
        </Link>
    </div>  
)
}
