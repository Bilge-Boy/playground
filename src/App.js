import logo from './logo.svg';
import './App.css';
import Initials from './Initials/Initials';
import DayOfWeek from './DayOfWeek/DayOfWeek';
import Article from './Article/Article';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import Counter from './Counter/Counter';
import StudentPicker from './StudentPicker';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';


function App() {

  function clickHandler(){
    alert("you clicked");
  }

  return (
    <div>

      <Menu>
        <MenuItem label ="Netflix" link = "https://www.NETFLIX.com/" />
        <MenuItem label ="Whatsapp" link = "https://www.WHATSAPP.com/" />
        <MenuItem label ="Facebook" link = "https://www.FACEBOOK.com/" />
        <MenuItem label ="Instagram" link = "https://www.INSTAGRAM.com/" />
        
      </Menu>

      <RandomColorSquare />
      {/* <StudentPicker/>
      <button onClick={clickHandler}>Click ME</button>
      <Counter /> */}
      {/* <Menu>
        <MenuItem label="Homepage" link="/" />
        <MenuItem label="Gallery" link="/gallery" />
        <MenuItem label="Contact" link="/contact"/>
      </Menu>
      <Initials name="Michael Baliasny" />
      <Initials name="Tali Tzemering" />
      <DayOfWeek num = {0} />
      <Article title = "Students" content= "hello country" /> */}
    </div>
  );
}

export default App;
