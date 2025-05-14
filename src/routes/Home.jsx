import { useNavigate } from 'react-router-dom'
import  { useState } from 'react'

import profilleImg from "../assets/home.svg"
import InstaLogo from "../assets/insta.svg"
import LinkLogo from "../assets/Linkedin.svg"
import GitLogo from "../assets/Git.svg"

const Home = () => {
  const [] = useState({})
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/portfolio')
  }
  
  return (
    <main className='container home-container'>
      <div className="art-home"><img src={profilleImg} alt="Ilustração da página inicial" /></div>
      <div className='title'>
        <p>
          <span className="pequeno">Olá pessoas, </span>
          <span className="grande">EU SOU UM PROGRAMADOR </span>
          <span className="pequeno">Seja bem-vindo ao meu portfólio website</span>
        </p>
      </div>
      <div className="social-icons">
      <a href="https://github.com/" target="_blank"><img src={GitLogo} alt="git-hub" /></a>
      <a href="https://www.linkedin.com/in/matheus-henrique-5460b9195/" target="_blank"><img src={LinkLogo} alt="linkedin" /></a>
      <a href="https://www.instagram.com/_theuslpss/" target="_blank"><img src={InstaLogo} alt="instagram" /></a>
      </div>
      <div className="btn-container">
        <button onClick={handleNavigate} className='btn-porti'>Meu Portfólio</button>
      </div>
    </main>
  )
}

export default Home