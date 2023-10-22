import React from 'react';
import styles from './style.module.css';

const Chat = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.chat}>
          <div>ЧАТ</div>
          {props.messageData.map((el, i) => {
            return (
              <div className={styles.message} key={i}>
                <div className={styles.messageText}>{el}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chat;
