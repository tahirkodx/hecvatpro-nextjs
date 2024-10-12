import PostCard from "@/components/postCard";
import { getAllPosts } from "@/helpers/post";

export default function Articles() {
  const posts: any = getAllPosts();

  return (
    <div className="grid justify-items-center bg-gray-default py-2.5 px-4">
      <h1 className="font-medium text-2xl sm:text-[40px] text-left text-balance text-gray-800 sm:leading-10 py-[23px]">
        Hecvat Pro Articles: Expert Insights & Updates
      </h1>

      {Array.isArray(posts) && posts.length > 0 ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-y-[35px] gap-x-[30px]">
          {posts.map((post: any, idx: any) => {
            return <PostCard key={"post_" + idx} post={post} />;
          })}
        </div>
      ) : (
        <p className="py-10 text-2xl">No posts found</p>
      )}
    </div>
  );
}
