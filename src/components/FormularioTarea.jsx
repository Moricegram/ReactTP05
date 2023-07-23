import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState(""); //State para los datos del input o form.control. Tarea es el nombre del State.
  const [listaTareas, setListaTareas] = useState([]); //Array para almacenar los states tarea. listaTareas el nombre del Array.
  //Funcion para controlar el evento onSubmit del Form.
  const handleSubmit = (e) => {
    //para evitar que recargue la pagina por cada evento submit.
    e.preventDefault();
    //Guardar tarea en el Array de listaTareas
    //El operador Spred ...  me sirve para conservar los existente en el Array
    
    setListaTareas([...listaTareas, tarea]);
    //Borro el input para una nueva carga mediante setTarea porque el value del Input esta vinculado al State tarea.
    setTarea("");
  };

  //Creo una funcion para borrar tareas
  //Invento un parametro tareaBorrar
    const borrarTarea = (tareaBorrar)=> {
      let listaTareasFiltrada = listaTareas.filter( (itemTarea)=> itemTarea !== tareaBorrar )
      setListaTareas(listaTareasFiltrada)
    };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-1 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="ingresa una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)} //para guardar el value del Input dentro del State
          />
          <Button className="ms-2" variant="success" type="submit">
            +
          </Button>
        </Form.Group>
        <ListaTareas propsListaTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
      </form>
    </>
  );
};

export default FormularioTarea;
