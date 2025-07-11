import { createContext, useState } from "react";
import "./App.css";
import Playground from "./Playground/Playground";
import Startup from "./startup/Startup";
const DataContext = createContext({});
function App() {
  const [playerData, setPlayerData] = useState(null);
  
  return (
    <DataContext.Provider value={{ playerData, setPlayerData }}>
      {!playerData ? <Startup /> : <Playground />}
    </DataContext.Provider>
  );
}

export default App;
