import React from "react";
import Post from "./Post";
import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

const Feed = async ({ userProfileId }: { userProfileId: string }) => {
  const { userId } = await auth();

  if (!userId) return;
  const whereCondition = userProfileId
    ? { userId: userProfileId }
    : {
        userId: {
          in: [
            userId,
            ...(
              await prisma.follow.findMany({
                where: { followerId: userId },
                select: { followingId: true },
              })
            ).map((follow) => follow.followingId),
          ],
        },
      };


  const posts = await prisma.post.findMany({
    where: whereCondition,
  });

  console.log("the output: ", posts);

  // FETCH USER FROM CURRENT USER AND FOLLOWING
  return (
    <div>
      {/* {posts.map((post) => (
        <div className='' key={post.id}>
          <Post type='post' />
        </div>
      ))} */}
    </div>

    // <div>
    //   <Post type="post" />
    // </div>
  );
};

export default Feed;
