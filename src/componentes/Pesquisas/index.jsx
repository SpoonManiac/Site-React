import styled from "styled-components";
import React, { useState } from "react";



const PesquisasConteiner = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  .opcoes_de_pesquisa {
    display: flex;
    margin-right: 20px;
  }

  .search-bar {
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

function Pesquisas ({ setSearchTerm, setSearchType }) {
  const [selectedOption, setSelectedOption] = useState("livros");

  const OpcaoMudanca = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    setSearchType(selected);
    setSearchTerm("");
  };

  const  termoPesquisa = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <PesquisasConteiner>
      <div className="opcoes_de_pesquisa">
        <label>
          <input type="radio" value="livros"
          checked={selectedOption === "livros"}
          onChange={OpcaoMudanca}
          />
          Pesquisar Livros
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input type="radio" value="usuario"
          checked={selectedOption === "usuario"}
          onChange={OpcaoMudanca}
          />
          Pesquisar Usuário
        </label>
      </div>
      <input type="text" className="search-bar"
      placeholder={`Pesquisar ${selectedOption}`}
      onChange={termoPesquisa}
      />
      
    </PesquisasConteiner>
  )
}

export default Pesquisas