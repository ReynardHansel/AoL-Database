import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function GET() {
  //* somehow the code in the try function works!
  try {
    const sql = "SELECT AVG(age) AS average_age FROM sailors";
    const data = await new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        // console.log(result)
        if (err) return reject(err);
        resolve(result[0]);
      });
    });

    return NextResponse.json({ data });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error fetching data" });
  }
}
