import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTareas from "./components/FormularioTareas";

function App() {
  return (
    <>
      <FormularioTareas
        primerTitulo="Lista de Tareas"
        estado={true}
      ></FormularioTareas>

      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
