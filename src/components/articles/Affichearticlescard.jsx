import React from 'react'
import Cardc from './Cardc';
const Affichearticlescard = ({articles}) => {
  return (
    <div className='container'>
        <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
    {articles.map((art,index)=>

   <Cardc art={art}/>
  
)}
</div>
</div>
  )
}

export default Affichearticlescard