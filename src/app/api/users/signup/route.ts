import connectToDB from "@/dbconfig/dbconfig";
import NextUser from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectToDB()

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const {username, email, password} = reqBody;

        const isExistingUser = await NextUser.findOne({email})

        if(isExistingUser){
            return NextResponse.json({message: "email already registered"}, {status: 400})
        }

        if(!username || !email || !password){
            return NextResponse.json({message: "please enter the required fields"}, {status: 400});
        }

        const user = new NextUser({
            username, email, password
        })

        const savedData = await user.save()

        return NextResponse.json({message: "User successfully registered"}, {status: 201});

    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 500});
    }
}