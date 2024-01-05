import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
  try {
    const { bid } = req.query;
    const sql = `DELETE FROM boats WHERE bid = ${sid}`;

    await db.query(sql, [bid], (err, result) => {
      if (err) throw err;
    });

    res.status(204).json({ message: "Boat deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting boat" });
  }
}
