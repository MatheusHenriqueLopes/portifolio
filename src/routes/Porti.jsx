
import ImgPro from '../assets/projeto_1.jpeg'
import ImgPro2 from '../assets/projeto_2.jpeg'
import ImgPro3 from '../assets/projeto_3.jpeg'
import PortiFolio from '../assets/porti.jpeg'

// dados do projeto

const projects = [
    { id: 1, title: "Multistep-Form", description: "Formulário com múltiplas etapas feito em React", url: "https://multistep-form-react-opal.vercel.app/", image: ImgPro }, 
    { id: 2, title: "GitHub Finder ", description: "Aplicação que busca usuários e repositórios no GitHub", url: "https://git-hub-six-omega.vercel.app/", image: ImgPro2 },
    { id: 2, title: "FL Veiculos", description: "Site institucional para uma loja de motos", url: "https://flveiculos.vercel.app/", image: ImgPro3  },
    { id: 2, title: "Portifólio", description: "Meu portfólio pessoal com projetos em React", url: "https://portifolio-five-xi-65.vercel.app/", image: PortiFolio },
   
]


const Porti = () => {

    
    
  return (
    <div className='title-porti'>
         <p>
          <span className="pequeno">Meu, </span>
          <span className="grande">PORTIFÓLIO </span>
        </p>
        <div className="cards-container">
            {projects.map((project) => (
                <div key={project.id} className='card'>
                <img src={project.image} alt={projects.title}/>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
              Ver projeto
            </a>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Porti