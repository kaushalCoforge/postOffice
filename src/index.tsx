import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./components/layout/index";


render(
 <Router>   
<App/>
</Router>, document.body);