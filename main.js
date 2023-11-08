
// const data = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
const API_URL = 'https://fhu-faculty-api.netlify.app/fhu-faculty.json';
const addButton = document.getElementById("add");
const likeButton = document.getElementById("like");
const cardsAllowed = document.getElementById("cards-in-list");
const icon = document.querySelector(".fa-solid");
const heartButton = document.querySelector(".fa-heart");
const userCardContainer = document.querySelector(".user-cards");
let activeIndex = Math.floor(59/2);

let userCards = [];

let backgroundColors = {
    "Mathematics" : "to-blue-950",
    "Science" : "to-emerald-900",
    "Computer Science" : "to-green-800",
    "Engineering" : "to-sky-900",
    "Bible" : "to-purple-950",
    "Political Science" : "to-gray-800",
    "Business" : "to-cyan-400",
    "Buisness" : "to-cyan-400",
    "Marketing" : "to-cyan-400",
    "Theatre" : "to-yellow-300",
    "Sociology" : "to-pink-900",
    "Photography" : "to-red-400",
    "History" : "to-stone-500",
    "Cybersecurity" : "to-red-950",
    "Nursing" : "to-indigo-950",
    "Education" : "to-yellow-200",
    "Law" : "to-fuchsia-950",
    "Spanish" : "to-orange-700",
    "English" : "to-amber-600",
    "Spanish Education" : "to-orange-700",
    "Graphic Design" : "to-emerald-300",
    "Choral Music" : "to-lime-800",
    "Communications" : "to-cyan-400",
    "Psychology" : "to-fuchsia-800",
    "Academics" : "to-yellow-200",
    "Kinesiology" : "to-red-800",
    "Biochemistry" : "to-emerald-900",
    "Music" : "to-lime-800",
    "" : "to-zinc-500",
    "Philosophy" : "to-purple-950"
  }



const carousel = document.getElementsByClassName("carousel")[0];


