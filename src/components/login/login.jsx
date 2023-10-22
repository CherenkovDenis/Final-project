import { useState } from 'react';
import styles from './style.module.css';
import { useLocalStorage } from '../../useLocalStorage';

const HomePage = (props) => {
  const [user, setUser] = useLocalStorage('User');
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={styles.container}>
      {user && (
        <div>
          <div>Привет, {user}</div>
          <button className={styles.enterButton} onClick={() => setUser('')}>Выйти</button>
        </div>
      )}

      {!user && (
        <div className={styles.centered}>
          <label className={styles.headText}>Введите логин</label>
          <input 
            value={inputValue}
            onChange={(el) => setInputValue(el.target.value)}
            className={styles.input}
          />
          <button onClick={() => setUser(inputValue)} className={styles.button}>
            Войти
          </button>
        </div>
      )}

    </div>
  );
};

export default HomePage;
