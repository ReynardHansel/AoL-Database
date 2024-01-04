"use client";
import { useState, useEffect } from "react";

export default function Select() {
  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    fetch("/api/get/getreserves")
      .then((res) => res.json())
      .then((data) => {
        setReserves(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(reserves.data);

  return (
    <div className="">
      <table className="p-6 w-full max-w-screen divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sailor ID
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Boat ID
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reservation Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {reserves.length === 0 ? (
            <tr>
            <td
              colSpan="4"
              className="px-6 py-4 whitespace-nowrap text-center"
            >
              Loading data...
            </td>
          </tr>
          ) : (
            reserves.map((reserve) => (
              <tr key={reserve.sid} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-center">{reserve.sid}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{reserve.bid}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{reserve.days}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
