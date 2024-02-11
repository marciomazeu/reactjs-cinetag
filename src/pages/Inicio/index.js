import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";

function Inicio(){
    return(
        <>
        <Header />
        <Banner imagem='banner'/>
        <Title>
            <h1>O seu lugar para guardar filmes!!</h1>
        </Title>
        <Card id='1' title="Alguma coisa" cover="https://s2-techtudo.glbimg.com/JsE244mucjKWLYtNgeiDyfVYlJQ=/0x129:1024x952/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png"/>
        <Footer />
        </>
        
    )
}

export default Inicio;