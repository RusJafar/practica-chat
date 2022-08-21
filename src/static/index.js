import Handlebars from 'handlebars';
import template from './index.tmpl';
import "../components";
import '../helpers'
import {chats} from '../mockData/chatsList'

const pageList = [
    {title: "Авторизация", link: "/src/pages/login.html"},
    {title: "Регистрация", link: "/src/pages/registration.html"},
    {title: "Список чатов", link: "/src/pages/chats.html"},
    {title: "Чат", link: "/src/pages/single-chat.html"},
    {title: "Профиль", link: "/src/pages/profile.html"},
    {title: "Страница 500", link: "/src/pages/500.html"},
    {title: "Страница 404", link: "/src/pages/404.html"},
]

if (window.location.href.includes('login')) {
    console.log('Login')
}

if (window.location.href.includes('registration')) {
    console.log('registration')
}

const pageHref = window.location.href;
if (pageHref.includes('chats') || pageHref.includes('single-chat')) {
    console.log('cats')
    const chatsTemplate = `
            {{#each chats as |chat|}}
                {{> messageListItem chat}}
            {{/each}}
    `;

    const chatHeader = `
    {{> singleChatHeader singleChatData}}
    <hr class="single-chat-header_hr">
    `;

    const singleChat = `
      {{#unless chats}}
        <div class="splash-screen w_100">
            Выберите чат чтобы отправить сообщение
        </div>
      {{/unless}}
      {{#each chats}}
        {{> singleChatMessageItem }}
      {{/each}}
    `;

    const messageInput = `
        <hr class="single-chat-header_hr">
        {{> singleChatMessageInput }}
    `;
    window.addEventListener('DOMContentLoaded', () => {
        const compileChatList = Handlebars.compile(chatsTemplate);
        document.getElementById('chatList').innerHTML = compileChatList({chats});

        const singleChatData = chats[0];
        const compileSingleChat = Handlebars.compile(singleChat);
        document.getElementById('singleChat').innerHTML = compileSingleChat({chats});

        const compileChatHeader = Handlebars.compile(chatHeader);
        document.getElementById('chatHeader').innerHTML = compileChatHeader({singleChatData});

        const compileMessageInput= Handlebars.compile(messageInput);
        document.getElementById('messageInput').innerHTML = compileMessageInput({singleChatData});
    });
}

// if(window.location.href.includes('single-chat')) {
//     console.log('single-chat');
//     const compile = Handlebars.compile(chatsTemplate);
//     document.getElementById('chatList').innerHTML = compile({chats});
// }






