"use client";
import { useState, useEffect } from "react";

export default function Select() {
  const [sailorSum, setSailorSum] = useState(null);
  const [boatSum, setBoatSum] = useState(null);
  const [sailorAvgRating, setSailorAvgRating] = useState(null);
  const [sailorAvgAge, setSailorAvgAge] = useState(null);

  // Fetch sailorSum
  useEffect(() => {
    fetch("/api/report/sailorsum")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSailorSum(data.data);
      })
      .catch((error) => {
        console.log("Error in sailorSum:", error);
      });
  }, []);

  // Fetch boatSum
  useEffect(() => {
    fetch("/api/report/boatsum")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBoatSum(data.data);
      })
      .catch((error) => {
        console.log("Error in boatSum:", error);
      });
  }, []);

  // Fetch sailorAvgRating
  useEffect(() => {
    fetch("/api/report/sailor_avg_rating")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSailorAvgRating(data.data);
      })
      .catch((error) => {
        console.log("Error in boatSum:", error);
      });
  }, []);

  // Fetch sailorAvgAge
  useEffect(() => {
    fetch("/api/report/sailor_avg_age")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSailorAvgAge(data.data);
      })
      .catch((error) => {
        console.log("Error in boatSum:", error);
      });
  }, []);

  // console.log(sailorSum.total);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-4 h-screen">
        <div className="flex flex-col gap-2 justify-center items-center border p-4 rounded">
          <p className="text-xl">Jumlah sailors</p>
          <p className="text-gray-500 text-lg">{sailorSum === null ? "Loading data..." : sailorSum.total}</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center border p-4 rounded">
          <p className="text-xl">Jumlah Boats</p>
          <p className="text-gray-500 text-lg">{boatSum === null ? "Loading data..." : boatSum.total}</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center border p-4 rounded">
          <p className="text-xl text-center">Rata-Rata Rating Sailors</p>
          <p className="text-gray-500 text-lg">
            {sailorAvgRating === null
              ? "Loading data..."
              : sailorAvgRating.average_rating}
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center border p-4 rounded">
          <p className="text-xl text-center">Rata-Rata Age Sailors</p>
          <p className="text-gray-500 text-lg">
            {sailorAvgAge === null
              ? "Loading data..."
              : sailorAvgAge.average_age}
          </p>
        </div>
      </div>
    </>
  );
}

//* Note:
// If you encounter an error somehow even though you did nothing, it may be because the fetching took too long. So the data is not ready yet, therefore it'll try to display null, which is impossible
