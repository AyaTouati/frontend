import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Listcategories = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        getcategories()
    }, [])



    const getcategories=async()=>{
        await axios.get("http://localhost:3001/api/categories")
        .then(res=>{
            setCategories(res.data)
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleDelete=async(id)=>{
       if(window.confirm("etes vous sùr de vouloir supprimer ce produit")){
        await axios.delete(`http://localhost:3001/api/categories/${id}`)
        .then(res=>{
            getcategories()
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

        <Link className="btn btn-outline-light" to="/categories/add">
        Ajouter categorie
        </Link>
        </div>
        </nav>
        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                <th>Nom</th>
                <th>Image</th>
                <th>update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {categories.map((cat,index)=>
                <tr key={index}>
                    
                    
                    <td><img src={cat.imagecategorie} width={80} height={80}/></td>
                    <td>{cat.nomcategorie}</td>
                    <td><Link className='btn btn-outline-warning mx-2'
                    to={`/categories/edit/${cat._id}`} 
                    ><i class="fa-solid fa-pen-to-square"></i>Modifier</Link></td>
                    <td><Button variant="btn btn-outline-danger" onClick={()=>handleDelete(cat._id)}>
                    <i className="fa-solid fa-trash"></i>Delete</Button></td>


                  
                </tr>
                  )}
            </tbody>
        </table>
      
    </div>
  )
}

export default Listcategories