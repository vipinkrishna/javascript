// validation script here

var inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.value);  // WORKS
        // console.log(e.target.attributes.name.value);  //WORKS
        // console.log(e.target.attributes.name);  //WORKS
        console.log(e.target.attributes.name.value);  //WORKS
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});

const patterns = {
    telephone: /^\d{5}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/i,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};


function validate(field, regex) {
    console.log(regex.test(field.value));
    if (regex.test(field.value)) {
        field.className = 'valid';
    }
    else
        field.className = 'invalid';
}