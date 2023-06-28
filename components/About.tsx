import Image from "next/image";
import { Lexend } from "next/font/google";

const font = Lexend({ subsets: ["latin"], weight: "300" });

function About() {
  return (
    <section
      className="lg:mt-5 lg:flex w-[100vw] block bg-white pb-[50px] px-0 lg:px-3"
      id="about"
    >
      <Image
        src={`/avatar2.jpg`}
        alt="Michael Christwin"
        className="avatar"
        width={100}
        height={100}
      />
      <div className="lg:mt-[70px] lg:ml-[50px] lg:w-[700px] max-w-fit mt-auto lg:mr-auto ml-auto mr-auto">
        <h1 className="lg:font-[600] text-[38px] lg:text-left text-center lg:text-[48px] font-[500]">
          About Me
        </h1>
        <p
          className={`p-3 pl-0 lg:ml-[0px] sm:mr-[9px] lg:text-[24px] lg:font-[400] text-[19px] ml-[9px] ${font.className}`}
        >
          {`Hi, I am Michael Christwin, a Frontend Developer proficient in
          creating great and responsive web experiences. I'm currently
          specialized mainly in Frontend web development but the journey is only
          beginning :).`}
        </p>
        <button className="bg-blue-600 p-2 rounded hover:opacity-75 btn">
          <a href={`/resume.pdf`} download className="text-white">
            Download CV
          </a>
        </button>
      </div>
    </section>
  );
}

export default About;
