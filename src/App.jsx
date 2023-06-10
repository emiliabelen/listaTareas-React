import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTareas from "./components/FormularioTareas";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
<Container className = "my-5 mainPage">
  <h1 className="display-4 text-center text-kight">Lista de Tareas</h1>
  <hr className="text-ligth"/>
  <FormularioTareas ></FormularioTareas>
</Container>
      
      

      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
