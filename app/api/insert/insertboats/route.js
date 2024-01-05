import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { bname, color } = await request.json();

    const sql = `INSERT INTO boats (bname, color) VALUES ('${bname}', '${color}')`;

    const data = await new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    console.log(data);

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

//! I don't know how tf that code actually works 💀
//? Reference: https://codevoweb.com/build-a-simple-api-in-next-js-13-app-directory/
