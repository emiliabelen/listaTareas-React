import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTareas = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  // console .log (props.FormularioTareas)
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(tareasLocalStorage);

  //Usar el CICLO DE VIDA
  useEffect(() => {
    //el codigo que agrego aqui se ejecuta en las primeras etapas del ciclo de vida
    localStorage.setItem("listaTareas", JSON.stringify(tareas));
  }, [tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    console.log("entro a la funcion");
    let copiaTareas = tareas.filter((itemTarea) => itemTarea !== nombreTarea);
    setTareas(copiaTareas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
