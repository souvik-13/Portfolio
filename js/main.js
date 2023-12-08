let tablink = document.querySelectorAll('.tab-links');
let tabcontents = document.querySelectorAll('.tab-contents');

function openTab(event, tabName) {
    tabcontents.forEach(function (tab) {
        tab.style.display = "none";
    });

    tablink.forEach(function (tab) {
        tab.className = tab.className.replace(" active-link", "");
    });

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active-link";
}

let sidebar = document.querySelector('#sidebar');
function openSidebar() {
    sidebar.classList.toggle('active');
}
function closeSidebar() {
    sidebar.classList.remove('active');
}

// mail form
let form = document.querySelector('#contact-form');
let userName = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let submit = document.querySelector('#submit');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(e, e.target, e.currentTarget);
    let formData = {
        name: userName.value,
        email: email.value,
        message: message.value
    };

    let link = 'mailto:souvikk431@gmail.com?subject=Message from ' + formData.name + '&body=' + formData.message + ' from ' + formData.email;

    submit.setAttribute('href', link);
    submit.click();

    setTimeout(function () {
        userName.value = '';
        email.value = '';
        message.value = '';
    }, 3000);
});