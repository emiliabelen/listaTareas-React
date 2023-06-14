import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTareas = () => {
  // console .log (props.FormularioTareas)
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas ([... tareas, tarea])
    setTarea ('');
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
      <ListaTareas tareas={tareas} ></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
