import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { FaHeart, FaTrash } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoritesContext } from '../../Context/FavoritesContext';
import axios from 'axios';

function Details() {

  let {id}=useParams()

  let navigate=useNavigate()

  let [data,setdata]=useState({})
  let {favorites,setFavorites}=useContext(FavoritesContext)


  function GetData(id){

    axios.get(`http://localhost:3000/users/${id}`)
    .then(res=>setdata(res.data.data))


  }

  function deletedata(id){

    axios.delete(`http://localhost:3000/users/${id}`)
    .then(navigate("/"))
}

function Favorites(data){

    let favorite=favorites.find(item=>item._id==data._id)

    if(favorite){

        alert("Bu User Wislistde Movcuddur")
    }
    else{

        setFavorites([...favorites,data])
    }


}



  useEffect(()=>{

    GetData(id)
  },[id])


  return (
    <>
    <div className="detailspage">
      <h2>Details User</h2>
    <div className="detailscard">
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={data.image} class="card-img-top" alt="..."/>
      <div class="card-body">
       <h3>{data.name}</h3>
       <h4>{data.work}</h4>
       <h3>{data.salary}</h3>
      </div>
      <div className="detailsbtn">
        <button onClick={()=>{deletedata(data._id)}} className='btn btn-danger'><FaTrash/></button>
        <button onClick={()=>{Favorites(data)}} className='btn btn-success'><FaHeart/></button>
      </div>
    </div>
  </div>

</div>
    </div>
    </div>
    
    
    </>
  )
}

export default Details