
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const { name, email, password } = await req.json()
        
        return NextResponse.json({message: "User Registered"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "Error Occured"}, {status:500})
    }
}
