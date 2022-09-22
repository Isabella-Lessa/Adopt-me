import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Dog from "../pages/Dog.jsx";
import Cat from "../pages/Cat.jsx";
import Error from "../services/Error.jsx"

export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dogpages" element={<Dog/>}/>
                <Route path="/catpages" element={<Cat/>}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </Router>
    );
}