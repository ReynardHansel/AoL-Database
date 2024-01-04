import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { sid, sname, rating, age } = req.body;

    const sql = `INSERT INTO sailors (sid, sname, rating, age)
                 VALUES (?, ?, ?, ?)`;

    const data = await new Promise((resolve, reject) => {
      db.query(sql, [sid, sname, rating, age], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    res.status(201).json({ message: "Sailor inserted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error inserting sailor" });
  }
}
