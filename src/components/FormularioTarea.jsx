import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  //Recuperando datos del Local Storage
  //Hago una doble verificacion de tarea almacenada.
  useEffect(() => {
    const tareaAlmacenada = JSON.parse(localStorage.getItem("tareas"));
    if (tareaAlmacenada && tareaAlmacenada.length > 0) {
      setListaTareas(tareaAlmacenada);
    }
  }, []); 
  // El useEffect de carga solo debe ejecutarse una vez al montar el componente, así que se pasa un array vacío.

  // Guardar en el LocalStorage cada vez que el array listaTareas cambie.
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(listaTareas));
  }, [listaTareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (tareaBorrar) => {
    let listaTareasFiltrada = listaTareas.filter(
      (itemTarea) => itemTarea !== tareaBorrar
    );
    setListaTareas(listaTareasFiltrada);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-1 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="ingresa una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button className="ms-2" variant="success" type="submit">
            +
          </Button>
        </Form.Group>
        <ListaTareas
          propsListaTareas={listaTareas}
          borrarTarea={borrarTarea}
        ></ListaTareas>
      </form>
    </>
  );
};

export default FormularioTarea;

