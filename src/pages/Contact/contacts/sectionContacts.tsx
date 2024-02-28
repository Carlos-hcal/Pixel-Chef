import React from 'react'
import "./sectionContacts.css"
import ButtonAcess from '../../../components/buttonAcess/buttonAcess'
import Whatsapp from "./src/msgwhats.png"
import Github from "./src/githublink.png"
import Linkedin from "./src/linkedinlink.png"
import { FaWhatsapp } from "react-icons/fa";


function SectionContacts() {
  return (
    <section className='box-contacts'>
      <figure className='contact-figure'>
        <img src={Whatsapp} alt="Whatsapp" />
          <ButtonAcess 
          target="_blank"
          href="https://github.com/Carlos-hcal"
          id="whatsapp"
          className="button"
          label="Whatsapp"
          />
      </figure>

      <figure className='contact-figure'>
        <img src={Github} alt="Github" />
          <ButtonAcess
          target="_blank"
          href="https://github.com/Carlos-hcal"
          id="github"
          className="button"
          label="Github"
         />
      </figure>

      <figure className='contact-figure'>
        <img src={Linkedin} alt="Linkedin" />
          <ButtonAcess 
          target="_blank"
          href="https://www.linkedin.com/in/carlos-henrique-20b78a238/"
          id="linkedin"
          className="button"
          label="Linkedin"
          />
      </figure>
    </section>
  )
}

export default SectionContacts