import { connectToDB } from "@/lib/connectDB";
import isAdmin from "@/lib/isAdmin";
import { announcement } from "@/models/announcement";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    console.log(body);
  
    if (!body || !body.title || !body.description) {
      return new NextResponse("Invalid data", { status: 400 });
    }
  
    await connectToDB();
  
    try {
      const { userId } = await auth();

      if(!isAdmin(userId ? userId : "")) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
      
      const createdAt = new Date();
      const newAnnouncement = new announcement({ title: body.title, description: body.description, imageUrl: body.imageUrl, time: createdAt });
      await newAnnouncement.save();
  
      return NextResponse.json(newAnnouncement);
    }
    catch (error) {
      console.log(error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
}