let users = [
  { id: 1,
    nombre: "Eduardo",
    apellido: "Calderón",
    correo: "edcal@mail.com",
    telefono: "999 999 999",
    pais: "Perú",
    url_img: "./img",
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quidem distinctio numquam voluptates nisi dolor quo."
  },
  { id: 2,
    nombre: "Luis",
    apellido: "Perez",
    correo: "luperez@mail.com",
    telefono: "989 898 989",
    pais: "México",
    url_img: "",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum deleniti exercitationem rem, ea aliquid nihil recusandae facili." 
  },
  { id: 3,
    nombre: "José",
    apellido: "Alvarez",
    correo: "joalvarez@mail.com",
    telefono: "967 676 767",
    pais: "Colombia",
    url_img: "",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum deleniti exercitationem rem, ea aliquid nihil recusandae facili." 
  },
  { id: 4,
    nombre: "Luis",
    apellido: "Perez",
    correo: "luperez@mail.com",
    telefono: "989 898 989",
    pais: "México",
    url_img: "",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum deleniti exercitationem rem, ea aliquid nihil recusandae facili." 
  },
]

let cardContainer = document.querySelector(".card__container")

function indexListCard(users){
  for(let i = 0; i < users.length; i++){
    createCardUser(users[i]);
    console.log('v')
  }
  // return list.forEach(user => {
}

indexListCard(users)


function addUser(){
  
  newUser = {}
  newUser.id = users.length + 1
  newUser.nombre = document.getElementById('userForm__name').value
  newUser.apellido = document.getElementById('userForm__lastname').value
  newUser.correo = document.getElementById('userForm__mail').value
  newUser.telefono = document.getElementById('userForm__phone').value
  newUser.pais = document.getElementById('userForm__country').value
  newUser.url_img = document.getElementById('userForm__url').value
  newUser.descripcion = document.getElementById('userForm__description').value

  users.push(newUser);
  createCardUser(newUser);
  
  document.getElementById('userForm__name').value = ""
  document.getElementById('userForm__lastname').value = ""
  document.getElementById('userForm__mail').value = ""
  document.getElementById('userForm__phone').value = ""
  document.getElementById('userForm__country').value = ""
  document.getElementById('userForm__url').value = ""
  document.getElementById('userForm__description').value = ""

}

document.getElementById('userForm__btn').addEventListener('click', function(){
  addUser();
  console.log(users);
})

function createCardUser(user){
  let card = document.createElement('div')
  card.className = "card"
  card.id = user.id - 1 
  card.innerHTML = `
    <figure class="card__figure">
      <img class="card__img" src="img/avatar-default.png" alt="">
    </figure>
    <p class="card__name">${user.nombre} ${user.apellido}</p>
    <p>${user.telefono} | ${user.correo}</p>
    <p class="card__country">${user.pais}</p>
    <p class="card__description">${user.descripcion}</p>
    <div class="card__action">
        <i class="fas fa-pen"></i>
      <span class="card__action__text">Edit</span>
    </div>
    <div class="card__action card__action--right">
      <i class="fas fa-times"></i>
      <span class="card__action__text">Delete</span>
    </div>
  `
  cardContainer.appendChild(card)
}

// console.log(document.querySelectorAll('.userForm__input'.tagName))

//*************************************
// Abrir Modal 
//***************************************
let btnOpen = document.getElementById('js_btnOpen')
let btnClose = document.getElementById('userForm__btn-cancelar')

btnOpen.addEventListener('click', function(){
  document.querySelector('.modal__wrapper').classList.add("modal__visibility")  
})

btnClose.addEventListener('click', function(){
  document.querySelector('.modal__wrapper').classList.remove("modal__visibility")
});


/***************************************
 * Capturing
**************************************/
cardContainer.addEventListener('click', function(e){
  console.log(e);
}, true)
