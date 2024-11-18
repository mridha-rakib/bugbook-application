"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import UserAvatar from "@/components/UserAvatar";
import { cn } from "@/lib/utils";
import { useSession } from "@/app/(main)/SessionProvider";

export default function PostEditor() {
  const { user } = useSession();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "What's you want to write'?",
      }),
    ],
  });

  return (
    <div>
      <div>
        <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
        <div>
          <EditorContent
            editor={editor}
            className={cn(
              "max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3",
            )}
          />
        </div>
      </div>
    </div>
  );
}
