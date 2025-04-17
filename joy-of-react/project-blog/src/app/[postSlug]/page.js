import React from "react";
import BlogHero from "@/components/BlogHero";
import BlogContent from "@/components/BlogContent";
import { loadBlogPost } from "@/helpers/file-helpers.js";

import styles from "./postSlug.module.css";
import { BLOG_TITLE } from "@/constants";

export async function generateMetadata({ params }) {
  const post = await loadBlogPost(params.postSlug);

  return {
    title: `${post.frontmatter.title} • ${BLOG_TITLE}`,
    description: post.frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const post = await loadBlogPost(params.postSlug);
  const { title, publishedOn } = post.frontmatter;

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <BlogContent mdxContent={post.content} />
      </div>
    </article>
  );
}

export default BlogPost;
