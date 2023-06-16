import './style.css';
import displayHeader from './header.js';
import displayContent from "./content.js";
import displayFooter from "./footer.js";

document.body.appendChild(displayHeader());
document.body.appendChild(displayContent());
document.body.appendChild(displayFooter());
