import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import o_heroi from "../../imagens/o heroi e o fora da lei.png"
import taro_gatos from "../../imagens/Tarô mágico dos gatos.png"
import black_hat from "../../imagens/Black hat python.png"
import tom from "../../imagens/Captura de tela 2022-04-17 141000.png"

const card = [
  {
    imagem: o_heroi,
    nome_livro: 'O Herói e o Fora da Lei',
    link_ver_mais: '#',
  },
  {
    imagem: taro_gatos,
    nome_livro: 'Tarô Mágico dos Gatos',
    link_ver_mais: '#',
  },
  {
    imagem: black_hat,
    nome_livro: 'Black Hat Python',
    link_ver_mais: '#',
  },
  {
    imagem: tom,
    nome_livro: 'Tom sem o Jerry',
    link_ver_mais: "#"
  }
];

const CardsConteiner = styled.div `
  .card-image {
    object-fit: cover;
    height: auto;
    width: 100rem;
  }

  .ver-mais {
    margin-top: 5px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function Cards({ searchTerm, searchType }){
  const CardsFiltrados = card.filter((img) => {
    if (searchType === "livros") {
      return img.nome_livro.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

    return (
      <CardsConteiner>

        <div className="container row mx-auto g-4 mt-4">
          {CardsFiltrados.map((img, index) => (
            <div className="col-6 col-md-4 col-xxl-2" key={index}>
              <div className="card h-60 w-60">
                <img
                  className="card-img-top img-fluid card-image"
                  src={img.imagem}
                  alt={img.nome_livro}
                />
                <div className="card-body d-flex flex-column">
                  <p className="text-center mb-2">{img.nome_livro}</p>
                  <div className="mt-auto d-flex justify-content-end">
                    <a href={img.link_ver_mais} className="btn btn-primary ver-mais">
                      Ver mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        </CardsConteiner>
    )
}

export default Cards;