import React from 'react'
import  {Link} from "react-router"
import {FaHeart} from "react-icons/fa"

function Usernavbar() {
  return (
    <>
    <div className="navbarr">
        <div className="navbarr-left">
            <h2><b>Podca</b></h2>
        </div>
        <div className="navbarr-right">
            <select name="" id="">
                <option value=""><Link>Home</Link></option>
                <option value=""><Link>Menu one</Link></option>
                <option value=""><Link>Menu two</Link></option>
                <option value=""><Link>Menu three</Link></option>
                <option value=""><Link>Sub Menu</Link></option>
                <option value=""><Link>Menu one</Link></option>
                <option value=""><Link>Menu two</Link></option>
                <option value=""><Link>Menu three</Link></option>
            </select>
            <select name="" id="">
                <option value=""><Link>Dropdown</Link></option>
                <option value=""><Link>Menu one</Link></option>
                <option value=""><Link>Menu two</Link></option>
                <option value=""><Link>Menu three</Link></option>
            </select>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link to={"/adduser"}><button>Add User</button></Link>
            <Link to={"/favorites"}><button><FaHeart/></button></Link>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Usernavbar