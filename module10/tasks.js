// Задание 1.
// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). 
// При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.
const btn = document.querySelector('.j-btn-test');
const act = document.querySelector('.btn_icon');

btn.addEventListener('click', () => {
    act.classList.toggle('btn__show');
});



// Задание 2.
// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 
const btne = document.querySelector('.btn-width');
btne.addEventListener('click', () => {
    alert('Ваше разрешение экрана равно ' + screen.width + 'x' + screen.height);
});
