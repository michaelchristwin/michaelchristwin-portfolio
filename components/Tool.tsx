import Image from "next/image";

interface ToolProps {
  img: string;
}

function Tool({ img }: ToolProps) {
  return (
    <li className="hex">
      <div className="hexIn">
        <div className="hexLink">
          <Image src={img} alt="Tool" width={100} height={70} />
        </div>
      </div>
    </li>
  );
}

export default Tool;
