const body = document.querySelector('body');

const bodyInner = body.innerHTML;
body.innerHTML = `<section>${bodyInner}</section>`;

const section = document.querySelector('section');

let setOn = () => {};
let setOff = () => {};

setOn = () => {
    section.classList.add('on');
    setTimeout(setOff, 600);
};

setOff = () => {
    section.classList.remove('on');
    setTimeout(setOn, 600);
};

setTimeout(setOn, 600);