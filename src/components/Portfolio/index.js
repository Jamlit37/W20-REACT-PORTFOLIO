import './index.scss'
import PF1 from '../../assets/images/pf1.png'
import PF2 from '../../assets/images/pf2.png'
import PF3 from '../../assets/images/pf3.png'
import PF4 from '../../assets/images/pf4.png'
import PF5 from '../../assets/images/pf5.png'
import PF6 from '../../assets/images/pf6.png'


const Portfolio = () => {
  return (
    <>
      <div className="container portfolio-page">
        <div className="container1">
        <h2>Animalia Zoo</h2>
        <a href="https://animalia-zoo.herokuapp.com/" target="_blank" rel="noreferrer"><img className ='pfp' src={PF1} alt="Portfolio and link 1"/></a>
        <h2>MVC style Blog</h2>
        <a href="https://w14-mvc-blog.herokuapp.com/" target="_blank" rel="noreferrer"><img className ='pfp' src={PF2} alt="Portfolio and link 2"/></a>
        </div>
        <div className="container2">
        <h2>Express app Note taker</h2>
        <a href="https://hidden-dusk-08673.herokuapp.com/" target="_blank" rel="noreferrer"><img className ='pfp' src={PF3} alt="Portfolio and link 3"/></a>
        <h2>OOP Profile Creator</h2>
        <a href="https://github.com/Jamlit37/W10-OOP-PROFILER" target="_blank" rel="noreferrer"><img className ='pfp' src={PF4} alt="Portfolio and link 4"/></a>
        </div>
        <div className="container3">
        <h2>Professional README Generator</h2>
        <a href="https://github.com/Jamlit37/W9-README-GEN" target="_blank" rel="noreferrer"><img className ='pfp' src={PF5} alt="Portfolio and link 5"/></a>
        <h2>Weather Dashboard</h2>
        <a href="https://github.com/Jamlit37/W6-WEATHER-DASH" target="_blank" rel="noreferrer"><img className ='pfp' src={PF6} alt="Portfolio and link 6"/></a>
        </div>
      </div>
    </>
  )
}
export default Portfolio
