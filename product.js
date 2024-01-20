let container = document.querySelector(".product")
let hidden = document.querySelector(".hidden")
let span = document.querySelector(".coount")
let total_html = document.querySelector(".cart .last p")
document.querySelector(".fa-cart-shopping").onclick = function(){
    document.querySelector("body").classList.add("open")
}

document.querySelector(".fa-circle-xmark").onclick = function(){
    document.querySelector("body").classList.remove("open")
}

var products = [
    {
        id : 1,
        img : "images/1.jpg",
        name : "product one",
        price : 30,
        quantity : 0
    },
    {
        id : 2,
        img : "images/2.jpg",
        name : "product two",
        price : 35,
        quantity : 0
    },
    {
        id : 3,
        img : "images/3.jpg",
        name : "product three",
        price : 40,
        quantity : 0
    },
    {
        id : 4,
        img : "images/4.jpg",
        name : "product four",
        price : 45,
        quantity : 0
    },
    {
        id : 5,
        img : "images/5.jpg",
        name : "product five",
        price : 50,
        quantity : 0
    },
    {
        id : 6,
        img : "images/6.jpg",
        name : "product six",
        price : 55,
        quantity : 0
    },
    {
        id : 7,
        img : "images/7.jpg",
        name : "product seven",
        price : 60,
        quantity : 0
    },
    {
        id : 8,
        img : "images/8.jpg",
        name : "product eight",
        price : 70,
        quantity : 0
    },
    {
        id : 9,
        img : "images/9.png",
        name : "product nine",
        price : 100,
        quantity : 0
    },
    {
        id : 10,
        img : "images/10.jpg",
        name : "product 10",
        price : 110,
        quantity : 0
    },
]


function add_items_to_html(){
    let new_product = document.createElement("div")
    new_product.classList.add("row")
    container.append(new_product)
    new_product.innerHTML = products.map(function(value , key ){
        return `
        <div class="card col-lg-3 col-md-12 col-sm-12 ${value.id}">
            <img src="${value.img}" class="card-img-top wow slideInUp " data-wow-duration="2s" alt="">
            <div class="card-body">
                <h5 class="card-title">${value.name}</h5>
                <p class="card-text price">$${value.price}.00</p>
                <button onclick="addtocart(${key})" data-name="${value.name}" class="btn btn-dark">add to cart</button>
            </div>
        </div>
        `;
    }).join("")
}
add_items_to_html()
document.querySelector(".cart_product").innerHTML = " ur cart is empty"
let cart;
// if(cart != ""){
//     cart = JSON.parse(localStorage.getItem("product"))
// }else{
    cart = []
// }
function addtocart(e){
    if(products[e].quantity == 0){
        let new_quantity = products[e].quantity + 1;
        products[e].quantity = new_quantity ;
        cart.push(products[e])
        // localStorage.product =JSON.stringify(cart)
        show_products_in_cart(e)
        show_popup(e)
    }
    
}

function show_popup(e){
console.log(products[e].name);
    let blur = document.createElement("div")
    blur.classList.add("blur")
    document.querySelector("body").prepend(blur)

    let popup_box = document.createElement("div");
    popup_box.classList.add("popup_box")
    document.querySelector("body").prepend(popup_box)
    let text = document.createElement("h3")
    text.innerHTML = ` your product <span>(${products[e].name})</span> add to cart successfuly`
    popup_box.append(text)
    let img = document.createElement("img")
    img.src = "404-tick.png"
    popup_box.append(img)
    let close = document.createElement("h6")
    close.innerHTML = "X"
    popup_box.append(close)

    close.onclick = function(){
        blur.remove()
        popup_box.remove()
    }
    setTimeout(() => {
        blur.remove()
        popup_box.remove()
    }, 3000);

}


function show_products_in_cart(e){

    let total = 0;
    if(cart.length==0){
        document.querySelector(".cart_product").innerHTML = " ur cart is empty"
        total_html.innerHTML = `$0.00`
        console.log("no");
    }else{
        document.querySelector(".cart_product").innerHTML = cart.map(function(value2,key){
            total += value2.price
            total_html.innerHTML = `$${total}.00`
            return `
                <div class="append">
                    <div class="details_one">
                        <img src="${value2.img}" alt="">
                        <div>
                            <p>${value2.name}</p>
                            <p>$${value2.price}.00</p>
                        </div>
                    </div>
                    <div class="details_two">
                        <div>
                            <button id="plus" onclick="changequantity(${key} , ${value2.quantity + 1} , ${value2.id})" > +</button>
                            <span class="">${value2.quantity}</span>
                            <button id="minus" onclick="changequantity(${key} , ${value2.quantity - 1} , ${value2.id})" >-</button>
                        </div>
                        <i onclick= "deletee(${key})" class="fa-solid fa-trash"></i>
                    </div>
                </div> 
                `
                ;
            }).join("")
    localStorage.setItem("product" , JSON.stringify(cart))
    }
    span.innerHTML = cart.length
// }


}
function changequantity(key , quantity ,id){
    // console.log(cart[key]);
    console.log(key);
    if(quantity == 0){
        cart.splice(key,1)
    }else{
        cart[key].quantity = quantity ;
        cart[key].price = quantity * products[id -1].price;
    }
    show_products_in_cart()
    console.log(cart[key]);
    console.log(cart[key].price);
    console.log(products[id - 1]);
    console.log(products[id - 1].price);
}


show_products_in_cart()

function deletee(e){
    cart.splice(e,1)
    console.log(cart);
    show_products_in_cart(e)
    if(cart.length == 0){
        localStorage.product =JSON.stringify(cart)
        console.log("clear done");
        show_products_in_cart()
    }
}


let li = document.querySelectorAll("nav .container ul li a");
li.forEach(function(e){
    e.onclick = function(){
        li.forEach(function(el){
            el.classList.remove("active")
        })
        e.classList.add("active")
    }
})


