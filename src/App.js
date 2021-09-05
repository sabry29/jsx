import logo from './logo.svg';
import './App.css';
import './style.css';
import photo from './halzi.jpg';
import video from './Sukuna.mp4';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxwidth:"100vw"}}>
      <h1 className="title red">Your name here</h1>
      <br />
        <img src={photo} />
      <br />
      <br />
        <img src="/dob.jpg" />
      </div>
        <video width={520} height={420} controls>
          <source src={video} type="video/mp4" />
        </video>
        
    </div>
  );
}

export default App;
