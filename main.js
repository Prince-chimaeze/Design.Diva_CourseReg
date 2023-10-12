// change navbar styles on scroll 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 50)
})



// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";

        }
    })
})



// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

$(document).ready(function() {
    // Initialize form validation
    initFormValidation();

    function initFormValidation() {
        const myForm = $("#myForm");
        const submitBtn = $("#submitBtn");

        myForm.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 50,
                    // letterswithspaces: true
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8,
                    // strongPassword: true
                },
                confirmPassword: {
                    required: true,
                    equalTo: "#password"
                },
                description: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: "Name should be at least 2 characters.",
                    maxlength: "Name should not exceed 50 characters.",
                    // letterswithspaces: "Please enter a valid name with letters and spaces only."
                },
                email: {
                    required: "Please enter your email address.",
                    email: "Please enter a valid email address."
                },
                password: {
                    required: "Please enter a password.",
                    minlength: "Password should be at least 8 characters."
                },
                confirmPassword: {
                    required: "Please confirm your password.",
                    equalTo: "Passwords do not match."
                },
                description: {
                    required: "Please enter a description.",
                    minlength: "Description should be at least 10 characters."
                }
            },
            highlight: function(element) {
                $(element).addClass("invalid-input");
            },
            unhighlight: function(element) {
                $(element).removeClass("invalid-input");
            }
        });

        // Enable the submit button when all required fields are filled
        myForm.find("input[required], textarea[required]").on("input", function() {
            const allFieldsValid = myForm.find("input[required], textarea[required]").toArray().every(function(field) {
                return $(field).valid();
            });
            console.log(allFieldsValid)
            if (allFieldsValid) {
                console.log("disabled is false")
                submitBtn.prop("disabled", false);
            } else {
                console.log("disabled is true")
                submitBtn.prop("disabled", true);
            }
        });

        // Prevent form submission on Enter keypress
        myForm.on("keyup keypress", function(e) {
            const keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });

        myForm.on('submit',function(e){
            e.preventDefault();
            localStorage.setItem('logged_in',true)
            window.location.href = "index2.html"
        })
    }

    // Your code for showing/hiding modals remains unchanged
    // ...
});

// jQuery document ready function
$(document).ready(function() {
    // Show Signup popup
    $("#signupButton").click(function() {
        $("#signupPopup").css("display", "flex");
    });

    // Close Signup popup
    $("#closeSignupButton").click(function() {
        $("#signupPopup").css("display", "none");
    });

    // Show Login popup
    $("#loginButton").click(function() {
        $("#loginPopup").css("display", "flex");
    });

    // Close Login popup
    $("#closeLoginButton").click(function() {
        $("#loginPopup").css("display", "none");
    });
});
