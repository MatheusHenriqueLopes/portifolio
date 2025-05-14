import './Skiil.css'


const SkillLevel = ({ name, level }) => {
const total = 6;
const filled = Array(level).fill(true);
const empty = Array(total - level).fill(false);
const hexes = [...filled, ...empty];


  return (
    <div className="skill-level">
    <div className="skill-row">
      <h3>{name}</h3>
      <div className="hex-container">
        {hexes.map((isFilled, index) => (
          <span key={index} className={`hex ${isFilled ? "filled" : ""}`}>⬢</span>
        ))}
        <h3>Todos os projetos estão no meu Git Hub</h3>
      </div>
    </div>
  </div>
);
};

export default SkillLevel