async function addCards() {

    let response = await fetch(API_URL);
    let data = await response.json();

    
    data.forEach( (item, index) => {

      let div = document.createElement('div');
      div.classList.add("box");
    
        div.innerHTML = `
        <div
          class="card border-2 relative shadow-2xl bg-gradient-to-br from-neutral-900 ${backgroundColors[item.FieldofStudy]} h-full w-full"
        >
          <div class="square w-5 h-5 absolute top-0 left-0"></div>
          <div class="square w-5 h-5 absolute top-0 right-0"></div>
          <div class="square w-5 h-5 absolute bottom-0 left-0"></div>
          <div class="square w-5 h-5 absolute bottom-0 right-0"></div>
          <div class="line w-full h-1 absolute top-4 left-0"></div>
          <div class="line w-full h-1 absolute bottom-4 left-0"></div>
          <div class="line h-full w-1 absolute left-4 top-0"></div>
          <div class="line h-full w-1 absolute right-4 top-0"></div>
          <div class="line h-full w-1 absolute left-4 top-0"></div>
    
          <div
            class="triangle-container relative m-5 bg-gradient-to-br from-neutral-900 ${backgroundColors[item.FieldofStudy]} m-2"
          >
            <div class="triangle-right-top"></div>
            <div class="triangle-left-top"></div>
            <div class="triangle-left-bottom"></div>
            <div class="triangle-right-bottom"></div>
            <div class="image flex flex-col items-center mt-2 border-b-4 w-full">
              <img
                class="w-1/2 border-l-4 border-r-4"
                src="https://fhu-faculty-api.netlify.app/images/headshots/${item.Image}"
                alt="${item.FirstName} ${item.LastName}"
              />
            </div>
            <div class="name-container flex flex-col items-center ml-2">
              <h2 class="font-main text-xs text-gray-300">
              ${item.NickName} | ${item.Type} | ${item.Rank} | ${item.EducationLevel}
              </h2>
              <h1 class="font-main text-xl font-bold text-gray-200 mt-2">
                ${item.FirstName} ${item.LastName}
              </h1>
            </div>
    
            <div class="attack-container mt-2 relative ml-2">
              <div class="flex items-center justify-between">
                <h1 class="font-main text-md text-gray-200 font-bold">
                ${item.Attack1}
                </h1>
                <h1 class="font-main text-gray-200 text-sm mr-2">
                ${item.Attack1Damage}
                </h1>
              </div>
              <div class="flex items-center justify-between mt-4">
                <h1 class="font-main text-md text-gray-200 font-bold">
                ${item.Attack2}
                </h1>
                <h1 class="font-main text-gray-200 text-sm mr-2">
                ${item.Attack2Damage}
                </h1>
              </div>
            </div>
    
    
            <div class="weakness-container grid grid-cols-2 mt-2 relative h-20 ml-2">
              <div class="col-start-1">
                <h1 class="font-main text-md text-gray-200 font-bold">
                  Resistances
                </h1>
                <h2 class="font-main text-gray-300 text-sm">${item.Resistances}</h2>
              </div>
              <div class="col-start-2 border-l-4 border-white px-3"">
    
                <h1 class="font-main text-md text-gray-200 font-bold">
                  Weaknesses
                </h1>
                <h2 class="font-main text-gray-300 text-sm">${item.Weaknesses}</h2>
              </div>
            </div>
    
            <div class="stats-numbers-container flex justify-between items-center p-2 border-b-4 min-h-full">
            <h1 class="font-main text-xs text-gray-200 font-bold">
            <id class="text-lg"> ${item.HitPoints}</id>  <id class="text-gray-300 text-xs">HP</id>
            </h1>
            <h1 class="font-main text-xs text-gray-200 font-bold">
            <id class="text-lg"> ${item.DamageType}</id>   <id class="text-gray-300 text-xs">Damage</id>
            </h1>
            <h1 class="font-main text-xs text-gray-200 font-bold">
            <id class="text-lg"> ${item.Stamina}</id>   <id class="text-gray-300 text-xs">Stamina</id>
            </h1>
            </div>
    
    
    
            <h1 class="font-main text-gray-400 text-right text-xs mr-12 py-1 min-h-full">
            ${item.HashTag}
            </h1>
    
            <div class="line w-full h-1 absolute bottom-0 left-0"></div>
            
          </div>`
    
        carousel.appendChild(div);

        updateCards();

        
    
    });
}

function updateCards() {

  var windowWidth = window.innerWidth;
  console.log(windowWidth);
  const length = 59;

  const boxes = document.querySelectorAll(".carousel .box");
  
  boxes.forEach( (div, index) => {
  
      if( index < activeIndex){
          div.classList.remove("active");
          
          div.style.zIndex = index;
          const offset = 100+(length-index);
          div.style.transform = `translateX(-${offset}%) scale(100%)`;
         
      }
      else if(index === activeIndex)
      {
          div.classList.add("active");
          div.style.zIndex = 300;
          div.style.transform = `translateX(0) scale(120%)`;

      }
      else {
          div.classList.remove("active");
          div.style.zIndex = (length - index);
          const offset = 100+(index);
          div.style.transform = `translateX(${offset}%) scale(100%)`;

      }
  });

}

addCards();

