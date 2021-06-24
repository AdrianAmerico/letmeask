import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import { AuthContextProvider } from "./contexts/AuthContextProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/new" component={NewRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
export default App;