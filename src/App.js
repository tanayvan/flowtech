import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contactus from "./screens/Contactus";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
    // setLoading(false);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contactus" exact>
              <Contactus />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
