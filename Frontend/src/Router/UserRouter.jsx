import Adduser from "../Pages/Adduser/Adduser";
import Details from "../Pages/Details/Details";
import Favorites from "../Pages/Favorites/Favorites";
import Home from "../Pages/Home/Home";
import UserRoot from "../Pages/UserRoot";






let ROUTES=[
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"/",
                element:<Home/>

            },
            {
                path:"/:id",
                element:<Details/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"/adduser",
                element:<Adduser/>
            }
        ]
    }
]


export default  ROUTES