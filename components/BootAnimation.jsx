"use client"
import {useEffect } from 'react';
import './BootAnimation.css';
import {
    DraftingCompass,
  } from "lucide-react";

const BootAnimation = ({OnAnimationEnd})=>{
    useEffect(()=>{
        const timer = setTimeout(()=>{
            OnAnimationEnd();
        },3000);
        return ()=> clearTimeout(timer);
    },[OnAnimationEnd]);

  return (
<>
<div className="bootanimation">
    <h1>
    <DraftingCompass className="w-20 h-10 text-teal-600" /><br/>
        Atmosoft</h1>
        <br/><br/><br/><br/>
    <div className='loader-spinner'></div>
</div>
</> 
 );
};

export default BootAnimation