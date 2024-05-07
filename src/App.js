import "./App.css";
import gptlogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.jpg";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { getAnswer } from "./openAi";
import { useEffect, useRef, useState } from "react";

function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{
    text: "Hi, How can I help you?",
    isBot: true,
  }]);

  useEffect(() => {
    msgEnd.current.scrollIntoView({ behavior: "smooth" });
  },[messages] )
  
  const handleSend = async ()=>{
    const text = input; 
    setInput("");
    setMessages([
      ...messages,
      {
        text,
        isBot: false,
      }
    ])
    const res = await getAnswer(text);
    // console.log(res);
    setMessages([
      ...messages,
      {
        text,
        isBot: false,
      },
      {
        text: res,
        isBot: true,
      }
    ])
  }
  const handleEnter = async(e)=>{
    if(e.key === 'Enter'){
       await handleSend();
    }
  }
  const handleQuery = async(e)=>{
    const text = e.target.value; 
    setMessages([
      ...messages,
      {
        text,
        isBot: false,
      }
    ])
    const res = await getAnswer(text);
    // console.log(res);
    setMessages([
      ...messages,
      {
        text,
        isBot: false,
      },
      {
        text: res,
        isBot: true,
      }
    ])
  }
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptlogo} alt="ChatGPT Clone Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn" onClick={()=>{window.location.reload()}}>
            <img src={addBtn} alt="New Chat" className="addBtn" 
            /> New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query" onClick={handleQuery} value="What is Programming?">
              <img src={msgIcon} alt="Query" /> What is Programming?
            </button>
            <button className="query" onClick={handleQuery} value="How to use ChatGPT?">
              <img src={msgIcon} alt="Query"  /> How to use ChatGPT?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade Pro" className="listItemsImg" />
            Upgrade Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          {messages.map((message, index) => (
            <div className={message.isBot ? "chat bot" : "chat"} key={index}>
              <img
                src={message.isBot ? gptImgLogo : userIcon}
                alt="ChatGpt Logo"
                className="chatimg"
              />
              <p className="txt">{message.text}</p>
            </div>
          ))}
        </div>
        <div ref={msgEnd}></div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message..." value={input} onKeyDown={handleEnter}  onChange={(e) => setInput(e.target.value)} />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send a message" />
            </button>
          </div>
          <p>
            ChatGpt may produce inaccurate information about people, places,
            facts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
