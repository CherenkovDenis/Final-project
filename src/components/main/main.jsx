import styles from './style.module.css';
import { Route, Switch } from 'react-router';
import Message from './../message/message';
import Api from './../api/api';
import Login from './../login/login';

const Main = () => {
    return(
        <div>
            <div className={styles.container}>
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/chat' component={Message}/>
        <Route path='/data' component={Api}/>
    </Switch>
            </div>
        </div>
    )
}

export default Main;