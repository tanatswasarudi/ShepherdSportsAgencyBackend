import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import { store } from "./redux/index";
import { Provider } from "react-redux";
import Login from './pages/Login';
import IndexPage from './pages/Indexpage';
import Register from './pages/Register'; 
import Booking from "./pages/Booking";
import Players from "./pages/Players"
import Home from './pages/Home';
import Search from './pages/Search';
import Playercomparison from './pages/Playercomparison';
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
    <Route index element={<IndexPage/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='players' element={<Home/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='addplayers' element={<Players/>}/>
    <Route path='playercomparison' element={<Playercomparison/>}/>
    <Route path='search' element={<Search/>}/>
    <Route path="/booking/:filterby" element={<Booking />} />
    </Route>
  )
) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router} />
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();