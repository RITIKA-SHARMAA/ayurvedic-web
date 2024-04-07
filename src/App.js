import {BrowserRouter, Route, Routes} from 'react-router-dom';
import More from "./pages/More";
import About from "./pages/About";


function App1() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    < Route index element={<mainPage/>}/>
                    <Route path="/More" element={<More/>}/>
                    <Route path="/About" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App1;