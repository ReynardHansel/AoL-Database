import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
  try {
    const { sid } = req.query; 
    const sql = `DELETE FROM sailors WHERE sid = ${sid}`;

    await db.query(sql, [sid], (err, result) => {
      if (err) throw err; 
    });

    res.status(204).json({ message: "Sailor deleted successfully" }); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting sailor" });
  }
}
