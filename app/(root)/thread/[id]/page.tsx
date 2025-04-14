import { redirect, notFound } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import { fetchUser } from "@/lib/actions/user.actions";
import { fetchThreadById } from "@/lib/actions/thread.actions";

import ThreadCard from "@/components/cards/ThreadCard";

export default async function Page({ params }: { params: { id: string } }) {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  try {
    const thread = await fetchThreadById(params.id);
    
    if (!thread) {
      notFound();
    }

    return (
      <section className="relative">
        <div>
          <ThreadCard
            key={thread._id}
            id={thread._id}
            currentUserId={user.id}
            parentId={thread.parentId}
            content={thread.text}
            author={thread.author}
            community={thread.community}
            createdAt={thread.createdAt}
            comments={thread.children}
          />
        </div>
      </section>
    );
  } catch (error) {
    // If thread fetch fails, show the not found page
    notFound();
  }
}
