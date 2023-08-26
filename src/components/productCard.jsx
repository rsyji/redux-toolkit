import React,{ useState, useEffect} from "react";
import { addItem } from "../redux/features/cartSilce";
import { useDispatch } from "react-redux";

const ProductCard = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      console.log(res)
      setProducts(res);
    };
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="flex flex-wrap gap-3">
      {products.map((product) => {
        return (
          <div key={product.id} className='className="card w-32 h-60 text-center bg-slate-200 hover:bg-slate-400 rounded m-2'>
          <img
            className='className="card-img-top w-[100%] h-[65%] self-center'
            src={product.image}
            alt={product.title}
          />
          <div className="">
            <span className="font-bold">$: {product.price}</span>
            <h4 className="text-sm">{product.title.slice(0,15)}</h4>
          </div>
          <button
            onClick={() => handleAdd(product)}
            className="text-sm bg-yellow-200 hover:bg-yellow-300 rounded py-1 px-2"
          >
            Add to cart
          </button>
        </div>
        )
      })}
    </div>
  );
};

export default ProductCard;
