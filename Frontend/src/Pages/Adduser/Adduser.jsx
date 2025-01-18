import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FaHeart, FaInfo, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';
import { FavoritesContext } from '../../Context/FavoritesContext';


function Adduser() {

  let [datas1,setdatas1]=useState([])
  let {favorites,setFavorites}=useContext(FavoritesContext)


  function GetDatas1(){

    axios.get("http://localhost:3000/users")
    .then(res=>setdatas1(res.data))
  }

  function handledelet(id) {

    axios.delete(`http://localhost:3000/users/${id}`)

    
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

  GetDatas1()
},[datas1])


  
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  work: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    salary: Yup.number()
    .integer("integer")
    .required('Required'),
  image: Yup.string()
  .url("url")
  .required('Required'),
});
  return (
    <>
    <div className="adduserpage">
    <h1>Add User</h1>
    <Formik
      initialValues={{
        name: '',
        work: '',
        image: '',
        salary:0
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        axios.post("http://localhost:3000/users",values)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" />
          {errors.firstName && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <label htmlFor="work">Work</label>
          <Field name="work" />
          {errors.work && touched.work ? (
            <div>{errors.work}</div>
          ) : null}
          <label htmlFor="image">Image</label>
           <Field name="image" />
          {errors.image && touched.image ? (
            <div>{errors.image}</div>
          ) : null}
          <label htmlFor="salary">Salary</label>
          <Field name="salary" type="number" />
          {errors.salary && touched.salary ? <div>{errors.salary}</div> : null}
          <button className='btn btn-primary' type="submit">Add</button>
        </Form>
      )}
    </Formik>

    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Work</th>
      <th scope="col">Salary</th>
      <th scope="col"></th>
    </tr>
  </thead>
 {

datas1.map((data1,index)=>(
  <tbody>
  <tr>
    <th scope="row"><img src={data1.image} alt="" /></th>
    <td>{data1.name}</td>
    <td>{data1.work}</td>
    <td>{data1.salary}</td>
    <td> 
      <button onClick={()=>handledelet(data1._id)} className='btn btn-danger'><FaTrash/></button>
      <Link to={`/${data1._id}`}><button className='btn btn-primary'><FaInfo/></button></Link>
      <button onClick={()=>Favorites(data1)} className='btn btn-success'><FaHeart/></button>
    </td>
  </tr>
</tbody>
))

 }
</table>
    
    
    </>
  )
}

export default Adduser



