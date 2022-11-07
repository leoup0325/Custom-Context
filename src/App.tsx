import Count from "./Components/Count";
import "./App.css";
import { SettingsContextProvider } from "./hooks/useSettingsContext";

function App() {
  return (
    <div className="App">
      <SettingsContextProvider>
        <Count />
      </SettingsContextProvider>
    </div>
  );
}

export default App;
