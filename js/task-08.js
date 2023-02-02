const formEl = document.querySelector(".login-form");

const onSubmit = event => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    const userDataObj = {
        email: email.value,
        password: password.value,
    };

    email.value === "" || password.value === "" ? alert("Please fill in all the fields!") : console.log(userDataObj);
        
    event.currentTarget.reset();

}

formEl.addEventListener("submit", onSubmit);
