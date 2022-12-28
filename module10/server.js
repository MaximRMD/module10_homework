const wsUri = "wss://echo-ws-service.herokuapp.com";

const btnSend = document.querySelector('.message__button');
const input = document.querySelector('.message__input');
const userMessages = document.querySelector('.message__user');
const wrappChat = document.querySelector('.message__text-block');
const btnGeo = document.querySelector('.message__geo');
console.log()

function writeToScreen(message, position = 'flex-end') {
    let element = `
        <p class='messages' style='align-self: ${position}'>
            ${message}
        </p>
    `;
    userMessages.innerHTML += element;
    wrappChat.scrollTop = wrappChat.scrollHeight;
}


let websocket = new WebSocket(wsUri);
websocket.onopen = function (evt) {
    console.log("CONNECTED");
};

websocket.onerror = function (evt) {
    writeToScreen(`Cервер: ${evt.data}`, 'flex-start');
    console.log(evt.data)
};

websocket.onmessage = function (evt) {
    console.log(evt.data);
    writeToScreen(`Cервер: ${evt.data}`, 'flex-start');
};

btnSend.addEventListener('click', () => {
    let message = input.value;
    websocket.send(message);
    writeToScreen(`Вы: ${message}`);
    input.value = ''
});



const error = () => {
    let textErr0r = 'Невозможно получить ваше местоположение';
    writeToScreen(textErr0r);
};

const success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    writeToScreen(`<a  href='${geoLink}' target='_blank'>Ваша гео-локация</a>`);
};



btnGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        console.log('Геолокация не поддерживается вашим браузером');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});