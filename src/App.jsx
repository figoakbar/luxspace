import "./assets/css/app.css";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulations from "./pages/Congratulations";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/categories/:idc" component={Details} />
                <Route path="/categories/:idc/products/:idp" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/congratulations" component={Congratulations} />
                <Route path="*" component={NotFound} />
            </Switch>
            </Router>
        </div>
    );
}

export default App;
