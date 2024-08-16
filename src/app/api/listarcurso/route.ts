
import { NextRequest, NextResponse } from "next/server";
import {PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


//FUNCTION TYPE GET
export async function GET(){


    return NextResponse.json({
        message: "welcome to the aula virtual",
        data: "This is a test data",
        status:200
        
    })
}

