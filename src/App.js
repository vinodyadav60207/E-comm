import './Products/App.css';
import Navbar from './Products/navbar';
import { Route,Routes } from 'react-router-dom';
import data from './Products/data';
import Mobile from './Products/Mobile';
import Tv from './Products/Tv';
import Laptop from './Products/Laptop';
import Printer from './Products/Printer';
import Tablets from './Products/Tablets';
import Home from './Home';
import AllProducts from './Products/AllProducts';


function App() {

  return (
    <>
    <Navbar />
    <Routes>
   
    <Route path='/' element={<Home/>}/>
    <Route path='/Mobile' element={<Mobile/>}/>
    <Route path='/Tv' element={<Tv/>}/>
    <Route path='/Laptop' element={<Laptop/>}/>
    <Route path='/Tablets' element={<Tablets/>}/>
    <Route path='/Printer' element={<Printer/>}/>
    <Route path='/all-products' element={<AllProducts />} />
    
    </Routes>
    
    </>
  );
}

export default App;

    
      
   



// export default Appss;


// import React from 'react';
// import Home from './Home';
// import './App.css';
// import Login from './login';
// import Signup from './signup';
// import { Routes,Route, Router} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

// function App() {
//   return (

    
    
//     <div className='App '>
//       <h1>welcome to react</h1>
      

   
//      <Login /> 
//    {/* <Signup/>  */} 
       
//     <Routes> 

//     <Route path='/signup' element={<Signup/>}/> 
       
//          <Route path='/login' element={<Login/>}/> 
//         <Route path='/' element={<Home/>}/> 
//         {/* <Route path='/'element={<home/>}/> */}
       

//      </Routes>  
     
     
//      </div>
   
   

//   );
// }

// export default App;

