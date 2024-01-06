import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    const { bid, bname, color } = await request.json();

    const sql = `UPDATE boats SET bname = '${bname}', color = '${color}' WHERE bid = ${bid}`;

    const data = await new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    console.log(data)

    let json_response = {
      status: "success",
      data: {
        boat: { bid, bname, color },
      },
    };

    return new NextResponse(JSON.stringify(json_response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    let error_response = {
      status: "error",
      message: error.message
    };

    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}