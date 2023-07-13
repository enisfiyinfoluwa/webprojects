const menu = [
    {
        id : 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 1499,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 1399,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,

    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 699,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,


    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 2099,
        img: "./images/item-4.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,


    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 2299,
        img: "./images/item-5.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,


    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 1899,
        img: "./images/item-6.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,


    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 899,
        img: "./images/item-7.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,


    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 1299,
        img: "./images/item-8.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,


    },
    {
        id: 9,
        title: "quarantee buddy",
        category: "shakes",
        price: 1699,
        img: "./images/item-9.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,


    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 2299,
        img: "./images/item-10.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,


    },

];


// get parent element


const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();

});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `
        <article class = "menu-item">
            <img img src= ${item.img} alt= ${item.title} class ="photo" />
            <div class = "item-info" 
                <header>
                    <h4> ${item.title}</h4>
                    <h4 class = "price"> N${item.price}</h4>
                </header> 
                <p class= "item-text">
                    ${item.desc}
                </p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");

    //console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;

};

function displayMenuButtons(){
    const categories = menu.reduce(function(values,item){
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ["all"]);

    //All the catergories are now in this list that we iterate over below
    const categoryBtns = categories.map(function (category){
        return `<button type= "button" class = "filter-btn" data-id= ${category}>
        ${category}</button>`;
    })
    .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;

            //creating a new list menuCategory with filter <--- Fiyin's comment
            //menuItem is the iteration i for every step of filter
            const menuCategory = menu.filter(function(menuItem){
                if (menuItem.category === category){
                    return menuItem; // A smaller list is created of only the content in menu that have the clicked menu item
                }// to illustrate [i,i,i,i], i is menuItem
                // what it's doing is that its creating a new list of items that contains each category upon every click and its going to render that list
            });// this is updated upon every click
            if (category === "all"){
                displayMenuItems(menu);
            }else{displayMenuItems(menuCategory);
            }
        });
    });


}
