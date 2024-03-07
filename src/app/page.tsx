
const getTimes = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      return data
    } catch (error: unknown | any) {
      return error.message;
    }
  };


const NamozVaqti = async () => {
  const times = await getTimes();
  return (
    <div className=''>
        <div className='container'>
        <table className='table-fixed'>
        <thead>
    <tr>
      <th>Tongi-saharlik</th>
      <th>Bomdod</th>
      <th>Peshin</th>
      <th>Asr</th>
      <th>Shom va Iftorlik</th>
      <th>Xufton</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {
      times.map((tm:any) => (

        <td>{tm.tong_saharlik}</td>
        <td> {tm.quyosh}</td>
        <td>{tm.peshin}</td>
        <td> {tm.asr} </td>
        <td> {tm.shom_iftor}</td>
        <td>{tm.hufton}</td>
        ))
        }
            </tr>
    </tbody>

        </table>
    </div>  
        </div>

  )
}

export default NamozVaqti