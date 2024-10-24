import  perfil from "../../imagens/perfil.jpg"
import sacola from  "../../imagens/sacola.png"
import styled from "styled-components"

const icones = [{icone: perfil,
    nome: 'Perfil'},

    {icone: sacola,
        nome: 'Carrinho'}
     ]

const IconesHeaderConteiner = styled.header `
    .icones {
        display: flex;
        align-items: center;
    }

    .icone{
        margin-right: 40px;
        width: 25px;



    }
`

function IconesHeader(){
    return (
    <IconesHeaderConteiner>
        <ul className="icones">
            { icones.map((img, index) => (
                <div className="Icones" key={index}>
                <li className="icone">
                    <a class="nav-link active" href="#">
                    <img src={img.icone} width="50" height="50" alt={img.nome}></img>
                    <p className="text-center mb-2">{img.nome}</p>
                    </a>
                </li>
                </div>
            ) )}

        </ul>
    </IconesHeaderConteiner>
    ) }
export default IconesHeader 