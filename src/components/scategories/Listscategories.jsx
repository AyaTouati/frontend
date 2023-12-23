import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Listscategories = () => {
    const [scategories, setScategories] = useState([])

    useEffect(() => {
        getscategories()
    }, [])

    const getscategories = async () => {
        await axios.get("http://localhost:3001/api/scategories")
            .then(res => {
                setScategories(res.data)
                console.log(res.data);
            })
            .catch(error => {
                console.log(error)
            })


    }

    const handleDelete = async (id) => {
        if (window.confirm("etes vous sure de vouloir supprimer cette produit")) {
            await axios.delete(`http://localhost:3001/api/scategories/${id}`)
                .then(res => {
                    getscategories()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

  return (
    <div>
            <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">

                        <Link className="btn btn-outline-light" to="/scategories/add">
                            Ajouter sous categorie
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
                    {scategories.map((cat, index) =>
                        <tr key={index}>


                            <td><img src={cat.imagescategorie} width={80} height={80} /></td>
                            <td>{cat.nomscategorie}</td>
                            <td><Link className='btn btn-outline-warning mx-2'
                    to={`/scategories/edit/${cat._id}`} 
                    ><i class="fa-solid fa-pen-to-square"></i>Modifier</Link></td>
                            <td><Button variant="btn btn-outline-danger" onClick={() => handleDelete(cat._id)}>
                                <i class="fa-solid fa-trash"></i>Delete</Button></td>



                        </tr>
                    )}
                </tbody>
            </table>

        </div>
  )
}

export default Listscategories