const basketTotal = document.getElementById("basket-total");
const imageGallery = document.querySelector(".image-gallery");
const clear = document.getElementById("clear");
const Statistic = document.getElementById("statistic");

if(localStorage.getItem("log-in") != "true") 
  {
    window.location.href = "./login.html";
    alert("To place an order, log in to your profile!")
  }


let barColors = [
  "rgba(0,0,255,0.5)",
  "rgba(255,0,255,0.5)",
  "rgba(255,0,0,0.5)",
  "rgba(0,255,255,0.5)",
  "rgba(0,255,0,0.5)",
  "rgba(0,205,255,0.5)",
  "rgba(0,205,255,0.5)",
];


const images = [
  {
    url: "images/buket_roze.png",
      description: "Літній букет Розе",
      hover_url: 'images/buket_roze_hover.jpg',
      price: 2750
      
    },

    {
      url: "images/sen_bon.png",
      description: "Літній букет Сен-Бон",
      hover_url: 'images/sen_bon_hover.jpg',
      price: 3950
      
    },
    {
      url: "images/pelermo.png",
      description: "Літній букет Палермо",
      hover_url: 'images/pelermo_hover.jpg',
      price: 3550

    },
    {
      url: "images/lalin.png",
      description: "Букет із гортензією Лалін ",
      hover_url: 'images/lalin_hover.jpg',
      price: 7500

    },
    
    {
      url: "images/kyiv.png",
      description: "Букет з гортензією Київ",
      hover_url: 'images/kyiv_hover.jpg',
      price: 5500

      
    },
    {
      url: "images/la_foli.png",
      description: "Букет із гортензією Ла-Фолі",
      hover_url: 'images/la_foli_hover.jpg',
      price: 6800

    },

    {
      url: "images/anje.png",
      description: "Букет півоній Анже",
      hover_url: 'images/anje_hover.jpg',
      price: 9700
      
    },
    
  ];

  

  let arrayCard = images.map(elem => {return {description: elem.description, amount: 0}});
  
  function renderImages(images) {
    imageGallery.innerHTML = "";
    for (let i = 0; i < images.length; i++) {
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");
  
      const image = document.createElement("img");
      image.src = images[i].url;
      image.alt = images[i].description;
  
      const hoverImg = document.createElement("img");
      hoverImg.src = images[i].hover_url;
      hoverImg.alt = images[i].description;
      hoverImg.classList.add("hover-image");
  
      const imageDescription = document.createElement("div");
      imageDescription.classList.add("image-description");
      imageDescription.textContent = images[i].description + ' - ' + images[i].price + ' UAH';
  
      imageCard.appendChild(image);
      imageCard.appendChild(hoverImg);
      imageCard.appendChild(imageDescription);
      hoverImg.style.display = "none";
  
      imageCard.addEventListener("mouseenter", function() {
        image.style.display = "none";
        hoverImg.style.display = "block";
      });
  
      imageCard.addEventListener("mouseleave", function() {
        image.style.display = "block";
        hoverImg.style.display = "none";
      });
  
      imageCard.addEventListener("click", () => {
        const price = images[i].price;
        const currentTotal = parseInt(basketTotal.textContent);
        basketTotal.textContent = currentTotal + price + " UAN";
        document.getElementById('statistic').style.display = 'inline';
        arrayCard[i].amount++;
      });
  
      imageGallery.appendChild(imageCard);
    }
  }
  
  renderImages(images);  
  
  clear.addEventListener("click", () => {
    const currentTotal = parseInt(basketTotal.textContent);
    basketTotal.textContent = currentTotal - currentTotal + " UAN";

    for(let i = 0; i < 7; i++)
    {
    arrayCard[i].amount = 0; 

    }

    document.getElementById('statistic').style.display = 'none';
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('myBar').style.display = 'none';
    document.getElementById('myRadar').style.display = 'none';
  });
  

function sortByName() {
    images.sort((a, b) => a.description.localeCompare(b.description));
    renderImages(images);
  }
  
  function sortByPrice() {
    images.sort((a, b) => a.price - b.price);
    renderImages(images);
  }

  function handleSortChange() {
    const select = document.getElementById("sortSelect");
    const selectedValue = select.value;
    if (selectedValue === "name")  sortByName(); 
    if (selectedValue === "price") sortByPrice();
    
  }
  

  
function displayCart(){

  new Chart("myChart", {
    type: "pie",
    data: {
        labels: arrayCard.map(x => x.description),
        datasets: [{
            backgroundColor: barColors,
            data: arrayCard.map(x => x.amount)
        }]
    },
    options: {
        title: {
            display: true,
            text: "Statistic"
        }
    }
});
}

function displayCartBar(){

  new Chart("myBar", {
    type: "bar",
    data: {
        labels: arrayCard.map(x => x.description),
        datasets: [{
            backgroundColor: barColors,
            data: arrayCard.map(x => x.amount)
        }]
    },
    options: {
        title: {
            display: true,
            text: "Statistic"
        }
    }
});
}

function displayCartRadar(){

  new Chart("myRadar", {
    type: "radar",
    data: {
        labels: arrayCard.map(x => x.description),
        datasets: [{
            backgroundColor: barColors,
            data: arrayCard.map(x => x.amount)
        }]
    },
    options: {
        title: {
            display: true,
            text: "Statistic"
        }
    }
});
}

const scrollToTopButton = document.getElementById('scroll-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > (window.innerHeight * 2) / 3) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function handleSelectStatistic() {
  const select = document.getElementById("SelectStatistic");
  const selectedValue = select.value;
  if (selectedValue === "pie") 
  {

    document.getElementById('myBar').style.display = 'none';
    document.getElementById('myRadar').style.display = 'none';
    document.getElementById('myChart').style.display = 'flex';
        displayCart();
  }
  if (selectedValue === "bar") 
  {
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('myRadar').style.display = 'none';
    document.getElementById('myBar').style.display = 'flex';
    displayCartBar();
  }
  if (selectedValue === "radar") 
  {
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('myBar').style.display = 'none';
    document.getElementById('myRadar').style.display = 'flex';
    displayCartRadar();

  }
  
}