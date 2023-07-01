import Image from "next/image";
import { Lexend } from "next/font/google";

const font = Lexend({ subsets: ["latin"], weight: "300" });

function About() {
  return (
    <section
      className="pt-5 lg:flex w-[100vw] block bg-white pb-[50px] px-0 lg:px-3"
      id="about"
    >
      <Image
        src={`/avatar2.jpg`}
        alt="Michael Christwin"
        className="avatar"
        width={300}
        height={300}
      />
      <div className="lg:mt-[70px] lg:ml-[50px] lg:w-[700px] max-w-fit mt-auto lg:mr-auto ml-auto mr-auto">
        <h1 className="lg:font-[600] text-[38px] lg:text-left text-center lg:text-[48px] font-[500]">
          About Me
        </h1>
        <p
          className={`lg:text-left text-center px-5 pl-0 lg:ml-[0px] sm:mr-[9px] lg:text-[24px] lg:font-[400] text-[19px] ml-[9px] ${font.className}`}
        >
          {`Hi, I am Michael Christwin, a Frontend Developer proficient in
          creating great and responsive web experiences. I'm currently
          specialized in React JS, Next JS and other frontend technlogies. An open-source enthusiast supportive of projects such as Bitcoin, Linux and Free code camp`}
        </p>
        <button className="bg-blue-600 p-2 rounded hover:opacity-75 btn mt-3">
          <a href={`/cv.pdf`} download className="text-white">
            Download CV
          </a>
        </button>
      </div>
    </section>
  );
}

export default About;
