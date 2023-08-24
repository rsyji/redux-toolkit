import React ,{ useState, useEffect }from 'react'
import ProductCard from '../productCard'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchData= async()=>{
        const data = await fetch('https://fakestoreapi.com/products')
        const res = await data.json()
        setProducts(res)

    }
    fetchData()
    }, [])

  return (
    <div className='min-w-ful'>
        <div className='m-2'>
            <h2 className='text-2xl font-bold'>Redux</h2>
        </div>
        <section className="container flex justify-center flex-wrap mx-2 px-2">
            {
                products? 
                <>{products.map(product=> <ProductCard key={product.id} image={product.image} price={product.price} title={product.title.slice(0,12)} description={product.description.slice(0,20)} />)} </>
                :"Loading..."
            }
        </section>
    </div>
  )
}

export default Home