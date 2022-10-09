import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
           About me!
          </h1>
          <p className="about-text">
          I am a recent graduate of my Bachelor of Biological Science degree completed at Deakin University. I find great pride in my work throughout all aspects of my life wether that be professionally or my own passions in animal husbandry.  
          </p>
          <p className="about-text" align="LEFT">
          I have eight years of experience with Nando's Australia and am now working in the Logistics department of IKEA Springvale. I have recently undergone two placements, the first being animal rehabilitation with Animalia Wildlife Shelter, and marine care with Fish World, Dandenong. I continue to volunteer with the wildlife shelter and work some of the busier days at the aquarium to lend an extra hand.
          </p>
          <p className="about-text">
          Currently undergoing a short 6 month Full Stack Developer course through Monash University in the hope of starting a new career in Front-end development. Hoping to see the increase of skill over the next couple of months and this portfolio is a great way to test progress.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About