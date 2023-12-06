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
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let submit = document.querySelector('#submit');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     // console.log(e, e.target, e.currentTarget);
//     let formData = {
//         name: name.value,
//         email: email.value,
//         message: message.value
//     };
//     console.log(formData);

//     // let xhr = new XMLHttpRequest();
//     // xhr.open('POST', '/');
//     // xhr.setRequestHeader('content-type', 'application/json');
//     // xhr.onload = function () {
//     //     console.log(xhr.responseText);
//     //     if (xhr.responseText == 'success') {
//     //         alert('Email sent');
//     //         name.value = '';
//     //         email.value = '';
//     //         message.value = '';
//     //     } else {
//     //         alert('Something went wrong');
//     //     }
//     // };

//     // xhr.send(JSON.stringify(formData));

// });

// function sendEmail(event) {
//     event.preventDefault();
//     let formData = {
//         name: name.value,
//         email: email.value,
//         message: message.value
//     };
//     let link = "mailto:?subject=" + encodeURIComponent(formData.name) + "&body=" + encodeURIComponent(formData.message);
//     let mailbutton = document.createElement('a', { href: link });
//     mailbutton.click();
// }