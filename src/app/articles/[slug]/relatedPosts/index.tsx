import PostCard from "@/components/postCard";
import { getAllPosts } from "@/helpers/post";

export default async function RelatedPosts() {
  const posts: any = getAllPosts();
  const relatedPosts = posts.slice(0, 3);
  return (
    <div className="py-10 md:py-20 max-w-7xl mx-auto px-5">
      <div className="mb-10">
        <h2 className="text-xl text-black md:text-4xl font-bold text-center">
          Related Posts
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-y-[35px] gap-x-[30px]">
        {relatedPosts.map((post: any, idx: any) => {
          return <PostCard key={"related_post_" + idx} post={post} />;
        })}
      </div>
    </div>
  );
}
