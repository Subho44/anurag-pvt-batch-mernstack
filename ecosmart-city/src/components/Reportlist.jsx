import {useState,useEffect} from 'react'
import axios from 'axios'

const Reportlist = () => {
  const [reports,setReports] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/cards')
    .then((res)=>{
      setReports(res.data);
    })
    .catch((err)=>{
      console.error('error fetching reports: ',err);
    });
  },[]);

  return <>
  <div className='row'>
    {reports.map((x)=>(
      <div className='col-md-3'>
      <p>{x.title}</p>
      <br></br>
      <p>{x.description}</p>
      <br></br>
      <p>{x.status}</p>
      </div>
    ))}
  </div>

  </>
}

export default Reportlist