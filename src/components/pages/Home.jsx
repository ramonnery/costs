import styles from './Home.module.css'
import savings from '../../assets/savings.svg'
import LinkButton from '../layout/LinkButton'

export default function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar o seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Novo Projeto' />
            <img src={savings} alt="Costs" />
        </section>
    )
}