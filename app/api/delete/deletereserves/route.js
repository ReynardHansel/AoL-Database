import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { sid, bid, days } = await request.json();

    console.log({ "days": days });

    const [year, month, day] = days.split("-");
    const formattedDate = `${day}/${month}/${year}`;

    const sqlDelete = `DELETE FROM reserves WHERE sid=${sid} AND bid=${bid} AND days='${formattedDate}'`;
    const deleteResult = await new Promise((resolve, reject) => {
      db.query(sqlDelete, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    console.log(deleteResult);

    let json_response = {
      status: "success",
      data: {
        reserve: { sid, bid, days },
      },
    };

    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    let error_response = {
      status: "error",
      message: error.message,
    };

    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
