import Link from "next/link";

export default function Crud({ searchParams }) {
  // console.log(searchParams)
  //* searchParams.value is what the user selects (sailor/boat/reserve)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-screen p-10">
      <Link
        className="card"
        href={{
          pathname: `../CRUD/select/${searchParams.value}`,
        }}
      >
        Select
      </Link>

      <Link
        className="card"
        href={{
          pathname: "../CRUD/insert",
          query: {
            value: searchParams.value,
          },
        }}
      >
        Insert
      </Link>

      <Link
        className="card"
        href={{
          pathname: "../CRUD/delete",
          query: {
            value: searchParams.value,
          },
        }}
      >
        Delete
      </Link>

      <Link
        className="card"
        href={{
          pathname: `../CRUD/update/${searchParams.value}`,
          query: {
            value: searchParams.value,
          },
        }}
      >
        Update
      </Link>

      {/* <p>{searchParams.value}</p> */}
    </div>
  );
}
