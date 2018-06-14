const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const submit = document.getElementById("submit")
const dot = /(\w+\.\w+@)/gi
const dog = /[@]/
const regWithUpperCase = /[A-Z]+/g

const sendYoubike = document.getElementById("send-youbike");

setInterval(() => {
  document.getElementsByClassName("body")[0].style.fontSize = "16px";
  setTimeout(() => {
    document.getElementsByClassName("body")[0].style.fontSize = "14px";
  },500);
}, 10000)


const fakeEmails = [
  'katerina93@bigmir.net',
  'pushok@gmail.com',
  'sergey89@meta.ua',
  'olya.polyakova@gmail.com',
  'info-star@bigmir.net',
  'mango777@gmail.com',
  'maksimus-velikiy@ukr.net',
  'vitalina777@ukr.net',
  'dmitry@yahoo.com',
  'jorik_krutoy@rambler.ru',
  'paul@gmail.com',
  'veronika-ka-ka@gmail.com',
  'olga-olgeshka@ukr.net',
  'buryak@gmail.com',
  'brokoli@meta.ua',
]

const fakeNames = [
  'Paul',
  'Vitalina',
  'Katerina',
  'Sergey',
  'Maksim',
  'Slava',
  'Darusya',
  'Olya',
  'Olga',
  'Emil',
  'Svetulya',
  'Zayka',
  'Miroslava',
  'Alexandro',
  'Yaroslav',
  'Elizavetka-konfetka',
]

let randEmail = Math.floor(Math.random() * fakeEmails.length);
let randName = Math.floor(Math.random() * fakeNames.length);

submit.addEventListener("click", () => {
  let validateEmail = email.value
  let validatePassword = password.value;
  if(firstName.value && email.value && password.value) {
    if(!validateEmail.match(dog) || validateEmail.match(dot) || validatePassword.match(regWithUpperCase) || !sendYoubike.checked || (password.value != confirmPassword.value)) {
      alert(`Ошибка регистрации, возможно ваша почта ` + fakeEmails[randEmail])
      location.reload();
    } else {
      alert(`Регистрация прошла успешно ` + fakeNames[randName])
      location.reload();
    }
  } else {
    alert("Заполните все поля")
  }

})

document.getElementById("meuYoubike").addEventListener("click", () => {
  alert("this is Meu YouBike")
})
document.getElementById("vender").addEventListener("click", () => {
  alert("this is Vender")
})
document.getElementById("forum").addEventListener("click", () => {
  alert("this is Forum")
})
document.getElementById("contato").addEventListener("click", () => {
  alert("this is Contato")
})
document.getElementById("ajuda").addEventListener("click", () => {
  alert("this is Ajuda")
})

document.getElementById("contato").addEventListener("hover", () => {
  document.getElementById("meuYoubike").style.display = 'none'
})