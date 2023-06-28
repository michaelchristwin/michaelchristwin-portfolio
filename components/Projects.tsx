import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <section className="projects pb-5" id="projects">
      <h1 className="text-center pro-t">Projects</h1>
      <div className="lg:grid-rows-2 grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-y-8">
        <Link
          href="https://learn-hall-app.vercel.app/"
          target="__blank"
          className="block pn hover:opacity-75"
        >
          <div className="text-center hover:opacity-75">
            Learnhall Official Website
          </div>
          <Image
            src={`/learnhall.png`}
            alt="Learnhall"
            className="proj mx-auto lg:h-[200px] lg:w-[400px] h-[150px] w-[250px]"
            width={400}
            height={200}
          />
        </Link>

        <Link
          href="https://nft.whynotswitch.com/"
          target="__blank"
          className="pn block hover:opacity-75"
        >
          <div className="text-center hover:opacity-75">
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
          href="https://netflix-clone-eosin-sigma.vercel.app/"
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
      </div>
    </section>
  );
}

export default Projects;
