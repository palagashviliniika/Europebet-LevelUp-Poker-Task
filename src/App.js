import React, {useState} from "react"
import Modal from "./Components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="App">
      <h1>Poker Legends Malta</h1>
      <button 
        className="border-solid border-2 border-sky-500 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        Open Popup
      </button>
      
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Popup goes here!
      </Modal>
    </div>
  );
}

export default App;
