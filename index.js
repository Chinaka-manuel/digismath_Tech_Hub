
  var element = document.getElementById("menu_icon1");

  const mediaQuery = window.matchMedia("(min-width: 601px)");

  const mediaQuery2 = window.matchMedia("(max-width: 600px)");

 let vatn= document.querySelector(".verti_ul")

 function toggleVisibility() {
    element.addEventListener('click',(event)=>{

      
  if (vatn.style.display === "block" && mediaQuery) {
    vatn.style.display = "none";
  }
  else {
    vatn.style.display = "block";
  }
})
};

toggleVisibility();





















// const toggleMenu = document.getElementById("menu_icon1");
//     const vertNav = document.querySelector(".verti_ul")
  
//     // Use a MediaQueryList object for media query handling
//     const mediaQuery = window.matchMedia("(min-width: 601px)");

// const toggleButton = () => {
  
//     // Event listener for toggle button click
//     toggleMenu.addEventListener('click', () => {
//       // Concise state-based logic with ternary operator
//       vertNav.style.display = mediaQuery.matches ? "block" : "none";
    
//     })
//   };
  
//   // Call the toggleButton function
//   toggleButton();


  