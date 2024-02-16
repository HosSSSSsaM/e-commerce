
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
        img : "images/vegies.png",
        name : "Fresh vagies",
        price : 30,
        quantity : 0
    },
    {
        id : 2,
        img : "images/yogurt.png",
        name : "Yogurt",
        price : 35,
        quantity : 0
    },
    {
        id : 3,
        img : "images/plate-1.png",
        name : "Summer salad",
        price : 40,
        quantity : 0
    },
    {
        id : 4,
        img : "images/plate-2.png",
        name : "Cottage dish",
        price : 45,
        quantity : 0
    },
    {
        id : 5,
        img : "images/plate-3.png",
        name : "Greek salad",
        price : 50,
        quantity : 0
    },
    {
        id : 6,
        img : "images/salad-table.jpg",
        name : "paradise dish",
        price : 55,
        quantity : 0
    },
    {
        id : 7,
        img : "images/coffee.jpg",
        name : "Coffee time",
        price : 60,
        quantity : 0
    },
    {
        id : 8,
        img : "images/food-table.jpg",
        name : "Dinner time",
        price : 70,
        quantity : 0
    },
    {
        id : 9,
        img : "images/jars.jpg",
        name : "After dinner ",
        price : 100,
        quantity : 0
    },
    {
        id : 10,
        img : "images/cupcake.png",
        name : "Cup cake",
        price : 110,
        quantity : 0
    },
]

// let cart;
// if(cart != ""){
//     cart = JSON.parse(localStorage.getItem("product"))
// }else{
    cart = []
    // localStorage.setItem("product" , JSON.stringify(cart))

// }

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
        if(cart.length==0 || cart == null){
        span.style.color = "red"
            document.querySelector(".cart_product").innerHTML = " ur cart is empty"
            total_html.innerHTML = `$0.00`
            console.log("no");
        }else{
        span.style.color = "var(--primary)"
            document.querySelector(".cart_product").innerHTML = cart.map(function(value2,key){
                total += value2.totall
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
            cart[key].price = quantity * products[id - 1].price;
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













            // ----all pages js ---- //
document.onscroll= function(){
if(window.scrollY > 0){
document.querySelector("nav .down_bar").style.backgroundColor = "white"
document.querySelector("nav .down_bar").style.boxShadow = `5px 5px 10px var(--primary)`
}else{
document.querySelector("nav .down_bar").style.backgroundColor = "none"
document.querySelector("nav .down_bar").style.boxShadow = `none`
}
}


document.querySelector(".togller").onclick = function(){
this.classList.toggle("close");
document.querySelector("nav .down_bar .down").classList.toggle("toggell_links") ;
}
if(document.querySelector("nav .down_bar .down .countainerrr").style.display == "block"){
console.log("block");
}


let date = new Date();
let year = date.getFullYear()
document.querySelector(".copyright div span").innerHTML = `${year}`



