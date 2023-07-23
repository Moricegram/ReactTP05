import { Card, Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./components/FormularioTarea";

const App = () => {
  return (
    <>
      <Container className="my-5 px-5">
        <Card className="p-3 mb-2 bg-secondary text-white">
          <h1 className="display-3 text-center text-light">Bienvenido</h1>
          <h2 className="display-5 text-center text-light">
            Ingresa tus tareas
          </h2>
          <hr className="text-light" />
          <FormularioTarea></FormularioTarea>
        </Card>
      </Container>

      <footer className="text-center bg-dark text-light py-4 mt-auto">
        <p>
          <i>Practica con React - Ejercicio 04</i>
        </p>
      </footer>
    </>
  );
};

export default App;
