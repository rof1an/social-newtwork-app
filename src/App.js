import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Navbar store={props.store}/>
                <div>
                    <Routes>
                        <Route path="/profile/*" element={<Profile/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/users/*" element={<UsersContainer/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
