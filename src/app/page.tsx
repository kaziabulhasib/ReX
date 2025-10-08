import Feed from "@/components/Feed";
import Share from "@/components/Share";
import { prisma } from "@/prisma";
import Link from "next/link";

const Homepage = async () => {
  const users = await prisma.user.delete({
    where: {
      id: "testuser",
    },
  });
  console.log(users);
  return (
    <div className='relative h-[600px] w-[600px]'>
      <div className=' px-4 pt-4 flex items-center justify-between text-textGray font-bold border-b-[1px] border-borderGray'>
        <Link
          className='pb-3 flex items-center border-b-4 border-iconBlue'
          href='/'>
          For You
        </Link>
        <Link className='pb-3 flex items-center ' href='/'>
          Following
        </Link>
        <Link className='pb-3 hidden md:flex items-center ' href='/'>
          css
        </Link>
        <Link className='pb-3 hidden md:flex items-center ' href='/'>
          Javascript
        </Link>
        <Link className='pb-3 hidden md:flex items-center ' href='/'>
          React
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
