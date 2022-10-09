import { useEffect, useReducer } from 'react';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import { cartReducer } from './reducers/CartReducer';
const axios = require('axios').default;


function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  });

  console.log(state);

  const fetchProucts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });

  }
  useEffect(() => {
    fetchProucts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
