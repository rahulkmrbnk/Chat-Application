import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
          height="100vh"
          projectID="1ebc684a-3701-4e91-8a72-fa9f3438a24b"
        //   userName="Ashu3112"
        //   userSecret="Ashu1234@"
        userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/> }
        />
    );
}

export default App;