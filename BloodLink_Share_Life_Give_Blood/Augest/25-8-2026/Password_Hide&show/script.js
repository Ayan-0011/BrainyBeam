const password = document.getElementById('password');
const show = document.querySelector('.show');
const icons = show.querySelector("i");


show.addEventListener("click", () => {
    //console.log("button is clicked")
    if (password.type == "password") {
        password.type = "text"
        icons.classList.remove("fa-eye");
        icons.classList.add('fa-eye-slash');
    } else {
        password.type = "password"
        icons.classList.remove('fa-eye-slash');
        icons.classList.add("fa-eye");
    }
})