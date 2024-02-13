import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Card";
import videos from './../../json/db.json';
import styles from '../Inicio/Inicio.module.css'

function Inicio(){
    return(
        <>
        
        <Banner imagem='banner'/>
        <Title>
            <h1>O seu lugar para guardar filmes!!</h1>
        </Title>
        <section className={styles.container}>
            {videos.map((video)=>{
            return <Card {...video} key={video.id} />
            })}
        </section>
        <Footer />
        </>
        
    )
}

export default Inicio;