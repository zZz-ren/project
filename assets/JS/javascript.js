let countEl = document.getElementById("count");
let num = countEl.innerHTML;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "user") {
        alert("Login Successfully")
        window.open("home.html")
        return false
    } else {
        alert("Login Failure")
        window.open("login.html")
        alert("Try again")
    }
}

function login_btn() {
    window.open("login.html", '_self');
}

function register_btn() {
    window.open("register.html", '_self');
}

function increment() {
    if (num >= 21) {
        alert("Limit exceeded")
    }
    else {
        num++;
        countEl.innerHTML = num
        console.log("The button was clicked")
    }
}

function decrement() {
    if (num <= 1) {
        alert("Cannot be less than 1")
        console.log("The button was clicked")
    } else {
        num--;
        countEl.innerHTML = num
        console.log("The button was clicked")
    }
}

function add_cart(){
    countEl.innerHTML = "1"
}

function gotoremove(){
    window.location.href ="#remove"
}

function gotodb(){
    window.location.href ="#databse"
}

function gotoupdate(){
    window.location.href ="#update"
}    

function gototop(){
    document.documentElement.scrollTop =0;
}    