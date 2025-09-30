import {Routes, Route, useNavigate} from "react-router";
import LogIn from "./logIn.jsx";
import AuthUser from "./authUser.jsx";


function Header() {
    const navigate = useNavigate();
    return (
        <>
            <header className="w-full h-auto flex justify-center items-center gap-2 mb-2">


                <div
                    className="w-1/2 bg-blue-800 h-full border-gray-700 border-2 rounded-b-md text-center cursor-pointer"
                onClick={()=>navigate("/")}>
                    <p className="text-gray-300 font-bold text-xl p-1">full form</p>
                </div>


                <div
                    className="w-1/2 bg-blue-800 h-full border-gray-700 border-2 rounded-b-md text-center cursor-pointer" onClick={() => navigate("/auth")}>
                    <p className="text-gray-300 font-bold text-xl p-1">register or login form</p>
                </div>




            </header>
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/auth" element={<AuthUser/>}/>
            </Routes>
        </>
    )
}

export default Header
