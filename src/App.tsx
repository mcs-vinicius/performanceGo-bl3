import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import FormCategoria from './components/categoria/formCategoria/FormCategoria';
import ListaCategorias from './components/categoria/listarCategorias/ListarCategorias';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import Home from './pages/home/Home';


function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;