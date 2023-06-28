import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Navbar() {
  return (
    <nav className="flex justify-end items-center fixed top-0 text-[#f6f2f2dc] bg-[#09090955] w-full h-[50px] z-10">
      <ul className="flex lg:gap-5 gap-4 lg:mr-5 mr-4">
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`#about`}>About</Link>
        </li>
        <li>
          <Link href={`#skills`}>Skills</Link>
        </li>
        <li>
          <Link href={`#projects`}>Projects</Link>
        </li>
        <li>
          <Link href={`https://github.com/michaelchristwin`} target="_blank">
            <AiFillGithub
              size={25}
              className="lg:w-[25px] w-[20px] h-[20px] lg:h-[25px]"
            />
          </Link>
        </li>
        <li>
          <Link href={`https://linkedin.com/michaelchristwin`}>
            <AiFillLinkedin
              size={25}
              className="lg:w-[25px] w-[20px] h-[20px] lg:h-[25px]"
            />
          </Link>
        </li>
        <li>
          <Link href={`https://twitter.com/michaelchristwin`}>
            <FaTwitter
              size={25}
              className="lg:w-[25px] w-[20px] h-[20px] lg:h-[25px]"
            />
          </Link>
        </li>
        <li>
          <Link href={`mailto:kelechukwuchristwin@gmail.com`}>
            <MdEmail
              size={25}
              className="lg:w-[25px] w-[20px] h-[20px] lg:h-[25px]"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
