import {BrowserRouter, Route, Routes} from 'react-router-dom';
import More from "../pages/More";
import About from "../pages/About";
import Home from "../pages/Home";
import ChatBot from "../pages/ChatBot";
import Start from "../pages/Start";
import Result from "../pages/Result";

function App() {


    return (
        <div>
            <BrowserRouter>
                <Routes>

                < Route index element={<Home/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/More" element={<More/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/ChatBot" element={<ChatBot/>}/>
                    <Route path="/Start" element={<Start/>}/>
                    <Route path="/Result" element={<Result/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;