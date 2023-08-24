import React, { useState } from 'react';

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
        {/* Icono para el interruptor (puedes cambiarlo según tus necesidades) */}
        {darkMode ? '🌙' : '☀️'}
      </button>

  );
};

//Hay que sacar la l'ogica fuera!!