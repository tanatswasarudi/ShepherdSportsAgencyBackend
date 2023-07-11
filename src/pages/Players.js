import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {BiUpload} from 'react-icons/bi'
import { imagetobase64 } from '../utility/imagetobase64'
import {TbSoccerField} from 'react-icons/tb'


const Players = () => {
    const [data,setData] = useState({
        title : "",
        DOB : "",
        age : "",
        address : "",
        photos : [],
        videolink : "",
        jersey : "",
        club : "",
        perks : [],
        category : "",
        description : "",
        goals: "",
        assists: "",
        appearances: "",
        redcard: "",
        yellowcard: "",

      })
      const [selectedPerks, setSelectedPerks] = useState([]);
      const handleOnChange = (e) =>{
        const {name,value} = e.target
        setData((preve)=>{
          return{
            ...preve,
           [name] : value
          }
        })}
      
        const handleUpload = async (e) => {
          const files = e.target.files;
          const uploadedPhotos = [];
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const data = await imagetobase64(file);
            uploadedPhotos.push(data);
          }
          setData((prevData) => ({
            ...prevData,
            photos: uploadedPhotos,
          }));
        };
        const handlePerksChange = (e) => {
          const perkName = e.target.name;
          const isChecked = e.target.checked;
      
          setSelectedPerks((prevPerks) => {
            if (isChecked) {
              return [...prevPerks, perkName]; // Add perk to selectedPerks
            } else {
              return prevPerks.filter((perk) => perk !== perkName); // Remove perk from selectedPerks
            }
          });
        };
          const handleSubmit = async(e) =>{
            e.preventDefault()
          
              const {title,address,club,redcard,yellowcard,assists,appearances,goals,age,jersey,photos,videolink,DOB,category, description} = data;
              if(title && address &&club &&appearances&&yellowcard&&redcard&&goals&&assists&&age&&jersey&& category && photos && videolink && DOB && description){
                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/uploadPlayer`,{
                  method : "POST", 
                  headers :{
                    "content-type" : "application/json"
                  },
                  body : JSON.stringify({ ...data, perks: selectedPerks })
                })
                const fetchRes = await fetchData.json()
                console.log(fetchRes)
                toast(fetchRes.message)
                alert("Player Details have been uploaded")
                setData (()=>{
                  return{
                     title : "",
                     address : "",
                     category : "",
                     photos : [],
                     perks : [],
                     age : "",
                     description : "",
                     jersey : "",
                     club : "",
                     videolink: "",
                     DOB:"",
                     goals: "",
                     assists: "",
                     appearances: "",
                     redcard: "",
                     yellowcard: "",
                  }
                })
              }
              else{
                toast("Enter Missing Fields")
              }
          }
  return (
    <div>
         <div className='p-4'>
      <form className='flex flex-col w-full  p-3 ' onSubmit={handleSubmit}>
        <h1 className=' text-xl mt-4'>Name</h1>
        <p className='text-sm text-gray-500 mb-2'>Name of the player</p>
        <input type={"text"} name='title' className='w-full border rounded'  onChange={handleOnChange} value={data.title}/>
        <h1 className=' text-xl mt-4'>Club</h1>
        <p className='text-sm text-gray-500 mb-2'>Name of Club</p>
        <input type={"text"} name='club' className='w-full border rounded'  onChange={handleOnChange} value={data.club}/>
        <h1 className=' text-xl mt-4'>Jersey-Number</h1>
        <p className='text-sm text-gray-500 mb-2'>Player's Jersey Number</p>
        <input type={"number"} name='jersey' className='w-full border rounded'  onChange={handleOnChange} value={data.jersey}/>
        
        <h1 className=' text-xl mt-4'>Goals</h1>
        <p className='text-sm text-gray-500 mb-2'>Number of Goals</p>
        <input type={"number"} name='goals' className='w-full border rounded'  onChange={handleOnChange} value={data.goals}/>
        <h1 className=' text-xl mt-4'>Assists</h1>
        <p className='text-sm text-gray-500 mb-2'>Number of Assists</p>
        <input type={"number"} name='assists' className='w-full border rounded'  onChange={handleOnChange} value={data.assists}/>
        <h1 className=' text-xl mt-4'>Appearances</h1>
        <p className='text-sm text-gray-500 mb-2'>Number of Appearances</p>
        <input type={"number"} name='appearances' className='w-full border rounded'  onChange={handleOnChange} value={data.appearances}/>
        <h1 className=' text-xl mt-4'>RedCards</h1>
        <p className='text-sm text-gray-500 mb-2'>Number of Red Cards</p>
        <input type={"number"} name='redcard' className='w-full border rounded'  onChange={handleOnChange} value={data.redcard}/>
        <h1 className=' text-xl mt-4'>Club</h1>
        <p className='text-sm text-gray-500 mb-2'>Number of Yellow Cards</p>
        <input type={"number"} name='yellowcard' className='w-full border rounded'  onChange={handleOnChange} value={data.yellowcard}/>
        <h1 className=' text-xl mt-4'>AGE</h1>
        <p className='text-sm text-gray-500 mb-2'>Player's Age in numbers</p>
        <input type={"number"} name='age' className='w-full border rounded'  onChange={handleOnChange} value={data.age}/>

        <label htmlFor='category' className=' text-xl mt-4 mb-2'>Category</label>
        <select className='w-full border rounded' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"} className='text-sm text-gray-500'>Select Category</option>
          <option value={"goalkeeper"}>GoalKeeper</option>
          <option value={"defender"}>Defender</option>
          <option value={"midfielder"}>Midfielder</option>
          <option value={"forward"}>Forward</option>
          </select>
        <h1 className=' text-xl mt-4'>Place of Birth</h1>
        <p className='text-sm text-gray-500 mb-2'>Where was the player born</p>
        <input type='text' name='address'className='w-full border rounded' placeholder=''  onChange={handleOnChange} value={data.address}/>

        <label htmlFor='image' className=' text-xl mt-4'>Photos
        <p className='text-gray-500 text-sm mb-2'>Add photos of this player</p>
        <div className='h-44 w-full flex items-center  bg-gray-500 justify-center rounded cursor-pointer overflow-scroll'>
           {data.photos && data.photos.length > 0 ? (
            data.photos.map((photo, index) => (
           <img key={index} src={photo} alt='' className='h-full object-cover' />
           ))
   ) : (
          <span className='text-4xl '><BiUpload/></span>
     )}
       <input
    type='file'
    id='image'
    accept='image/*'
    multiple
    className='hidden'
    onChange={handleUpload}
  />
</div>

        </label>

        <h1 className=' text-xl mt-4'>Perks</h1>
        <p className='text-gray-500 text-sm mb-2'>select all the perks</p>
        <div className='grid grid-cols-2 md:grid-cols-4 ' >
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='passing' checked={selectedPerks.includes('passing')} onChange={handlePerksChange}/>
            <span className='flex items-center'><TbSoccerField/>Passing</span>
            </label >
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='dribbling' checked={selectedPerks.includes('dribbling')} onChange={handlePerksChange} />
            <span className='flex items-center'><TbSoccerField/>Dribbling</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='agility' checked={selectedPerks.includes('agility')} onChange={handlePerksChange}/>
            <span className='flex items-center'><TbSoccerField/>Agility</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='tackling' checked={selectedPerks.includes("tackling")} onChange={handlePerksChange}/>
            <span className='flex items-center'><TbSoccerField/>Tackling</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='pace'  checked={selectedPerks.includes("pace")} onChange={handlePerksChange}/>
            <span className='flex items-center'><TbSoccerField/>Pace</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='shooting' checked={selectedPerks.includes('shooting')} onChange={handlePerksChange}/>
            <span className='flex items-center'><TbSoccerField/>Shooting</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='goalkeeping' checked={selectedPerks.includes('goalkeeping')} onChange={handlePerksChange}/>
            <span className='flex items-center'><TbSoccerField/>GoalKeeping</span>
            </label>
            <label className='border p-4 gap-2 flex rounded-xl items-center'>
            <input type='checkbox' name='vision' checked={selectedPerks.includes('vision')} onChange={handlePerksChange}/>
            <span className='flex items-center'><TbSoccerField/>Vision</span>
            </label>
        </div>
        <h1 className=' text-xl mt-4' >VideoLink</h1>
        <p className='text-gray-500 text-sm mb-2'>Add Youtube video link</p>
        <input type='text' name='videolink' className='w-full border rounded-full'  onChange={handleOnChange} value={data.videolink}/>

       
        <h1 className=' text-xl mt-4'>DOB</h1>
        <p className='text-sm text-gray-500 mb-2'>Date of birth</p>
        <input type='text' name='DOB' className='w-full border rounded-full'  onChange={handleOnChange} value={data.DOB}/>

        <div className=''>
        <h1 className=' text-xl mt-4'>Description</h1>
        <p className='text-gray-500 text-sm mb-2'>More about the player</p>
        <textarea rows={3} id='description' className='w-full h-[140px] border rounded' name='description' onChange={handleOnChange} value={data.description}/>
        </div>

        <button className='bg-primary p-2  rounded-full text-gray-500 font-medium shadow mt-4'>Upload</button>
      </form>
      </div>
    </div>
  )
}

export default Players