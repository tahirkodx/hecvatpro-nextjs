import matter from "gray-matter";
import fs from "fs";
import path from "path";

export const getAllPosts = () => {
  const files = fs.readdirSync(path.join("src/posts"));

  return files.map((fileName: string) => {
    const slug = fileName.replace(".mdx", "");

    const fileContents = fs.readFileSync(
      path.join(`src/posts/${slug}.mdx`),
      "utf8"
    );

    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });
};

export const getPost = (slug: string) => {
  const fileContents = fs.readFileSync(
    path.join(`src/posts/${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};
