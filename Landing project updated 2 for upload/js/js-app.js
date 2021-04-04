//create functionality for scroll to top button
            const scrolll = document.getElementById("section1");
            function toscroll() {
            scrolll.scrollIntoView({behavior:"smooth"});
            }




// Identify container, sections and empty unorder list.
           const menu = document.getElementById("menu");
           const sections = [...document.querySelectorAll(".section")]
           
// create navigation menu lists
          const nav_menu_items = () => {
      
      //this variable act as container for list items
               let nav_menu_container = '';
      
      /* this function will get data attribute from each div element
       and set it in its corresponding list item*/         
            sections.forEach(section => {

                  const sectionID = section.id;
                  const sectionAtrribute = section.dataset.nav;
                                nav_menu_container += `<li class="list"  >
                                <a class="menu_item_link" >
                                ${sectionAtrribute}</a></li>`   
                })             
            menu.innerHTML=nav_menu_container;
           
          } 
          
            nav_menu_items();

            
//style navigation menu items when they are clicked.
let clicked_items = document.querySelectorAll("li");

for ( let i=0;i<clicked_items.length;i++){ 
  clicked_items[i].addEventListener("click", function () { 
    document.querySelectorAll("div")[i].scrollIntoView()}); };

clicked_items.forEach(item => {
  item.addEventListener("click", function (){
    
    clicked_items.forEach(an_item =>{
      
      an_item.classList.remove("clicked_item");
      this.classList.add("clicked_item");
    })
  })
});

//log the section that is being viewed.
const divs = document.querySelectorAll("div")
window.addEventListener("scroll", function (){
  divs.forEach(section => {
      if (section.getBoundingClientRect().top <window.innerHeight){

         console.log(section.getAttribute("id")+" is being viewed");
      }
  })
})

//highlight the nav menu item that corresponds to the active section.
const Asections = document.querySelectorAll("div");
const lists = document.querySelectorAll("li");

Asections.forEach((section, index) => {
  section.addEventListener("mouseover", function () {
    
    clicked_items.forEach(item => {
      item.classList.remove("clicked_item");
      });

  lists[index].classList.add("mouseover");
  })
} );

Asections.forEach((section, index) => {
  section.addEventListener("mouseout", function () {
  lists[index].classList.remove("mouseover");
  })
} );
