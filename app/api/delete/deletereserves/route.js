import { db } from "../../../../database/server";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
  try {
    const { resid } = req.query;
    const sql = `DELETE FROM reserves WHERE resid = ${sid}`; 
    
    await db.query(sql, [resid], (err, result) => {
      if (err) throw err;
    });

    res.status(204).json({ message: "Reserve deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting reserve" });
  }
}
