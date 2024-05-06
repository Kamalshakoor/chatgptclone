import "./App.css";
import gptlogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptlogo} alt="ChatGPT Clone Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="New Chat" className="addBtn" /> New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" /> What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" /> How to use ChatGPT?
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
          <div className="chat">
            <img src={userIcon} alt="User" className="chatimg" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              sequi quaerat. Corrupti suscipit labore quidem illo eaque
            </p>
          </div>
          <div className="chat bot">
            <img src={gptImgLogo} alt="ChatGpt Logo" className="chatimg" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              sequi quaerat. Corrupti suscipit labore quidem illo eaque,
              quisquam voluptatibus obcaecati, hic amet debitis quas numquam
              cupiditate sapiente nulla neque illum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolor, sequi quaerat. Corrupti
              suscipit labore quidem illo eaque, quisquam voluptatibus
              obcaecati, hic amet debitis quas numquam cupiditate sapiente nulla
              neque illum.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message..." />{" "}
            <button className="send">
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
