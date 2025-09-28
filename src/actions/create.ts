"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export const create = async (data: FormData) => {
    const session = await getUserSession()
    const blogInfo = Object.fromEntries(data.entries()) // converts form data in plain objects
    const modifiedData = {
        ...blogInfo,
        authorId: session?.user.id,
        tags: blogInfo.tags.toString().split(",").map(tag => tag.trim()),
        isFeatured: Boolean(blogInfo.isFeatured),
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(modifiedData),
    })
    const result = await res.json();
    if(result?.id) {
        revalidateTag("BLOGS");
        redirect("/");
    }
    return result;
}
