import React, { useEffect,  useState } from 'react'
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom'
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import Link from '@mui/material/Link';

 import NewError from './NewError';

import "./New.css"

function News() {
   const [search ,setSearch] =useState("bitcoin")
   const [ store ,setStore] = useState([])
   const [trigger,setTrigger] = useState("")
   const [pages,setPage] = useState(1)
   const [error,setError] = useState(true)
   const [errorText,setErrorText] = useState(null)
   
   
     
    const handleNext = () =>{
        setPage(pages + 1)
    }
    const handlePrevious =()=>{
        setPage(pages-1)
    }
   
   useEffect(()=>{
      console.log("check twice if ran")
        
            const fetchData =()=>{
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '777024f3f1mshfb7fcf26d32c819p158d8cjsn8c0613c1db0b',
                        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
                    }
                };
                
                fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${search}%&pageNumber=${pages}&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`, options)
                    .then(response =>{
                        if(!response.ok){
                            setError(false)
                           throw Error("We could not fetch the data due to some subscription issue,Try later")
                        }
                       return   response.json()})
                    .then(response => 
                        setStore(response.value)
                    )
                    
                    .catch(err=>setErrorText(err.message));
               }
               fetchData()   
          
               
             },[trigger,pages])

   


   const handleChange =(e)=>{
      setSearch(e.target.value)
   }
   const handleSubmit = (e)=>{
    e.preventDefault()
    setTrigger(search)
    setPage(1)
    
    

   }
  return (
    <div>
        <nav className='newsNav'>
            <div className="newsContainer">
            <NavLink to="/" >
                <IconButton>
                <ArrowBackIosSharpIcon/>
                </IconButton>
            </NavLink>
                
            </div>
        </nav>
        <div className="searchSection">
            <div className="newsContainer">
                <h1 className='newsHeading'>
                    News Search
                </h1>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder='Search for News' onChange={handleChange} value={search}/>
                     <button type='submit' className='search'>Search</button>
                     
                </form>
                 <p className='page'>Page:{pages}</p>
            </div>
        </div>
    { error ?  <div className="newSection">
            <div className="newsContainer">
                {store.map((item,index)=>{
                    return <div key={index} className="flexContainer">
                         <div className='first'>
                            <img src={item.image.url} alt="" style={{height:200,width:290}}/>
                             <p className='date'>{Date(toString(item.datePublished))}</p> 

                         </div>
                         <div className='second'>
                            <div className='apiTitle'>
                                <p className='apTitle'>{item.title}</p>
                            </div>
                            <div className='description'>
                                <p className='descript'>{ item.description}</p>

                            </div>
                           
                             <Link href={item.url} target="_blank"  rel="noopener noreferrer">  <button className='readMore'>read more</button></Link>
                         </div>
                    </div>
                })}
            </div>
        </div>:<NewError errorText={errorText}/>}
{error && <div className="newSection2">
            <div className="newsContainer">
               <div className='buttonContainer'>
               <button className='btn' onClick={handlePrevious}>Previous</button>
                <button className='btn' onClick={handleNext}>Next</button>
               </div>
            </div>
        </div>}
       
    </div>
  )
}

export default News