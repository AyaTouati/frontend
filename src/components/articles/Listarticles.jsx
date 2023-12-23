import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Listarticles = () => {
    const [articles,setArticles]=useState([])

    useEffect(()=>{
        getarticles()
    }, [])



    const getarticles=async()=>{
        await axios.get("http://localhost:3001/api/articles")
        .then(res=>{
            setArticles(res.data)
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleDelete=async(id)=>{
       if(window.confirm("etes vous sùr de vouloir supprimer ce produit")){
        await axios.delete(`http://localhost:3001/api/articles/${id}`)
        .then(res=>{
            getarticles()
        })
       .catch(error=>{
        console.log(error)
       })
    }
}
  return (
    
        <div className="container">
        <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">

        <Link className="btn btn-outline-light" to="/articles/add">
        Ajouter article
        </Link>
        </div>
        </nav>
        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                <th>Image</th>
                <th>Réference</th>
                <th>Désignation</th>
                <th>Qunatité</th>
                <th>Prix</th>
                <th>update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {articles.map((art,index)=>
                <tr key={index}>
                    
                    
                    <td><img src={art.imageart} width={80} height={80}/></td>
                    <td>{art.reference}</td>
                    <td>{art.designation}</td>
                    <td>{art.qtestock}</td>
                    <td>{art.prix}</td>
                    <td><Link className='btn btn-outline-warning mx-2'
                    to={`/articles/edit/${art._id}`} 
                    ><i class="fa-solid fa-pen-to-square"></i>Modifier</Link></td>
                               
                    <td><Button variant="btn btn-outline-danger" onClick={()=>handleDelete(art._id)}>
                    <i className="fa-solid fa-trash"></i>Delete</Button></td>
                    

                  
                </tr>
                  )}
            </tbody>
        </table>
      
    </div>
  )
}

export default Listarticles