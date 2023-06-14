import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {tarea}
        <Button variant="danger" on click={() => borrarTarea(tarea)}>
          <i className="bi bi-x-circle"></i>
        </Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
