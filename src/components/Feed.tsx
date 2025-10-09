import React from "react";
import Post from "./Post";
import { prisma } from "@/prisma";

const Feed = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div>
      {posts.map((post) => (
        <div className='' key={post.id}>
          <Post type='post' />
        </div>
      ))}
    </div>

    // <div>
    //   <Post type="post" />
    // </div>
  );
};

export default Feed;
