import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const { sid, bid, days } = await request.json();

    console.log({"days": days})

    //* Convert date from DD/MM/YYYY to YYYY-MM-DD (because mySQL stuff)
    //? Received the data in yyyy-mm-dd (like '2024-01-10'), idk is it cuz of mySQL or that's just how the default is
    //? Basically how this code works is by pisahin data dari si days trs mskin ke variable year,month,day masing", trs scr manual digabung lg jd dd-mm-yyyy, trs dimasukin ke formattedDate. Nah baru si string formattedDate itu yang dimasukin ke database
    const [year, month, day] = days.split("-");
    const formattedDate = `${day}/${month}/${year}`;

    const sql = `DELETE FROM sailors WHERE sid = ${sid} ${bid} ${days}`;

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

//! I don't know how tf that code actually works 💀
//? Reference: https://codevoweb.com/build-a-simple-api-in-next-js-13-app-directory/
