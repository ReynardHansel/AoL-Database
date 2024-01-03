"use client";
import { useState, useEffect } from "react";

export default function Select() {
  const [sailors, setSailors] = useState([]);

  useEffect(() => {
    fetch("/api/get/getsailors")
      .then((res) => res.json())
      .then((data) => {
        setSailors(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(sailors.data);

  return (
    <div className="">
      <table className="p-6 w-full max-w-screen divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NAME
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              RATING
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              AGE
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {sailors.map((sailor) => (
            <tr key={sailor.sid} className="border-b">
              <td className="px-6 py-4 whitespace-nowrap">{sailor.sid}</td>
              <td className="px-6 py-4 whitespace-nowrap">{sailor.sname}</td>
              <td className="px-6 py-4 whitespace-nowrap">{sailor.rating}</td>
              <td className="px-6 py-4 whitespace-nowrap">{sailor.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

//* Next:
// - try mapping out just a variable, like sailors.sid only

//* Note:
// - The failure in displaying the data, and what causes the error "...map is not a function", is because... try running the backend api, it returns Data: []. So, instead of setSailors(data), instead I should be using setSailors(data.data) WHYY NFCERIUNCUIERUFB?!?!
