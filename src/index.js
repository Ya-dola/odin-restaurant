import './style.css';
import displayHeader, {defaultLoad} from './header';
import displayContent from "./content";
import displayFooter from "./footer";

document.body.appendChild(displayHeader());
document.body.appendChild(displayContent());
document.body.appendChild(displayFooter());

document.addEventListener('DOMContentLoaded', defaultLoad);
