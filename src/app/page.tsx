import React, { useState } from 'react'


const [times, setTimes] = useState<any[]>([]);


const getTimes = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
     const setTimes = data;
      return setTimes
    } catch (error: unknown | any) {
      return error.message;
    }
  };


const NamozVaqti = () => {

  return (
    <div className=''>
        <div>
        <div className='times_name'>
          <div className="times">
              {/* <Header /> */}
              <p className='home__tong'>Tongi-saharlik</p>
            <p className='home__bomdod'>Bomdod</p>
            <p className='home__peshin'>Peshin</p>
            <p className='home__asr'>Asr</p>
            <p className='home__shom'>Shom va Iftorlik</p>
            <p className='home__hufton'>Xufton</p>
            
                     

          </div>
<hr />
            {
                times.map((tm) => (
                  <ul className='times'>
                  <li className='home__tong'>
                  {tm.tong_saharlik}
                  </li>
              <li className='home__bomdod'>
                  {tm.quyosh}
              </li>
              <li className='home__peshin'>
                  {tm.peshin}
              </li>
              <li className='home__asr'>
                  {tm.asr} $
              </li>
              <li className='home__shom'>
                  {tm.shom_iftor}$
                  <hr />
              </li>
              <li className='home__hufton'>
                  {tm.hufton}$
                  <hr />
              </li>
              
              </ul>
                ))
              }
              <hr />


        </div>
    </div>  
        </div>
    // </div>
  )
}

export default NamozVaqti