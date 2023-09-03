// next link
import Link from "next/link";

// social links
import { socialData } from "../constants/SocialLinks";

const Socials = () => {
  return (
    <div className="flex items-center text-xl gap-x-5">
      {socialData?.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className="transition-all duration-300 hover:text-[#5F58F9]"
          >
            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
