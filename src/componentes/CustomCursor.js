
import React, { useEffect } from 'react';
import '../Popup.css'

const CustomCursor = () => {
    useEffect(()=>{
        const handleMouseMove=(e)=>{
            const cursor=document.getElementById('customCursor');
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        };
        document.addEventListener('mousemove',handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    },[])
    return <div id='customCursor' className='custom-cursor'></div>
};

export default CustomCursor;
