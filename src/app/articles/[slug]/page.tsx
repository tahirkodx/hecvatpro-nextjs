import Banner from "@/components/banner";
import { getAllPosts, getPost } from "@/helpers/post";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import RelatedPosts from "./relatedPosts";
import dynamic from "next/dynamic";
const MyPost = dynamic(() => import("@/components/myPost"), {
  ssr: false,
});
export async function generateStaticParams() {
  const posts = await getAllPosts();
  const ids = posts.map((item) => {
    return { slug: item.slug };
  });
  return ids;
}

export default async function ArticlePost({ params }: any) {
  const { slug } = params;
  const post: any = getPost(slug);

  const { title, date, description, author } = post.data;
  const mdxSource = await serialize(post.content);

  return (
    <div className="grid justify-items-center bg-gray-default">
      <Banner showIndicator={false} className="border-t border-[#2E2E2E]">
        <div className="container mx-auto px-5 pt-[30px] pb-5 font-favorit">
          <div className="flex flex-col gap-3">
            <h1 className="text-white lg:text-7xl font-light lg:leading-[88px] text-4xl">
              {title}
            </h1>
            <h2 className="text-gray-50 lg:text-2xl text-lg font-light">
              {description}
            </h2>
          </div>

          <div className="mt-80">
            <div className="border-t border-[#2E2E2E] py-2">
              <div className="text-gray-350 text-xs max-sm:text-center">
                By {author} | {date} | 5 min read
              </div>
            </div>
          </div>
        </div>
      </Banner>

      <div className="pt-20 pb-5 w-full bg-yellow-30">
        <div className="md:flex flex-wrap items-stretch max-w-7xl mx-auto px-5">
          <div className="p-2.5 pl-5 md:max-w-56 md:mb-44 xl:mb-0 h-full md:sticky top-0 bg-yellow-30">
            <p className="text-gray-800 font-medium text-xl">
              Table of Contents
            </p>
            <ol className="list-decimal list-inside mt-12">
              <li className=" hover:underline underline-offset-3 text-gray-850">
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
            </ol>
          </div>
          <div className="flex-1 w-full border border-[#BFBFBF] px-6 py-7">
            <MyPost mdxSource={mdxSource} />
          </div>
          <div className="p-2.5 w-full xl:max-w-28 xl:sticky h-full top-0 bg-yellow-30">
            <div>
              <h3 className="text-yellow-50 text-lg mb-5">Author</h3>
              <Image
                src="https://www.hecvatpro.com/wp-content/uploads/nsl_avatars/76a9beffb555f3b75e4078f5cc0b0dd2.png"
                width={60}
                height={60}
                className="rounded-full object-cover size-[60px] shrink-0"
                alt="Avatar"
              />
              <p className="text-lg font-semibold text-gray-800">{author}</p>
            </div>
          </div>
        </div>
      </div>

      <RelatedPosts />
    </div>
  );
}
