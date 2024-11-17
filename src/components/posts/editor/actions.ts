"use server";

import { validateRequest } from "@/auth";
import { createPostSchema } from "@/lib/validation";
import prisma from "@/lib/prisma";

export async function submitPost(input: { content: string }) {
  const { user } = await validateRequest();

  const { content } = createPostSchema.parse(input);

  if (!user) throw new Error("Unauthorized");

  const newPost = await prisma.post.create({
    data: {
      content,
      userId: user.id,
    },
  });

  return newPost;
}
