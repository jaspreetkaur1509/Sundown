const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a = document.querySelector("#elem1");
// var b = a.getAttribute("data-image");
// console.log(b);

function page4Animation() {
    var elemc = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image")
    elemc.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    })
    elemc.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`
        })
    });
}

function clickAnimation() {
    var tab1 = document.getElementById("tab1");
    var img = document.querySelector("#food");
    var para = document.getElementById("para");
    var line1 = document.querySelector("#linediv1");
    var line2 = document.querySelector("#linediv2");
    var line3 = document.querySelector("#linediv3");
    var tab = tab1.addEventListener("click", function () {
        var para1 = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
        img.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg";
        tab1.style.opacity = 1;
        tab2.style.opacity = 0.5;
        tab3.style.opacity = 0.5;
        line1.style.border = "2.5px solid red";
        line2.style.border = "2.5px solid #EFEAE3";
        line3.style.border = "2.5px solid #EFEAE3";
        para.innerHTML = para1;
    });

    var tab2 = document.getElementById("tab2");
    var tabb = tab2.addEventListener("click", function () {
        var para2 = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design";
        img.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp";
        tab2.style.opacity = 1;
        tab1.style.opacity = 0.5;
        tab3.style.opacity = 0.5;
        line2.style.border = "2.5px solid red";
        line1.style.border = "2.5px solid #EFEAE3";
        line3.style.border = "2.5px solid #EFEAE3";
        para.innerHTML = para2;
    });

    var tab3 = document.getElementById("tab3");
    var tabbb = tab3.addEventListener("click", function () {
        var para3 = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
        img.src = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg";
        tab3.style.opacity = 1;
        tab1.style.opacity = 0.5;
        tab2.style.opacity = 0.5;
        line3.style.border = "2.5px solid red";
        line1.style.border = "2.5px solid #EFEAE3";
        line2.style.border = "2.5px solid #EFEAE3";
        para.innerHTML = para3;
    });
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 100,
    });
}


// var menu = document.querySelector("nav h3");
// var full = document.querySelector("#full-scr")
// var navimg = document.querySelector("nav img");
// var flag = 0;
// menu.addEventListener("click", function () {
//     if (flag == 0) {
//         full.style.top = 0;
//         navimg.style.opacity = 0;
//         flag = 1;
//     }else{
//         full.style.top = "-100%";
//         navimg.style.opacity = 1;
//         flag = 0;
//     }
// })

function loaderAnimation(){
    var loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top= "-100%";
},4200)};

loaderAnimation();
swiperAnimation();
page4Animation();
clickAnimation();



