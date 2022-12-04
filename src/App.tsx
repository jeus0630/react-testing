import "./App.css";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "../src/components/mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode></MuiMode>
      </div>
    </AppProviders>
  )
}

export default App;
