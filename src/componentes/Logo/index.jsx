import logo from "../../imagens/rato.gif"
import styled from "styled-components"

const LogoConteiner = styled.header `
    .logo-img {
    margin-top: 5px;
    margin-bottom: 5px;
    width:70px;
    height:auto;
    }

    .logo {
        margin-right: 15em;
    }
    
`
function Logo (){
    return (
    <LogoConteiner>
        <div className="logo">
        <img src={logo} className="logo-img" /* width="auto" height="130px" */ alt="logo"></img>
        </div>
    </LogoConteiner>
    )
}

export default Logo