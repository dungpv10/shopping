import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/front-end/home";
import Shop from "./components/front-end/shop";
import Wishlist from "./components/front-end/wistlist";
import Contact from "./components/front-end/contact";
import Login from "./components/front-end/login";
import Cart from "./components/front-end/cart";
import News from "./components/front-end/news";
import NewsDetail from "./components/front-end/news_detail";

const App = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/lien-he" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/gio-hang" component={Cart} />
        <Route exact path="/tin-tuc" component={News} />
        <Route exact path="/tin-tuc/:slug" component={NewsDetail} />
        <Route path={"/admin"}>
                <Route exact path={"/"} component={Shop} />
        </Route>
    </div>
);

export default App;
