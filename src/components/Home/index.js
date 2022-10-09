import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
   return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Welcome! I'm James Little
          </h1>
          <h2>Full Stack Developer / MERN Stack focussed / Avide Learner</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

    </>
  )
}

export default Home