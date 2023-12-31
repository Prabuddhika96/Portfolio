// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "Home", path: RouteNames.Home, icon: <HiHome /> },
  { name: "About", path: RouteNames.About, icon: <HiUser /> },
  { name: "Services", path: RouteNames.Services, icon: <HiRectangleGroup /> },
  { name: "Projects", path: RouteNames.Work, icon: <HiViewColumns /> },
  {
    name: "Testimonials",
    path: RouteNames.Testimonials,
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "Contact",
    path: RouteNames.Contact,
    icon: <HiEnvelope />,
  },
];

// next link
import Link from "next/link";

// next router
import { useRouter } from "next/router";
import { RouteNames } from "../constants/RouteNames";

const Nav = () => {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <nav
      className={`flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen`}
    >
      <div className="flex items-center justify-between w-full px-4 py-8 text-3xl xl:flex-col xl:justify-center gap-y-10 md:px-40 xl:px-0 h-[80px] xl:h-max bg-[#9B83FF]/10 backdrop-blur-sm xl:text-xl xl:rounded-full">
        {navData?.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathName && `text-[#5F58F9]`
              } relative flex items-center group hover:text-[#9B83FF] transition-all duration-300`}
            >
              {/* tooltip */}
              <div
                className={`absolute pr-14 right-0 hidden xl:group-hover:flex`}
              >
                <div
                  className={`bg-white relative flex text-primary items-center p-[6px] rounded-[3px]`}
                >
                  <div
                    className={`text-[12px] leading-none font-semibold capitalize`}
                  >
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div
                    className={`border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2`}
                  ></div>
                </div>
              </div>

              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
