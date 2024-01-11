import React, { useEffect, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.css';
import gif from '../assets/delivery.gif'
import { useNavigate, useNavigation } from 'react-router-dom'

const PreperingOrderScreen = () => {
  const navigate = useNavigate()
  const [countOfProgress, setCountOProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      
      setCountOProgress((oldProgress) => {
        if (100 === oldProgress) return 0;
        return Math.min(oldProgress + Math.random() * 10, 100);
      });
    }, 190);

      setTimeout(() =>{navigate("/deliveryScreen")}, 4000)
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-[#00CCBB] flex flex-column flex-1 justify-center items-center h-screen">

      <img
        src={gif}
        alt='#'
        className="h-21 w-21 left-11 bottom-8 animate__animated animate__fadeInLeft"
      />
      <p
        className="text-lg my-10 text-white font-bold text-center animate__animated animate__fadeInUp"
      >
        Waiting for Restaurant to accept order
      </p>
      
      <ProgressBar className='w-1/2' striped variant="info" now={countOfProgress} />

    </div>
  )
}

export default PreperingOrderScreen