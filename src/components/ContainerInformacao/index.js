import styled from "styled-components"

const InformacaoDiv = styled.div`

h2{
  color: var(--cor-primaria);
  font-family: "Poppins", sans-serif;
}
p{
  text-align: center;
  color: var(--cor-primaria);
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  width: 450px;
  margin: 0 auto;
  padding-bottom: 30px;
}

@media(max-width: 1024px) {
    h2{
      margin: 0px;
      }
    p{
      margin-bottom: 40px;
    }
  }
  @media(max-width: 1671px) {
    img{
      width: 350px;
    }
    p{
        width: 200px;
      }
  }   
    @media(max-width: 1317px) {
      img{
        width: 250px;
      }
      p{
        width: 200px;
      }
    }
    
`
function ContainerInformacao({ informacoes }) {
  return informacoes.map(informacao => <InformacaoDiv><img src={informacao.img} alt={informacao.alt}></img><h2>{informacao.titulo}:</h2><p>{informacao.descricao}</p></InformacaoDiv>
  )
}

export default ContainerInformacao