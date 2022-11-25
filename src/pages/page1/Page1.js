import React from 'react'
import './page1.css'
import family from '../../assets/family.jpg'
import { Link } from 'react-router-dom';


const Page1 = () => {
  return (
    <div className='page1'>
        <img alt='family' src={family} className='family'/>
        <section className='intro'>
            <h3>Plan for the rainy day</h3>
            <h1>WILL GENERATOR</h1>
            <h4>Just because you can't be with your family doesn't mean your property shouldn't </h4>
            <h2>Make a Will</h2>
        </section>
        <Link to="/info">
            <button className='generate-btn'>Get Started</button>
         </Link>

    </div>
  )
}

export default Page1