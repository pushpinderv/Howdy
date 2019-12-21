import React, {useState} from 'react';
import './App.css';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import ChatWindow from './components/ChatWindow/ChatWindow';



function App() {
  const [mode, setMode] = useState('web');
  return (
    <div className="App">
          <ContactsWindow />
          <ChatWindow />

    </div>
  );
}

export default App;
