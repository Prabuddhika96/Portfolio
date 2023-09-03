// next link
import Link from "next/link";

// next image
import Image from "next/image";

// components
import Socials from "./Socials";

import { RouteNames } from "../constants/RouteNames";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between py-8 lg:flex-row gap-y-6">
          {/* logo */}
          <Link href={RouteNames.Home}>
            <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
              // className="w-full h-full animate-spin-slow max-w-[141px] max-h-[148px]"
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
