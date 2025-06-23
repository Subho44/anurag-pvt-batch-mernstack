import React from 'react'

const Cardlist = ({data}) => {

  return <>
  <div className='row'>
    {data.map(x=>(
      <div className='col-md-3 mb-3'>
      <div className='card border-success h-100'>
      <img src={x.image} alt='img' className='card-image-top'/>
      <div className='card-body'>
          <h5 className='card-title'>{x.title}</h5>
          <p className='card-text'>{x.description}</p>
          <button className='btn btn-dark'>{x.status}</button>
      </div>
      </div>
      </div>
    ))}
  </div>
</>
}

export default Cardlist