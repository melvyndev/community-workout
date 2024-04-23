import logo from './logo.svg';
import './App.css';
import { Session } from '@talkjs/react';
import { Chatbox } from '@talkjs/react';
function App() {
  return (
    <div className="App">

      <Session appId="tG0jGkE3" userId="sample_user_alisce">

      <Chatbox
  conversationId="sample_group_chat"
  style={{ width: '100%', height: '500px' }}
></Chatbox>

      </Session>

    </div>
  );
}

export default App;
