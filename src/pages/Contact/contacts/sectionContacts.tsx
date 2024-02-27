import React from 'react'
import "./sectionContacts.css"
import ButtonAcess from '../../../components/buttonAcess/buttonAcess'
import Whatsapp from "./src/msgwhats.png"
import Github from "./src/githublink.png"
import Linkedin from "./src/linkedinlink.png"

function SectionContacts() {
  return (
    <section className='box-contacts'>
      <figure className='contact-figure'>
        <img src={Whatsapp} alt="Whatsapp" />
          <ButtonAcess 
          href="https://github.com/Carlos-hcal"
          id="whatsapp"
          className="button"
          label="Whatsapp"
          />
      </figure>

      <figure className='contact-figure'>
        <img src={Github} alt="Github" />
          <ButtonAcess
          href="https://github.com/Carlos-hcal"
          id="github"
          className="button"
          label="Github"
         />
      </figure>

      <figure className='contact-figure'>
        <img src={Linkedin} alt="Linkedin" />
          <ButtonAcess 
          href="https://github.com/Carlos-hcal"
          id="linkedin"
          className="button"
          label="Linkedin"
          />
      </figure>
    </section>
  )
}

export default SectionContacts