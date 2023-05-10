import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Course from './Pages/Course';
import Students from './Pages/Students';
import Projects from './Pages/Projects';
import Videos from './Pages/Videos';
import Gallery from './Pages/Gallery';
import Logout from './Pages/Logout';
import Blog from './Pages/Blog';
import Dashboard from './Pages/Dashboard';
import Team from './Pages/Team';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
const App = () => {
  return (
      <BrowserRouter>
      <Sidebar>
      <Routes>
       <Route path= "/" element={<Dashboard/>}/>
        <Route path= "/home" element={<Home/>}/>
        <Route path= "/course" element={<Course/>}/>
        <Route path= "/students" element={<Students/>}/>
        <Route path= "/team" element={<Team/>}/>
        <Route path= "/projects" element={<Projects/>}/>
        <Route path= "/videos" element={<Videos/>}/>
        <Route path= "/gallery" element={<Gallery/>}/>
        <Route path= "/blog" element={<Blog/>}/>
        <Route path= "/logout" element={<Logout/>}/>
      </Routes>
      </Sidebar>
      </BrowserRouter>
  );
};

export default App;
