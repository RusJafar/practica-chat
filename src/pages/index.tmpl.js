export default `
<h1>Список страниц</h1>
 <ul>
    {{#each pageList}}
    <li><a href="{{link}}" alt="">{{title}}</a></li>
    {{/each}}
 </ul>
`