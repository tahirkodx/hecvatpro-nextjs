import { Badge } from "@/components/global";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }: { post: any }) => {
  return (
    <Link href={`/articles/${post.slug}`} className="flex flex-col">
      <div className="max-w-[360px] rounded overflow-hidden transition-all duration-300 w-full min-h-full flex flex-col flex-1 bg-white post-card-shadow">
        <div className="relative h-[180px]">
          <div className="absolute top-5 right-5 z-10">
            <Badge text={post.data?.section} />
          </div>
          <Image
            src={post?.data?.ogImage}
            className="object-cover w-full h-full origin-top"
            fill
            alt="Sunset in the mountains"
          />
        </div>

        <div className="px-4 sm:px-[30px] mt-5 mb-[25px] relative">
          <Image
            src="https://www.hecvatpro.com/wp-content/uploads/nsl_avatars/76a9beffb555f3b75e4078f5cc0b0dd2.png"
            width={60}
            height={60}
            className="rounded-full object-cover size-[60px] shrink-0 -mt-12 z-10"
            alt="Avatar"
          />

          <div className="text-blue-600 text-left hover:text-blue-800 text-[21px] leading-[1.2] w-full sm:max-w-72 mt-5">
            {post.data.title}
          </div>

          <div className="my-[25px] text-gray-650 text-sm">
            {post.data.description}
          </div>

          <span
            // href={`/articles/${post.slug}`}
            className="text-blue-600 text-xs hover:text-blue-800 uppercase font-bold"
          >
            Read More »
          </span>
        </div>
        <div className="py-[15px] mt-auto px-[30px] border-t text-gray-600 text-xs border-t-gray-450">
          {post?.data?.date}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
