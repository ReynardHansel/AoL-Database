import { db } from '../../../database/server'
import { NextResponse } from "next/server"

export async function GET() {
    //* somehow the code in the try function works!
    try {
        const sql = "SELECT * FROM sailors"
        const data = await new Promise ((resolve, reject) => {
            db.query(sql, (err, result) => {
                // console.log(result)
                if (err) return reject(err)
                resolve(result)
            })
        })

        return NextResponse.json({ data })
    }
    catch (err) {
        console.err(err)
        return NextResponse.json({error : "Error fetching data"})
    }
}