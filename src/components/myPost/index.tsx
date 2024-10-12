"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

const MyPost = ({ mdxSource }: Props) => {
  if (!mdxSource) return null;

  return (
    <div className="prose">
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default MyPost;
