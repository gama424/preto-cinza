class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();









  //typing
  var i = 0;
  // var A = 0;
          var tag = document.getElementById("text");
          var html = document.getElementById("text").innerHTML;
          var attr = tag.setAttribute("data", html);
          var txt = tag.getAttribute("data");
          var speed = 170;
  
          function typeWriter() {
            if (i <= txt.length) {
              document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
              i++;
              setTimeout(typeWriter, speed);
            }
              //console.log(document.getElementById("text").innerHTML);
          }
  
  typeWriter();
  



