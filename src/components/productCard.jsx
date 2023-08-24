import React from 'react'

const ProductCard = ({image, title, price }) => {
    
  return (
    <div className='className="card w-32 h-60 text-center bg-slate-200 hover:bg-slate-400 rounded m-2'>
        <img className='className="card-img-top w-[100%] h-[65%] self-center' src={image} alt=''/>
        <div className=''>
            <span className='font-bold'>$: {price}</span>
            <h4 className='xl'>{title}</h4>
        </div>
        <button className='text-sm bg-yellow-200 hover:bg-yellow-300 rounded py-1 px-2'>Add to cart</button>
    </div>
  )
}

export default ProductCard