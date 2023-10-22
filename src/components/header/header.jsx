import styles from "./style.module.css";
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link className={styles.links} to='/'>Страница входа</Link>
                <Link className={styles.links} to='/chat'>Чат</Link>
                <Link className={styles.links} to='/data'>Данные</Link>
            </nav> 
        </div>
    )
}

export default Header;