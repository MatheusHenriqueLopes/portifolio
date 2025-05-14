import SkillLevel from "../componentes/SkillLevel"
import profileImg from "../assets/imagem.jpeg"



const Skiil = () => {
  return (
    <div className="add-skills">
      <div className="hexagon">
        <img src={profileImg}alt="" />
      </div>
      <h2>Matheus Henrique</h2>
      <p>My name is Matheus Henrique Lopes Sampaio 👋
      I'm from Brazil, Lorena/SP. I'm currently studying Computer Science at UniGrande - Guaratinguetá.</p>
      <div className="titulo">HARD SKILLS</div>
      <div className="skill-list">
        <SkillLevel name="HTML" level={3} />
        <SkillLevel name="React" level={1} />
        <SkillLevel name="JavaScript" level={1} />
        <SkillLevel name="CSS" level={3} />
        <SkillLevel name="Back-End" level={1} />
        <SkillLevel name="MongoDB" level={1} />
      </div>
    </div>
  )
}

export default Skiil