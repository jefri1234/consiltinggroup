import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function POST(request:NextRequest ){
    
    const {userfound} = await request.json()
    console.log("para buscar user que que llega next",userfound)
    const user = await prisma.user.findUnique(
        {
            where:{
                id:Number(userfound)
            }
        }
    )
    //send the user foudn
    return NextResponse.json({
        status:200,
        message:"user find",
        data:user
    })
}