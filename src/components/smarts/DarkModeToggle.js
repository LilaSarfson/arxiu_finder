import React, { useState } from 'react';
import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'

 export default function DarkModeToggle (){  
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle('dark', !darkMode);
    };
  return (
      <button id='toggle'
        onClick={toggleDarkMode}
        className='p-4'>
        {darkMode ? 
        <img className='w-7' src={moon}/> : <img className='w-7' src={sun}/>}
      </button>

  );
};
