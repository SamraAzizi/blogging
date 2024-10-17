import prisma from "@/lib/db"; // Ensure this path is correct
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req) {
  const user = await getCurrentUser();

  try {
    // Check if the user is authenticated
    if (!user?.email) {
      return NextResponse.json({ message: 'Not Authenticated!' }, { status: 401 });
    }

    // Parse the incoming request JSON
    const { title, content } = await req.json();

    // Validate input data
    if (!title || !content) {
      return NextResponse.json({ message: 'Title and content are required!' }, { status: 400 });
    }

    // Create a new post
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorEmail: user.email, // Make sure this matches your Post model
      },
    });

    // Return the new post in the response
    return NextResponse.json({ newPost }, { status: 200 });
  } catch (error) {
    console.error('Error creating post:', error); // Log the error for debugging
    return NextResponse.json({ message: 'Something went wrong!', error: error.message }, { status: 500 });
  }
}
