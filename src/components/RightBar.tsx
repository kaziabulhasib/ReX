import React from "react";
import Search from "./Search";
import PopularTags from "./PopularTags";

import Link from "next/link";
import Recommendations from "./Recommendations";

const RightBar = () => {
  return (
    <div className='pt-4 flex flex-col gap-4  sticky top-0 h-screen '>
      <Search />
      <PopularTags />
      <Recommendations />
      <div className='text-textGray text-sm flex gap-x-4 flex-wrap'>
        <Link href='/'>Terms of Service</Link>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Cookie Policy</Link>
        <Link href='/'>Accessibility</Link>
        <Link href='/'>Ads Info</Link>
        <span>© {new Date().getFullYear()} ReX Corp.</span>
      </div>
    </div>
  );
};

export default RightBar;
