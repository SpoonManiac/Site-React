import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from '../IconesHeader';
import Pesquisas from "../Pesquisas";
import React, {useState} from "react";
import styled from "styled-components"

const HeaderConteiner = styled.header `
    background-color: #fff;
    display: flex;
    justify-content: center;
    
`

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("livros");

  return (
        <HeaderConteiner>
            <Logo />
            <OpcoesHeader />
            <Pesquisas setSearchTerm={setSearchTerm} setSearchType={setSearchType} />
            <IconesHeader />
        </HeaderConteiner> 
  )
}

export default Header
