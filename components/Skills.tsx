import Tool from "./Tool";

function Skills() {
  return (
    <section className="skills !bg-[#1a1a1a] pt-4" id="skills">
      <div className="skill-in mx-auto text-center block border border-white">
        <span className="skill-title block">Tech Stack</span>
        <ul id="hexGrid" className="pt-8">
          <Tool img={`/mongodb.png`} />
          <Tool img={`/express.png`} />
          <Tool img={`/react.png`} />
          <Tool img={`/node.png`} />
          <Tool img={`/bootstrap.jpeg`} />
          <Tool img={`/django.png`} />
          <Tool img={`/tail.png`} />
          <Tool img={`/type.png`} />
          <Tool img={`/git.png`} />
        </ul>
      </div>
    </section>
  );
}

export default Skills;
