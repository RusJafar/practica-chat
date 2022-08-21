import Handlebars from 'handlebars';
// import template from "./index.tmpl";

console.log("Hello");

const persons = [
    {name: "Nils", age: 20},
    {name: "Teddy", age: 10},
    {name: "Nelson", age: 40},
    {name: "Nelson", age: 40}
]

Handlebars.registerPartial(
    "person",
    "{{person.name}} is {{person.age}} years old.\n"
)
//
const template1 = `
<div>
 {{#each persons}}
        {{>person person=.}}
  {{/each}}
</div>
`

window.addEventListener('DOMContentLoaded', () => {

    const compile = Handlebars.compile(template1);
    document.getElementById('appw').innerHTML = compile({persons});
});
