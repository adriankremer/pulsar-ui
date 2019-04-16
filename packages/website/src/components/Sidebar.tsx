import React from "react";
import { Link } from "gatsby";

type SidebarProps = {
  items: {
    node: {
      frontmatter: {
        title: string;
        path: string;
      };
    };
  }[];
};

export const Sidebar = ({ items }: SidebarProps) => {
  return (
    <ul>
      {items.map(({ node }) => (
        <li key={node.frontmatter.title}>
          <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  );
};
