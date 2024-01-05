import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { sname, rating, age } = await request.json();

    const sqlDelete = `DELETE FROM sailors WHERE sname='${sname}'`;
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
        sailor: { sname, rating, age },
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
