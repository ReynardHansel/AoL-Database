import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const { bid } = await request.json();

    const sql = `DELETE FROM boats WHERE sid = ${bid}`;

    const data = await new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    console.log(data);

    if (data.affectedRows > 0) {
      let json_response = {
        status: "success",
        message: "Boat deleted successfully",
      };

      return new NextResponse(JSON.stringify(json_response), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } 
    
    else {
      let error_response = {
        status: "error",
        message: "Sailor not found",
      };

      return new NextResponse(JSON.stringify(error_response), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
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
