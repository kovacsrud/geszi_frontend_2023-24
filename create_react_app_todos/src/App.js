import Header from "./components/Header";
import Lista from "./components/Lista";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Header headerText={"React Alkalmazás"} headerSubText={"create-react-app"} />
      <Lista />
      <Posts />
      <Users />
      <Todos />
    
    </div>
     
  );
}

export default App;
