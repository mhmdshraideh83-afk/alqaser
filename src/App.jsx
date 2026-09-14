import { useReducer, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Signature from './components/Signature.jsx';
import Menu from './components/Menu.jsx';
import Branches from './components/Branches.jsx';
import Footer from './components/Footer.jsx';
import CartBar from './components/CartBar.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import { cartReducer } from './lib/cart.js';

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, {});
  const [cartOpen, setCartOpen] = useState(false);

  const addItem = (cat, name, price) => dispatch({ type: 'add', cat, name, price });
  const changeQty = (key, delta) => dispatch({ type: 'change', key, delta });

  return (
    <>
      <Header />
      <Hero onOpenCart={() => setCartOpen(true)} />
      <About />
      <Signature />
      <Menu cart={cart} onAdd={addItem} onChange={changeQty} />
      <Branches />
      <Footer />
      <CartBar cart={cart} onOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} cart={cart} onClose={() => setCartOpen(false)} onChange={changeQty} />
    </>
  );
}
