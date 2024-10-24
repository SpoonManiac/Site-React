
import Header from "./componentes/Header";
import styled from "styled-components"
import Cards from "./componentes/Cards"
import 'bootstrap/dist/css/bootstrap.min.css';

const AppConteiner = styled.div `
     width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #a192f3 35%, #2a07ee 90%);

      li{
        list-style: none;
      }
`


function App() {
  return (
    <AppConteiner>
      <Header />
      <Cards />
    </AppConteiner>
  );
}

export default App;