async function renderUserCards(){
  let div = document.createElement('div');
  userCards.forEach((item, index) => {
    div.innerHTML = `
    <div
      class="card border-2 relative shadow-2xl bg-gradient-to-br from-neutral-900 ${backgroundColors[item.FieldofStudy]} h-full"
    >
      <div class="square w-5 h-5 absolute top-0 left-0"></div>
      <div class="square w-5 h-5 absolute top-0 right-0"></div>
      <div class="square w-5 h-5 absolute bottom-0 left-0"></div>
      <div class="square w-5 h-5 absolute bottom-0 right-0"></div>
      <div class="line w-full h-1 absolute top-4 left-0"></div>
      <div class="line w-full h-1 absolute bottom-4 left-0"></div>
      <div class="line h-full w-1 absolute left-4 top-0"></div>
      <div class="line h-full w-1 absolute right-4 top-0"></div>
      <div class="line h-full w-1 absolute left-4 top-0"></div>
  
      <div
        class="triangle-container relative m-5 bg-gradient-to-br from-neutral-900 ${backgroundColors[item.FieldofStudy]} m-2"
      >
        <div class="triangle-right-top"></div>
        <div class="triangle-left-top"></div>
        <div class="triangle-left-bottom"></div>
        <div class="triangle-right-bottom"></div>
        <div class="image flex flex-col items-center mt-2 border-b-4 w-full">
          <img
            class="w-2/3 border-l-4 border-r-4"
            src="https://fhu-faculty-api.netlify.app/images/headshots/${item.Image}"
            alt="${item.FirstName} ${item.LastName}"
          />
        </div>
        <div class="name-container flex flex-col items-center ml-2">
          <h2 class="font-main text-md text-gray-300">
          ${item.NickName} | ${item.Type} | ${item.Rank} | ${item.EducationLevel}
          </h2>
          <h1 class="font-main text-2xl font-bold text-gray-200 mt-2">
            ${item.FirstName} ${item.LastName}
          </h1>
        </div>
  
        <div class="attack-container mt-2 relative ml-2">
          <div class="flex items-center justify-between">
            <h1 class="font-main text-lg text-gray-200 font-bold">
            ${item.Attack1}
            </h1>
            <h1 class="font-main text-gray-200 text-md mr-2">
            ${item.Attack1Damage}
            </h1>
          </div>
          <div class="flex items-center justify-between mt-4">
            <h1 class="font-main text-lg text-gray-200 font-bold">
            ${item.Attack2}
            </h1>
            <h1 class="font-main text-gray-200 text-md mr-2">
            ${item.Attack2Damage}
            </h1>
          </div>
        </div>
  
  
        <div class="weakness-container grid grid-cols-2 mt-2 relative h-20 ml-2">
          <div class="col-start-1">
            <h1 class="font-main text-lg text-gray-200 font-bold">
              Resistances
            </h1>
            <h2 class="font-main text-gray-300 text-md">${item.Resistances}</h2>
          </div>
          <div class="col-start-2 border-l-4 border-white px-3"">
  
            <h1 class="font-main text-lg text-gray-200 font-bold">
              Weaknesses
            </h1>
            <h2 class="font-main text-gray-300 text-md">${item.Weaknesses}</h2>
          </div>
        </div>
  
        <div class="stats-numbers-container flex justify-between items-center p-2 border-b-4 min-h-full">
        <h1 class="font-main text-md text-gray-200 font-bold">
        <id class="text-lg"> ${item.HitPoints}</id>  <id class="text-gray-300 text-sm">HP</id>
        </h1>
        <h1 class="font-main text-md text-gray-200 font-bold">
        <id class="text-lg"> ${item.DamageType}</id>   <id class="text-gray-300 text-sm">Damage</id>
        </h1>
        <h1 class="font-main text-md text-gray-200 font-bold">
        <id class="text-lg"> ${item.Stamina}</id>   <id class="text-gray-300 text-sm">Stamina</id>
        </h1>
        </div>
  
  
  
        <h1 class="font-main text-gray-400 text-right text-sm mr-12 py-1 min-h-full">
        ${item.HashTag}
        </h1>
  
        <div class="line w-full h-1 absolute bottom-0 left-0"></div>
        
      </div>`

    userCardContainer.appendChild(div);

    cardsAllowed.innerHTML = userCards.length;
    
  })

}

async function addCard(){
  let response = await fetch(API_URL);
  let data = await response.json();

  if (userCards.some(userCard => userCard.FirstName === data[activeIndex].FirstName) || userCards.length > 8){
    return;
  }
  else{
    userCards.push(data[activeIndex]);
  }

  renderUserCards();
}

window.addEventListener("resize", updateCards);


document.getElementById("prevButton").addEventListener("click", ()=>{
  if( activeIndex >= 0)
  {
      activeIndex--;
      updateCards();
  }

});

document.getElementById("nextButton").addEventListener("click", ()=>{
  if( activeIndex < 59)
  {
      activeIndex++;
      updateCards();
  }
});

addButton.addEventListener("click", () => {
    addCard();

})
