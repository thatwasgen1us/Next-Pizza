import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma-client";

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      fullName: true,
      email: true,
      password: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  
  return NextResponse.json(
    users
  )
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const user = await prisma.user.create({
    data
  })
  return NextResponse.json(user)
}
