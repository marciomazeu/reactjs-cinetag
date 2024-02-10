import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Title from "../../components/Title";

function Inicio(){
    return(
        <>
        <Header />
        <Banner imagem='banner'/>
        <Title>
            <h1>O seu lugar para guardar filmes!!</h1>
        </Title>
        <Footer />
        </>
        
    )
}

export default Inicio;