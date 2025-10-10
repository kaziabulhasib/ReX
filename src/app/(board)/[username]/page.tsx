import Feed from "@/components/Feed";
import Image from "@/components/Image";
import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { notFound } from "next/navigation";

const UserPage = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const { userId } = await auth();

  console.log("user id is ", userId)

  const username = (await params).username;

  const user = await prisma.user.findUnique({
    where: { username: username },
    include: {
      _count: { select: { followers: true, followings: true } },
      followings: userId ? { where: { followerId: userId } } : undefined,
    },
  });

  console.log("the user is : ", userId);
  if (!user) return notFound();

  return (
    <div className=''>
      {/* PROFILE TITLE */}
      <div className='flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]'>
        <Link href='/'>
          <Image src='/icons/back.svg' alt='back' w={24} h={24} />
        </Link>
        <h1 className='font-bold text-lg'>Kazi Hasib</h1>
      </div>
      {/* INFO */}
      <div className=''>
        {/* COVER & AVATAR CONTAINER */}
        <div className='relative w-full'>
          {/* COVER */}
          <div className='w-full aspect-[3/1] relative'>
            <Image src='/general/cover.jpg' alt='' w={600} h={200} tr={true} />
          </div>
          {/* AVATAR */}
          <div className='w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2'>
            <Image src='/general/avatar.png' alt='' w={100} h={100} tr={true} />
          </div>
        </div>
        <div className='flex w-full items-center justify-end gap-2 p-2'>
          <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
            <Image src='/icons/more.svg' alt='more' w={20} h={20} />
          </div>
          <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
            <Image src='/icons/explore.svg' alt='more' w={20} h={20} />
          </div>
          <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
            <Image src='/icons/message.svg' alt='more' w={20} h={20} />
          </div>
          <button className='py-2 px-4 bg-white text-black font-bold rounded-full'>
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className='p-4 flex flex-col gap-2'>
          {/* USERNAME & HANDLE */}
          <div className=''>
            <h1 className='text-2xl font-bold'>Kazi Hasib</h1>
            <span className='text-textGray text-sm'>@hasib98</span>
          </div>
          <p>Kazi Hasib Youtube Channel</p>
          {/* JOB & LOCATION & DATE */}
          <div className='flex gap-4 text-textGray text-[15px]'>
            <div className='flex items-center gap-2'>
              <Image
                src='/icons/userLocation.svg'
                alt='location'
                w={20}
                h={20}
              />
              <span>USA</span>
            </div>
            <div className='flex items-center gap-2'>
              <Image src='/icons/date.svg' alt='date' w={20} h={20} />
              <span>Joined May 2021</span>
            </div>
          </div>
          {/* FOLLOWINGS & FOLLOWERS */}
          <div className='flex gap-4'>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>100</span>
              <span className='text-textGray text-[15px]'>Followers</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold'>100</span>
              <span className='text-textGray text-[15px]'>Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* FEED */}
      <Feed userProfileId={user.id} />
    </div>
  );
};

export default UserPage;
