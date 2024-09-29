document.querySelectorAll('nav ul li a i').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        icon.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        icon.style.color = 'rgba(255, 255, 255, 0.8)';
    });

    icon.addEventListener('mouseout', function() {
        icon.style.backgroundColor = 'transparent';
        icon.style.color = '#fff';
    });
});


const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});





document.getElementById('shop-now-btn').addEventListener('click', function() {
window.location.href = 'women.html';
});


  document.addEventListener('DOMContentLoaded', () => {
    const shopNowBtn = document.getElementById('shopNowBtn');
    const shopNowPopup = document.getElementById('shopNowPopup');
    const closeBtn = document.querySelector('.close');
    const startShoppingBtn = document.querySelector('.start-shopping');

   
    shopNowBtn.addEventListener('click', () => {
        shopNowPopup.style.display = 'flex';
    });

    
    closeBtn.addEventListener('click', () => {
        shopNowPopup.style.display = 'none';
    });

    
    startShoppingBtn.addEventListener('click', () => {
        shopNowPopup.style.display = 'none';
    });

    
    window.addEventListener('click', (event) => {
        if (event.target === shopNowPopup) {
            shopNowPopup.style.display = 'none';
        }
    });
});



 function toggleMode() {
    var body = document.body;
    var modeIcon = document.getElementById("mode-icon");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        modeIcon.classList.replace("bx-moon", "bx-sun");
    } else {
        modeIcon.classList.replace("bx-sun", "bx-moon");
    }
}


var totalAmount = 0;

        function total(price) {
            var ct = document.querySelector("#count").innerHTML;
            ct = Number(ct);
            ct++;
            document.querySelector("#count").innerHTML = ct;


            var t=document.querySelector("#total").innerHTML;
            t = Number(t);

            t += price;
            document.querySelector("#total").innerHTML = t;
           }
           

           function showPopup(price) {
            
            document.getElementById("total-price").textContent = price;
            document.getElementById("cart-popup").style.display = "block";
        }
        
        function closePopup() {
            document.getElementById("cart-popup").style.display = "none";
        }
        
        document.getElementById("main-image").addEventListener("click", function() {
            var imageRow = document.getElementById("image-row");
            if (imageRow.style.display === "none" || imageRow.style.display === "") {
                imageRow.style.display = "flex";
            } else {
                imageRow.style.display = "none";
            }
        });

        function login(){

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
        
            if (username == "") {
                alert("Username is required.");
            } else if (password == "") {
                alert("Password is required.");
            } else {
                alert("Login successful!");
            }
        }

        
        function register(){
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
        
            if (username == "") {
                alert("Username is required.");
                return;
            }
        
            if (email == "") {
                alert("Email is required.");
                return;
            }
        
            if (password == "") {
                alert("Password is required.");
                return;
            }
        
            if (confirmPassword == "") {
                alert("Please confirm your password.");
                return;
            }
        
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }
        
            alert("Registration successful!");
         }



         function signup(){

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
        
            if (username == "") {
                alert("Username is required.");
                return;
            }
        
            if (email == "") {
                alert("Email is required.");
                return;
            }
        
            if (password == "") {
                alert("Password is required.");
                return;
            }
        
            if (confirmPassword == "") {
                alert("Please confirm your password.");
                return;
            }
        
            if (password != confirmPassword) {
                alert("Passwords do not match.");
                return;
            }
        
            alert("Signup successful!");
            
        };
        
        function validateContactForm() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
      
            if (name == "") {
                alert("Name is required.");
            } else if (email == "") {
                alert("Email is required.");
            } else if (message == "") {
                alert("Message is required.");
            } else {
                alert("Message sent successfully!");
                return true; 
            }
            return false; 
        }