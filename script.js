  

const imageGallery = document.querySelector(".image-gallery");


const images = [
  {
    url: "images/buket_roze.png",
      description: "Літній букет Розе",
      hover_url: 'images/buket_roze_hover.jpg'
      
    },

    {
      url: "images/sen_bon.png",
      description: "Літній букет Сен-Бон",
      hover_url: 'images/sen_bon_hover.jpg'
      
    },
    {
      url: "images/pelermo.png",
      description: "Літній букет Палермо",
      hover_url: 'images/pelermo_hover.jpg'

    },
    {
      url: "images/lalin.png",
      description: "Букет із гортензією Лалін ",
      hover_url: 'images/lalin_hover.jpg'

    },
    
    {
      url: "images/kyiv.png",
      description: "Букет з гортензією Київ",
      hover_url: 'images/kyiv_hover.jpg'

      
    },
    {
      url: "images/la_foli.png",
      description: "Букет із гортензією Ла-Фолі",
      hover_url: 'images/la_foli_hover.jpg'

    },

    {
      url: "images/anje.png",
      description: "Букет півоній Анже",
      hover_url: 'images/anje_hover.jpg'
      
    },
    
  ];

  
  images.slice(0, 4).forEach(imageData => {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");

    const image = document.createElement("img");
    image.src = imageData.url;
    image.alt = imageData.description;

    const hoverImg = document.createElement("img");
    hoverImg.src = imageData.hover_url;
    hoverImg.alt = imageData.description;
    hoverImg.classList.add("hover-image");
    
    const imageDescription = document.createElement("div");
    imageDescription.classList.add("image-description");
    imageDescription.textContent = imageData.description;

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

    imageGallery.appendChild(imageCard);
});

  function loadMore() {
    
    document.querySelector(".load-buttons button").style.display = "none";
    
    images.slice(4).forEach(imageData => {
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");
  
      const image = document.createElement("img");
      image.src = imageData.url;
      image.alt = imageData.description;
  
      const hoverImg = document.createElement("img");
      hoverImg.src = imageData.hover_url;
      hoverImg.alt = imageData.description;
      hoverImg.classList.add("hover-image");
      
      const imageDescription = document.createElement("div");
      imageDescription.classList.add("image-description");
      imageDescription.textContent = imageData.description;
  
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
  
      imageGallery.appendChild(imageCard);
  });
    
  }
  
