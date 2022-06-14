import Layout from '../components/Layout'
import styled from '@emotion/styled'
import CryptoFormulario from "../components/cripto/CryptoFormulario";

const ImagenPrincipal = styled.img`
  width: 300px;
  height: 200px;
`


const Cripto = () => (
    <Layout title="Cripto | Next.js + TypeScript Example">
        <ImagenPrincipal
            src={'https://media.ambito.com/p/e2e0836c4f57f5ae2890d784df8de512/adjuntos/239/imagenes/038/723/0038723804/criptomonedasjpg.jpg'}
            alt={'Texto Alternativo Criptomoneda'}
        >
        </ImagenPrincipal>

        <h1>hola desde cripto</h1>

        <CryptoFormulario></CryptoFormulario>


    </Layout>
)

export default Cripto
