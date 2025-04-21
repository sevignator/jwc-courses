import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "@/components/CodeSnippet";

import CircularColorsDemo from "@/components/CircularColorsDemo";
import DivisionGroupsDemo from "@/components/DivisionGroupsDemo";

export default function BlogContent({ mdxContent }) {
  return (
    <MDXRemote
      source={mdxContent}
      components={{
        CircularColorsDemo,
        DivisionGroupsDemo,
        pre: CodeSnippet,
      }}
    />
  );
}
