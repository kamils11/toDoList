const ball = document.querySelector('.ball');
const switchMode = document.querySelector('.switch');
let isClicked = false;

const toggleImg = (img, mode) => {
    setTimeout(() => {
        ball.innerHTML = `<img  src="${img}" width="15" height="15" alt="${mode}">`
    }, 300);

};
const changeMood = (method) => {
    const domItems = [
        "body",
        "button",
        "buttons",
        "input",
        "header"
    ];
    const darkMod=()=>{
        domItems.forEach(domObject => {
            document.querySelector(`.${domObject}`).classList.add(`${domObject}--darkMode`);
        });
        document.querySelectorAll('.section').forEach(section=>{
            section.classList.add(`section--darkMode`);
        })
    }
    const brightMod=()=>{
        domItems.forEach(domObject => {
            document.querySelector(`.${domObject}`).classList.remove(`${domObject}--darkMode`);
        });
        document.querySelectorAll('.section').forEach(section=>{
            section.classList.remove(`section--darkMode`);
        })
    }
  
    isClicked ? darkMod():brightMod();

};
ball.innerHTML = '<img src="img/sun-svgrepo-com.svg" width="15" height="15" alt="bright-mode">'
switchMode.addEventListener('click', () => {
    if (!isClicked) {
        ball.classList.add('ballT');
        toggleImg("img/half-moon-svgrepo-com.svg", "dark-mode");
        isClicked = !isClicked;
        setTimeout(changeMood,300)
    }
    else {
        ball.classList.remove('ballT');
        toggleImg("img/sun-svgrepo-com.svg", "bright-mode");
        isClicked = !isClicked;
        setTimeout(changeMood,300)
    };
});

