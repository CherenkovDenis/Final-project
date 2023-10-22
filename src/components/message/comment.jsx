import React from 'react';
import styles from './style.module.css';

const Comment = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textAreaWrapper}>
        <textarea placeholder='Напишите сообщение' value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)} />
      </div>
      <div className={styles.buttonsWrapper}>
        <button className={styles.enterButton} onClick={props.changeChat}>Отправить</button>
        <button className={styles.deleteButton} onClick={() => props.setMessageData([])}>Удалить</button>
      </div>
    </div>
  );
};

export default Comment;
