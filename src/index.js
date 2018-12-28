import React from "react";
import htm from "htm";
const html = htm.bind(React.createElement);
import Loadable from 'react-loadable';

import {render} from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
__webpack_public_path__ = "./dist/";

const Header = props => html`<header ...${props} />`;
const Footer = props => html`<footer ...${props} />`;

class Loader extends React.Component {
    render() {
        const root = (() => {
            switch (this.props.location.pathname) {
                case "/": return "Cms";
                case "/product": return "Product";
                default: return "Cms";
            }
        })();
        const L = Loadable({
            loader: (props, props1) => {
                return import(/* webpackChunkName: "[request]_root" */`./roots/${root}`).then(x => {
                    console.log('has register?', x.register);
                    return new Promise(done => setTimeout(() => done(x), 1000));
                });
            },
            loading() {
                return html`<h1>Loading...</h1>`
            }
        })
        return html`<${L} />`
    }
}

render(html`
<${Router}>
    <main>
        <${Header}>Header content here<//>
        <${Route} component=${Loader} />
        <ul>
        <li><${Link} to="/">Home<//></li>
        <li><${Link} to="/cms">CMS page<//></li>
        <li><${Link} to="/product">Product Page<//></li>
        <li><${Link} to="/none">none<//></li>
        </ul>
        <${Footer}>Footer content here<//>
    </main>    
<//>
`, document.getElementById("app"));
