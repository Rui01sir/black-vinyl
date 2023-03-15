import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Frontpage from './pages/Frontpage';
import Main from './components/Main';
import Divbar from './components/Divbar';
import Footer from './components/Footer';
import Googlemap from './components/Googlemap';
import Carousel from './components/Carousel'
import Loginmain from './components/Loginmain';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Frontpage />} />
        <Route path='/loginpage' element={<Loginpage/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/divbar' element={<Divbar/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/googlemap' element={<Googlemap/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/loginmain' element={<Loginmain/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
