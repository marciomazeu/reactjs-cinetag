import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Title from '../../components/Title'
import styles from './Favorites.module.css'
import banner from '../../imagens/banner.jpg'
import Card from '../../components/Card'

function Favorites(){
    return(
        <>
        <Banner imagem='banner'/>
<Title >
    <h1>Meus favoritos</h1>
</Title>


<section className={styles.container}>
<Card id='1' title='Gato bnonifacio' cover='https://img.freepik.com/fotos-premium/papel-de-parede-abstrato-colorido-3d_692702-9798.jpg?w=2000' />
</section>

</>
    )
}

export default Favorites