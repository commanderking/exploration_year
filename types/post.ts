export type BlogTag = "tech" | "meta";

export type Post = {
  frontMatter: {
    title: string;
    isPublished: boolean;
    publishedOn: string | null;
    description: string;
    tags: BlogTag[];
  };
  slug: string;
};
