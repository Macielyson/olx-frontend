import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path='/signin' element={<SignIn />} />
            <Route path="*" element={<NotFound />} /> {/*quando ela nao encontra nehuma ela manda essa*/}
        </Routes>
    )
}