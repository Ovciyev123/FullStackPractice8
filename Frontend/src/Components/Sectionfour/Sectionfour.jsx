import React, { useContext, useEffect, useState } from 'react'
import { FaAlignLeft, FaAlignRight, FaHeart, FaInfo, FaTrash } from 'react-icons/fa'
import axios from "axios"
import { Link } from 'react-router'
import { FavoritesContext } from '../../Context/FavoritesContext'
import { useFormik } from 'formik';

function Sectionfour() {

    let [datas, setDatas] = useState([])
    let [filtereddata, setfiltereddata] = useState([])
    let [sortorder,setsortorder]=useState("default")
    let { favorites, setFavorites } = useContext(FavoritesContext)




    
    
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: values => {

            const searchvalue=values.name.toLocaleLowerCase().trim()

            if(searchvalue==""){

                setfiltereddata(datas)
            }
            else{

                let  filtered=datas.filter(data=>
                    data.name.toLocaleLowerCase().includes(searchvalue))

                    setfiltereddata(filtered)
            }
        },
    });


    function handlesortchange(e){

        let order=e.target.value

        setsortorder(order)

        if(sortorder=="default"){

            setfiltereddata(datas)
        }
        else{

            let sortUser=[...filtereddata]

            if(sortorder=="esc"){

                sortUser.sort((a,b)=>a.salary-b.salary)
            }
            else if(sortorder="desc"){

                sortUser.sort((a,b)=>b.salary-a.salary)
            }

            setfiltereddata(sortUser)


        }
    }


    function GetDatas() {

        axios.get("http://localhost:3000/users")
            .then(res => {
                setDatas(res.data),
                    setfiltereddata(res.data)
            })
    }

    function handledelete(id) {

        axios.delete(`http://localhost:3000/users/${id}`)
    }

    function Favorites(data) {

        let favorite = favorites.find(item => item._id == data._id)

        if (favorite) {

            alert("Bu User Wislistde Movcuddur")
        }
        else {

            setFavorites([...favorites, data])
        }


    }

    useEffect(() => {

        GetDatas()

    }, [])
    return (
        <>
            <div className="sectionfour">
                <h3>Featured Guests</h3>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        name="name"
                        type="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <button type="submit">Search</button>
                </form>

                <select name="" id=""
                    value={sortorder}
                    onChange={handlesortchange}>
                        <option value="default">Default</option>
                        <option value="esc">Less-More</option>
                        <option value="desc">More-Less</option>
                    </select>
                <div className="sectionfourcards">
                    {
                        filtereddata.map((data, index) => (
                            <div className="sectionfourcard">
                                <img src={data.image} alt="" />
                                <div className="fourcardtext">
                                    <h3>{data.name}</h3>
                                    <h4>{data.work}</h4>
                                    <h3>{data.salary}</h3>
                                </div>
                                <div className="fourcardbtn">
                                    <button onClick={() => handledelete(data._id)}><FaTrash /></button>
                                    <Link to={`/${data._id}`}><button><FaInfo /></button></Link>
                                    <button onClick={() => Favorites(data)}><FaHeart /></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Sectionfour