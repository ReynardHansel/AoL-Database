import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    const { sid, bid, days } = await request.json();

    const [year, month, day] = days.split("-");
    const formattedDate = `${day}/${month}/${year}`;

    // const sql = `UPDATE reserves SET days = '${days}' WHERE sid = ${sid} AND bid = ${bid}`;

    // const data = await new Promise((resolve, reject) => {
    //   db.query(sql, (err, result) => {
    //     if (err) return reject(err);
    //     resolve(result);
    //   });
    // });

    //* The method below makes it safer against SQL injection attacks
    const sql = `UPDATE reserves SET days = ? WHERE sid = ? AND bid = ?`;

    const data = await new Promise((resolve, reject) => {
      db.query(sql, [formattedDate, sid, bid], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    console.log(data)

    let json_response = {
      status: "success",
      data: {
        reserve: { sid, bid, days },
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