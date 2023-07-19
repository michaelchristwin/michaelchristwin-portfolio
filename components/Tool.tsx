import Image from "next/image";

interface ToolProps {
  img: string;
}

function Tool({ img }: ToolProps) {
  return (
    <li className="hex">
      <div className="hexIn">
        <div className="hexLink !bg-black">
          <Image
            src={img}
            alt="Tool"
            width={70}
            height={70}
            className="rounded-[27%]"
          />
        </div>
      </div>
    </li>
  );
}

export default Tool;
