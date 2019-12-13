import React from 'react';
import './App.css';
import ContactsWindow from './components/ContactsWindow/ContactsWindow';
import ChatWindow from './components/ChatWindow/ChatWindow';



function App() {
  return (
    <div className="App">
          <ContactsWindow />
          <ChatWindow />
          
          {/*<ChatSearch />
          <Navigation />
          <ChatsList />'
          '
          <ContactDetailBar />
          <ContactConversationList />
          <SendMessageBar />*/}
    </div>
  );
}

export default App;
