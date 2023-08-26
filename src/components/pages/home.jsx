import React from 'react'
import ProductCard from '../productCard'

const Home = () => {

  return (
    <div className='min-w-ful'>
        <div className='m-2'>
            <h2 className='text-2xl font-bold'>Redux</h2>
        </div>
        <section className="container flex justify-center flex-wrap mx-2 px-2">
            <ProductCard/>
        </section>
    </div>
  )
}

export default Home