import { NextResponse } from "next/server";

export const blogs = [
  {
    id: 5,
    title: "Python",
    content: "Machine Learning",
    thumbnail: "https://i.ibb.co.com/VLLfJ3n/python.jpg",
    isFeatured: true,
    tags: ["Python", "ML", "AI"],
    views: 0,
    authorId: 1,
    createdAt: "2025-09-22T18:34:36.984Z",
    updatedAt: "2025-09-22T18:34:36.984Z",
    author: {
      id: 1,
      name: "Tanmoy Parvez",
      email: "tanmoy@gmail.com",
      password: "tanmoy1234",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-21T17:43:13.257Z",
      updatedAt: "2025-09-21T17:43:13.257Z",
    },
  },
  {
    id: 4,
    title: "Vitae vero consequun",
    content: "Quibusdam aut volupt",
    thumbnail: "https://i.ibb.co.com/BcpLPdn/web-ph.png",
    isFeatured: true,
    tags: ["Next.js", "Prisma"],
    views: 0,
    authorId: 1,
    createdAt: "2025-09-22T18:29:11.953Z",
    updatedAt: "2025-09-22T18:29:11.953Z",
    author: {
      id: 1,
      name: "Tanmoy Parvez",
      email: "tanmoy@gmail.com",
      password: "tanmoy1234",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-21T17:43:13.257Z",
      updatedAt: "2025-09-21T17:43:13.257Z",
    },
  },
  {
    id: 3,
    title: "Getting Started with React",
    content:
      "React introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
    thumbnail: "https://teamraft.com/wp-content/uploads/nextjs.jpg",
    isFeatured: true,
    tags: ["Next.js", "React", "Web Development"],
    views: 9,
    authorId: 2,
    createdAt: "2025-09-21T19:01:55.207Z",
    updatedAt: "2025-09-22T15:02:20.696Z",
    author: {
      id: 2,
      name: "Abdullah Al Towsif",
      email: "towsif@gmail.com",
      password: "tanmoy1234",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-21T19:01:32.949Z",
      updatedAt: "2025-09-21T19:01:32.949Z",
    },
  },
  {
    id: 2,
    title: "Getting Started with Prisma",
    content:
      "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
    thumbnail: "https://teamraft.com/wp-content/uploads/nextjs.jpg",
    isFeatured: true,
    tags: ["Next.js", "React", "Web Development"],
    views: 3,
    authorId: 1,
    createdAt: "2025-09-21T18:28:14.034Z",
    updatedAt: "2025-09-22T15:02:24.627Z",
    author: {
      id: 1,
      name: "Tanmoy Parvez",
      email: "tanmoy@gmail.com",
      password: "tanmoy1234",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-21T17:43:13.257Z",
      updatedAt: "2025-09-21T17:43:13.257Z",
    },
  },
  {
    id: 1,
    title: "Getting Started with Next.js",
    content:
      "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
    thumbnail: "https://teamraft.com/wp-content/uploads/nextjs.jpg",
    isFeatured: true,
    tags: ["Next.js", "React", "Web Development"],
    views: 5,
    authorId: 1,
    createdAt: "2025-09-21T17:43:18.558Z",
    updatedAt: "2025-09-22T15:02:27.358Z",
    author: {
      id: 1,
      name: "Tanmoy Parvez",
      email: "tanmoy@gmail.com",
      password: "tanmoy1234",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-21T17:43:13.257Z",
      updatedAt: "2025-09-21T17:43:13.257Z",
    },
  },
];

export async function GET() {
  return Response.json(blogs);
}


export const POST = async (req: Request) => {
    const blog = await req.json();
    const newBlog = {
        ...blog,
        id: blogs.length + 1,
    };
    blogs.push(newBlog);

    return new NextResponse(JSON.stringify(newBlog), {
        status: 201,
        headers: {
            "Content-Type" : "application/json"
        }
    });
}