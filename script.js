document.addEventListener("DOMContentLoaded", function() {
    /* --- Boutique --- */
    const cart = [];
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function() {
        const product = this.getAttribute("data-product");
        const price = parseInt(this.getAttribute("data-price"));
        cart.push({ product, price });
        updateCart();
      });
    });
  
    function updateCart() {
      cartItemsElement.innerHTML = "";
      let total = 0;
      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - ${item.price}€`;
        cartItemsElement.appendChild(li);
        total += item.price;
      });
      cartTotalElement.textContent = total + "€";
    }
  
    /* --- Smooth Scroll --- */
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  
    /* --- Parallax pour la vidéo d'accueil --- */
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const video = document.getElementById('background-video');
      if (video) {
        video.style.transform = 'translate(-50%, -' + (50 + scrolled * 0.1) + '%)';
      }
    });
  
    /* --- Initialisation Google Maps --- */
    function initMaps() {
      const mapElements = document.querySelectorAll(".map");
      mapElements.forEach(mapEl => {
        const lat = parseFloat(mapEl.getAttribute("data-lat"));
        const lng = parseFloat(mapEl.getAttribute("data-lng"));
        const map = new google.maps.Map(mapEl, {
          center: { lat: lat, lng: lng },
          zoom: 15
        });
        new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: map
        });
      });
    }
  
    if (typeof google !== "undefined" && google.maps) {
      initMaps();
    } else {
      console.warn("Google Maps API non chargée. N'oublie pas d'inclure le script API avec ta clé.");
    }
  });
  