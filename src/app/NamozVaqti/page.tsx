import React, { useState } from 'react'


const [times, setTimes] = useState<number[]>([]);


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
    <div>
        <div>
        <div className='times_name'>
          <div className="times">
              {/* <Header /> */}
              <p className='home__text p'></p>
            <p className='home__category p1'>Артикул</p>
            <p className='home__brend p2'>Бренд</p>
            <p className='home__cost p3'>Цена</p>
            <p className='home__stock p4'>Цена со скидкой</p>
                     

          </div>
<hr />
            {
                times.map((tm) => (
                  <ul className='times'>
                  <li className='home__text p'>
                  <input type="checkbox" />
                  Товар{allcard.id}
                  </li>
              <li className='home__category p1'>
                  {allcard.category}
              </li>
              <li className='home__brend p2'>
                  {allcard.brand}
              </li>
              <li className='home__cost p3'>
                  {allcard.price} $
              </li>
              <li className='home__stock p4'>
                  {allcard.stock}$
                  <hr />
              </li>
              
              </ul>
                ))
              }
              <hr />


        </div>
    </div>  
        </div>
    </div>
  )
}

export default NamozVaqti