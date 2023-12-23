import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Affichearticlescard from './Affichearticlescard'

const Listarticlecard = () => {

    const [articles,setArticles]=useState([])

    const fetcharticles=async()=>{
        await axios.get("http://localhost:3001/api/articles")
            .then(res => {
                setArticles(res.data)

            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(()=>{
        fetcharticles()
    },[])
  return (
    <div>
      <Affichearticlescard articles={articles}/>
    </div>
  )
}

export default Listarticlecard