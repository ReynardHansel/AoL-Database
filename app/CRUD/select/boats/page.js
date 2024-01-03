"use client";
import { useState, useEffect } from "react";

export default function Select() {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    fetch("/api/get/getboats")
      .then((res) => res.json())
      .then((data) => {
        setBoats(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(boats.data);

  return (
    <div className="">
      <table className="p-6 w-full max-w-screen divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              NAME
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              COLOR
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {boats.map((boat) => (
            <tr key={boat.sid} className="border-b">
              <td className="px-6 py-4 whitespace-nowrap text-center">{boat.bid}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{boat.bname}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{boat.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
