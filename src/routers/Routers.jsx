
import { Routes, Route, Navigate } from 'react-router-dom';
import Firssst from '../1ui/first/Firssst';
import Slider from '../1ui/second/Slider';
import Third from '../1ui/thrid/Third';
import Four from '../1ui/four/Four';


export default function Routers(){
    return(
        <Routes>
        <Route path="/" element={<Firssst />} />
        <Route path="/2" element={<Slider />} />
        <Route path="/23" element={<Third />} />
        <Route path="/234" element={<Four />} />
      </Routes>
    )
} 
