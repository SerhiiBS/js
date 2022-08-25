import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Parts
import Header from '../components/Header'
import Footer from '../components/Footer'
// Pages
import Main from '../pages/Main'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Todo from '../pages/Todo'

// Helpers
import {ThemeContext, theme} from "../_helpers/context/theme";
// Core
import {routers} from "../../core/config";

function App() {
    const [value, setValue] = useState(theme.light)
    return (
        <ThemeContext.Provider value={[value, setValue]}>
            <BrowserRouter >
                <Header/>
                <main>
                    <Routes >
                        <Route path={routers.main} element={<Main />} />
                        <Route path={routers.contact} element={<Contact />} />
                        <Route path={routers.about} element={<About  />} />
                        <Route path={routers.todo} element={<Todo  />} />
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;
