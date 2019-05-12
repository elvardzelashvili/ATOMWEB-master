//! nav hide/show
const nav = document.querySelector(".myNav");
const burger = document.querySelector(".burger-box");

function openNav() {
nav.classList.toggle("navActiv");
burger.classList.toggle("burgerActiv");}



        $(window).scroll(function() {
            var height = $(window).scrollTop();
            if (height > 100) {
                $('#back2Top').fadeIn();
            } else {
                $('#back2Top').fadeOut();
            }
        });
        $(document).ready(function() {
            $("#back2Top").click(function(event) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        
        });

