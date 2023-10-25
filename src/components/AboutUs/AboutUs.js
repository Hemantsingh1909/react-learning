import React from 'react'
import {Products} from './Products'
import contents from './Content'
import'./AboutUs.css'

const AboutUs = () => {
  return (
    <div className='App'>
    {contents.map(contents => (
        <Products 
            key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            totalSales={contents.totalSales}
            timeLeft={contents.timeLeft}
            rating={contents.rating}
        />
    ))}
</div>
  )
}

export default AboutUs
