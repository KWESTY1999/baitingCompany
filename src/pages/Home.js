import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__background'>
        <img
          className='home__background--img'
          src={require('../utils/2023-04-10 11_38_59-Window.png')}
          alt='heuheu'
        />
      </div>
      <div className='home__container'>
        <h1 className='home__h1'>Aplikacja Discorda została uruchomiona</h1>
        <p className='home__p'>
          Wysłano informacje do aplikacji Discorda. Możesz zamknąć tę kartę w
          przeglądarce lub kontynuować w wersji internetowej.
        </p>
        <button className='home__btn'>
          <Link to='/bait'>Przejdź do Discorda</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
