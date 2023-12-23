import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Listarticles from "./components/articles/Listarticles";
import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Viewarticle from "./components/articles/Viewarticle";
import Listcategories from "./components/categories/Listcategories";



import { Viewcategorie } from "./components/categories/Viewcategorie";
import Listscategories from "./components/scategories/Listscategories";
import Editcategorie from "./components/categories/Editcategorie";

import Editscategorie from "./components/scategories/Editscategorie";
import { Viewscategorie } from "./components/scategories/Viewscategorie";
import Menu from "./components/Menu";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Insertcategorie from "./components/categories/Insertcategorie";
import Listarticlecard from "./components/articles/Listarticlecard";

function App() {
 

  return (
    <>
     
     <Router>
      <Menu/>
      <Routes>
      <Route path="/articles" exact element={<Listarticles/>}/>
      <Route path="/articles/add" element={<Insertarticle/>}/>
      <Route path="/articles/edit/:id" element={<Editarticle/>}/>
      <Route path="/articles/view/:id" element={<Viewarticle/>}/>
      <Route path="/categories" exact element={<Listcategories/>}/>
      <Route path="/categories/add" element={<Insertcategorie />}/>
      <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
      <Route path="/categories/view/:id" element={<Viewcategorie/>}/>
      <Route path="/scategories" exact element={<Listscategories/>}/>
      <Route path="/scategories/add" element={<Insertscategorie/>}/>
      <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
      <Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
      <Route path="/" element={<Listarticlecard/>}/>
      </Routes>


     </Router>
    </>
  )
}

export default App