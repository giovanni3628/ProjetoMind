import GlobalStyle from "../../styles/global.js";
import styled from "styled-components";
import Form from "../../components/Form";
import Grid from "../../components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function Home() {
  const [cursos, setCursos] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getCursos = async () => {
    try{
      const res = await axios.get("http://localhost:8800/");
      setCursos(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getCursos();
  }, [setCursos]);

  return (
    <>
    <Container>
        <Title>Cursos</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getCursos={getCursos} />
        <Grid cursos={cursos} setCursos={setCursos} setOnEdit={setOnEdit}/>
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
};

export default Home;