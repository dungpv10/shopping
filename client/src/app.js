import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/front-end/home";
import Shop from "./components/front-end/shop";
const App = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
    </div>
);

export default App;
