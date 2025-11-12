
import Cart from './cart'
import Fashion from './fashion.jsx'
import {useEffect, useState} from 'react'
function App() {
  
  const [fa,setfa]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then(res=>res.json()).then()
     
  },[])
  return (
               
       <div>
         {/* <Cart name={"aba"}/>
         <Cart  name={"bba"}/> */}
                 
       </div>
)
}
export default App

// for acylclic graph it is guaranteed that all states are safe
//
// 7 log 10  ->22 bits of c
// 17 log 10 ->52 bits of a,b at max
// first c=15   a=11110000 b=111100000  a (xor)c + 750=480+240=>720 495xor15 255xor15 =>480+255=>735
// (495+240)=>(735) 
/*
  so lets prove it
  when we do a+c xor c then we get a itself and when we do bxor c we get b+c  so sum->a+b+c
  lcm(a+c,c)+lcm(b,c)=>a+c +b  so proved always possible 
  since c will 
*/