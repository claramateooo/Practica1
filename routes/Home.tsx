import { useState } from 'https://cdn.skypack.dev/react';


export default function Home() {
  const [buttonColor, setButtonColor] = useState('#0000FF');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const playSong = () => {
    const audio = new Audio('https://raw.githubusercontent.com/claramateooo/Practica1/main/Me%20Cas%C3%A9%20Con%20Un%20Enano%20-%20Las%20Veintisiete%20-%20Lo%20Tir%C3%A9%20Al%20Pozo%20-%20Arenal%20De%20Sevilla%20(Sevillana%20mix)_-pJOquQrde8.mp3');
    audio.currentTime = 25; // Empieza en el minuto 0:25
    audio.play();
    setTimeout(() => audio.pause(), 10000); // Reproduce durante 10 segundos
  };
  const handleMouseOver = () => {
    setButtonColor('#FF0000'); // Cambia el color del botón al pasar el ratón por encima
    setTextColor('#000000'); // Cambia el color del texto al pasar el ratón por encima
  };

  const handleMouseOut = () => {
    setButtonColor('#0000FF'); // Restaura el color del botón al dejar de pasar el ratón por encima
    setTextColor('#FFFFFF'); // Restaura el color del texto al dejar de pasar el ratón por encima
  };

  const handleClick = () => {
    setButtonColor('#FFFF00'); // Cambia el color del botón al hacer clic sobre él
    setTextColor('#000000'); // Cambia el color del texto al hacer clic sobre él
  };


  const rainbowColors = [
    '#FF0000', // rojo
    '#FF7F00', // naranja
    '#FFFF00', // amarillo
    '#00FF00', // verde
    '#0000FF', // azul
    '#4B0082', // índigo
    '#9400D3' // violeta
  ];



  return (
    <div className="relative h-screen flex flex-col justify-center items-center" style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '10px' }}>
      <div className="text-center text-4xl" style={{ padding: '10px', borderRadius: '10px' }}>
        <span className="italic">
          {Array.from("¡Bienvenido a mi página web!").map((letter, index) => (
            <span key={index} style={{ color: rainbowColors[index % rainbowColors.length] }}>{letter}</span>
          ))}
        </span>
      </div>

      <div className="flex justify-center items-center w-full">
        <img 
          src="https://i.gifer.com/OjRw.gif"
          alt="Gif "
          className="w-full h-auto object-cover" />
        <img 
          src="https://i.gifer.com/xy.gif"
          alt="Gif"
          className="w-full h-auto object-cover" />
        <img 
          src="https://i.gifer.com/ICU.gif"
          alt="Gif "
          className="w-full h-auto object-cover" />
        <img 
          src="https://i.gifer.com/2GU.gif"
          alt="Gif "
          className="w-full h-auto object-cover" />
        <img 
          src="https://i.gifer.com/XOsh.gif"
          alt="Gif"
          className="w-full h-auto object-cover" />
        <img 
          src="https://i.gifer.com/SXAR.gif"
          alt="Gif "
          className="w-full h-auto object-cover" />
       
      </div>
      {/* Botón con estilos cambiantes */}
      <button 
        className="absolute top-20 left-20 px-5 py-2 rounded-lg z-10"
        style={{ backgroundColor: buttonColor, color: textColor, transition: 'all 0.3s ease-in-out', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)' }}
        onClick={() => { playSong(); handleClick(); }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      > 
        Escuchar canción
      </button>

      <img 
        src="https://t2.uc.ltmcdn.com/es/posts/1/0/4/feria_de_abril_de_sevilla_cuando_es_y_por_que_se_celebra_53401_orig.jpg"
        alt="primera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />

      <div className="absolute bottom-0 text-center py-4" style={{ backgroundColor: '#9400D3' }}>
        <span className="italic text-white text-4xl">Calendario 2025 ydeblas</span>
        <span role="img" aria-label="Emoticono de felicidad" className="ml-2">😊</span>
      </div>

  
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Enero</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.10%20(1).jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/1-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />

      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Febrero</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.10%20(3).jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/2-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Marzo</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.09%20(1).jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/3-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Abril</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.09%20(2).jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/4-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Mayo</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.10%20(2).jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/5-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Junio</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.08%20(2).jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/6-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Julio</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.08%20(3).jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/7-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Agosto</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.08.jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/8-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Septiembre</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.09%20(3).jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/9-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Octubre</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.08%20(1).jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/10-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Noviembre</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.10.jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/11-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute bottom-0 w-full" style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', fontFamily: 'Calibri', padding: '10px' }}>
        <span style={{ backgroundColor: '#00000', display: 'inline-block', fontSize: '5rem' }}>Diciembre</span>
      </div>

      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/WhatsApp%20Image%202024-03-03%20at%2020.04.09.jpeg?raw=true"
        alt="Segunda imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      
      <img 
        src="https://7calendar.com/calendar/monthly/png/12-2025-a4-l-1-24-es.png"
        alt="Tercera imagen debajo de la primera"
        className="absolute inset-0 object-cover w-full h-full" />
      <img 
        src="https://github.com/claramateooo/Practica1/blob/main/Untitled%20%E2%80%91%20Made%20with%20FlexClip.gif?raw=true"
        alt="Gif adicional"
        className="w-full h-auto object-cover" />
      <img 
        src="https://i.gifer.com/DQC3.gif"
        alt="Gif adicional"
        className="w-full h-auto object-cover" />
    </div>

  );
}
