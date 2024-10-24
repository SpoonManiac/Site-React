import styled from "styled-components";

const TOpcao = [{ link: "https://impacta.edu.br", texto: "Cadastro Livros" }, 
  { link: "#", texto:"Cadastro de Usuário"}]

const OpcoesHeaderConteiner = styled.header`
  .opcoes {
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    min-width: 120px;
    padding: 0 5px;
    cursor: pointer;
  }

  .opcao {
    display: flex;
    margin-right: 20px;
  }
  
`;

function OpcoesHeader() {
  
  return (
    <OpcoesHeaderConteiner>
      <ul className="opcao">
        {TOpcao.map((cadastro) => (
          <li className="opcoes">
            {" "}
            <a class="nav-link active" href={cadastro.link} target="_blank">
              <p>{cadastro.texto}</p>
            </a>
          </li>
        ))}
      </ul>
    </OpcoesHeaderConteiner>
  );
}

export default OpcoesHeader;
