import React from "react";
import { Link } from "react-router-dom";

const Homecard = ({ title, photos, age,club,category, loadingArray,id }) => {
  return (
    <div className=" bg-slate-200 p-2 rounded-2xl shadow shadow-black w-full min-w-[280px] max-w-[280px]  flex flex-col overflow-scroll scrollbar-none">
      {title ? (
        <>
        <Link to={ `/booking/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})}>
          <div className="w-[260px] min-h-[180px] px-2 rounded-2xl">
            <img src={photos[0]} className="h-full w-full" alt="" />
          </div>
          <h2 className='text-lg font-serif font-bold text-blue-400'>{title}</h2>
          <p className='flex items-center font-bold my-2 gap-2'>TEAM: {club}</p>
          <p className="flex items-center font-bold my-2 gap-2">AGE: {age}</p>
          <p className="flex items-center font-bold my-2 gap-2">POSITION: <span className="capitalize">{category}</span> </p>
          <button className="w-[150px]  p-2 items-center rounded-full border-t border-yellow-500 shadow bg-primary">View more</button>
          </Link>
        </>
      )
      : 
      <div className="flex font-sans font-bold justify-center items-center">
      <p>{loadingArray}</p>
      </div>
    }
    </div>
  );
};

export default Homecard;