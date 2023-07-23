import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({nombreTarea, borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}
      <Button className="rounded-5" variant="danger" onClick={ ()=> borrarTarea(nombreTarea)}>
        X
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
