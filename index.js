import Handlebars from 'handlebars';
import template from './index.tmpl';
import "./src/components/";

window.addEventListener('DOMContentLoaded', () => {
    const compile = Handlebars.compile(template)
    document.getElementById('app').innerHTML = compile({content: "Список страниц"});
});



