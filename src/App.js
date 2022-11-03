import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App(props) {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Navbar state={props.state.sidebar.friends}/>
                <div>
                    <Routes>
                        <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage}
                                                                   dispatch={props.dispatch}/> } />
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>} />
                        <Route path="/news/*" element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
