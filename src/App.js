import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import AddItem from "./Forms/Add";
import SellItem from "./Forms/Sell";
import StockReport from "./Reports/StockReport";
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* //<Footer /> */}
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/addItem">
            <AddItem/>
          </Route>
          <Route path="/sellItem">
          <SellItem/>
          </Route>
          <Route path="/stock">
          <StockReport/>
          </Route>
      </Router>
    </div>
  );
}

export default App;