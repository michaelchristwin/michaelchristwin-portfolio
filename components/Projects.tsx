import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects pb-5 bg-[#1a1a1a]" id="projects">
      <h1 className="text-center text-[30px] mt-[50px] font-[500] lg:text-[48px] lg:mt-[100px] lg:font-[600]">
        Projects
      </h1>
      <div className="lg:grid-rows-2 grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-y-8">
        <Link
          href="https://learnhall-web.vercel.app/"
          target="__blank"
          className="block pn hover:opacity-75 relative"
        >
          <div className="text-center hover:opacity-75">
            Learnhall Official Website
          </div>
          <div className="relative mx-auto lg:h-[200px] lg:w-[400px] h-[150px] w-[250px]">
            <FaEye className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black hover:block" />
            <Image
              src={`/lh.png`}
              alt="Learnhall"
              className="mx-auto"
              width={400}
              height={200}
            />
          </div>
        </Link>

        <Link
          href="https://nft.whynotswitch.com/"
          target="__blank"
          className="pn block hover:opacity-75"
        >
          <div className="text-center hover:opacity-7">
            Switch NFT Marketplace
          </div>

          <Image
            src={`/switch-nft.png`}
            alt="Switch Website"
            width={400}
            height={200}
            className="proj mx-auto lg:h-[200px] lg:w-[400px] h-[150px] w-[250px]"
          />
        </Link>

        <Link
          href="https://netflix-clone-mike.vercel.app/"
          target="__blank"
          className="block pn hover:opacity-75"
        >
          <div className="text-center hover:opacity-75">Netflix Clone</div>
          <Image
            src={`/net-clone.png`}
            alt="Netflix Clone"
            width={400}
            height={200}
            className="proj mx-auto lg:h-[200px] lg:w-[400px] h-[150px] w-[250px]"
          />
        </Link>
        <Link
          href="https://spotify-clone-mike.vercel.app/"
          target="__blank"
          className="block pn hover:opacity-75"
        >
          <div className="text-center hover:opacity-75">Spotify Clone</div>
          <Image
            src={`/spotify.png`}
            alt="Learnhall"
            className="proj mx-auto lg:h-[200px] lg:w-[400px] h-[150px] w-[250px]"
            width={400}
            height={200}
          />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
