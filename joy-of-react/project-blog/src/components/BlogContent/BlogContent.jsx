import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function BlogContent({ mdxContent }) {
  return <MDXRemote source={mdxContent} />;
}
