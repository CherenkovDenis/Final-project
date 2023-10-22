import React, { useState } from 'react';
import styles from './style.module.css';
import { useLocalStorage } from '../../useLocalStorage';
import Comment from './comment';
import Chat from './chat';

const Message = () => {
  const [messageData, setMessageData] = useLocalStorage('Message', []);
  const [inputValue, setInputValue] = useState('');
  const [user] = useLocalStorage('User',[]);

  const changeChat = () => {
    setMessageData([...messageData, `${user ? user : 'Unknown user'}: ${inputValue}`]);
    setInputValue('');
  };

  return (
    <div className={styles.container}>
      <Chat messageData={messageData} />
      <Comment
        setInputValue={setInputValue}
        inputValue={inputValue}
        changeChat={changeChat}
        setMessageData={setMessageData}
      />
    </div>
  );
};

export default Message;