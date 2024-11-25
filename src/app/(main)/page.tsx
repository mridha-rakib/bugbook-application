import PostEditor from "@/components/posts/editor/postEditor";
import TrendsSidebar from "@/components/TrendsSidebar";
import ForYourFeed from "./ForYourFeed";

export default async function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        <ForYourFeed />
      </div>
      <TrendsSidebar />
    </main>
  );
}
