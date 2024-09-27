import logo from '../assets/yashKhatriLogoWhite.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { SiCodewars } from "react-icons/si"
import { LINKS } from '../constants'

const NavBar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt='logo' loading="lazy" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href={LINKS.linkedIn} target="_blank" ><FaLinkedin /></a>
      <a href={LINKS.github} target="_blank" ><FaGithub /></a>
      <a href={LINKS.codeWars} target="_blank" ><SiCodewars /></a>
      <a href={LINKS.instagram} target="_blank" ><FaInstagram /></a>
    </div>
  </nav>
}

export default NavBar
