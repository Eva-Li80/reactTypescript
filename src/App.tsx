
import Header from "./Components/Header";
import Side from "./Components/Side";
import TextToAlert from "./Components/TextToAlert";
import TextToDisplay from "./Components/TextToDisplay";
import "./Styles/main.scss"
import MouseEvent from "./Components/MouseEvent";
import Text from "./Components/Text";
import Addition from "./Components/Addition";
import Colorbox from "./Components/Colorbox";
import ChangeText from "./Components/ChangeText";
import List from "./Components/List"
import QuestList from "./Components/QuestList";
import PersonLista from "./Components/PersonLista";
import Konstnärer from "./Components/Konstnärer";
import PizzaCalulator from "./Components/PizzaCalulator";
import PrettyText from "./Components/PrettyText";
import Counterusereduser from "./Components/Counterusereducer"
import PizzaDetails from "./Components/PizzaDetails";

function App() {
  return (
    <>
      <div className="app">
        <Header title="Header" level={5}>
          <h3>children: <i>kan lägga till något här</i></h3>
        </Header>
        <Counterusereduser/>
        <QuestList/>
        <Konstnärer/>
        <PersonLista/>
        <TextToAlert/>
        <TextToDisplay/>
        <MouseEvent/>
        <Text/>
        <Addition/>
        <Colorbox/>
        <ChangeText/>
        <List/>
        <PizzaDetails/>
        <PizzaCalulator/>
        <PrettyText/>
      </div>
    </>
  );
}

export default App;
