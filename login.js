//Just a comment
//window.alert("Welcome to Yawning Jellyfish")  This creates a window pop-up
console.log(`Hola`)

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("usrname").value;
    document.getElementById("MyH1").textContent = `Welcome ${username}`
    console.log("If you can see this. console log works");
}   