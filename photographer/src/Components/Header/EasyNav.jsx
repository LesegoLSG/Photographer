import React,{useContext} from 'react';
import { IoHome,IoCamera  } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { GrContact,GrServices  } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../Transitions';
import { CursorContext } from '../../Context/CursorContext';

const EasyNav = () => {
    const navigate = useNavigate();
    const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext);

  return (
    <div
            onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}
    className="flex md:hidden fixed flex-col top-1/2 left-0 pl-2 z-50">
       <ul className="flex flex-col gap-y-6">
        {/* Home */}
        <li>
            <a>
                <IoHome onClick={() =>navigate('/')} size={35}/>
            </a>
        </li>
        {/* About */}
        <li>
            <a>
                <IoMdPerson onClick={() =>navigate('/about')} size={35}/>
            </a>
        </li>
        {/* Services */}
        <li>
            <a>
                <GrServices onClick={() =>navigate('/services')} size={35}/>
            </a>
        </li>
        {/* My work */}
        <li>
            <a>
                <IoCamera onClick={() =>navigate('/portfolio')} size={35}/>
            </a>
        </li>
        {/* Contact */}
        <li>
            <a>
                <GrContact onClick={() =>navigate('/contact')} size={35}/>
            </a>
        </li>
        
        </ul> 
    </div>
  )
}

export default EasyNav