import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../assets/costs_logo.png'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link exact to='/'>
                    <img src={logo} alt="Logo do costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>Contato</Link>
                    </li>
                   
                </ul>
            </Container>
      </nav>
    )
}