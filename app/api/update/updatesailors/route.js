import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    const { sid, sname, rating, age } = await request.json();

    const sql = `UPDATE sailors SET sname = '${sname}', rating = ${rating}, age = ${age} WHERE sid = ${sid}`;

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
        sailor: { sid, sname, rating, age },
      },
    };

    return new NextResponse(JSON.stringify(json_response), {
      status: 200,
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