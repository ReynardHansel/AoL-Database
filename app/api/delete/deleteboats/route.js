import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { bname, color } = await request.json();

    const sqlDelete = `DELETE FROM boats WHERE bname='${bname}'`;

    await new Promise((resolve, reject) => {
      db.query(sqlDelete, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    let json_response = {
      status: "success",
      data: {
        sailor: { bname, color },
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
