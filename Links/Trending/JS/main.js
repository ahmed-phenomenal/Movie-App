//https://api.themoviedb.org/3/discover/${Search}api_key=b6df159d121dc79c541bc18dc1eb06c8
//b6df159d121dc79c541bc18dc1eb06c8
//navbar
let boxWidth = $(".open_bar").outerWidth();
console.log(boxWidth)
$(".open_bar").animate({left:`-${boxWidth}px`})
$(".always_open").animate({left:`0`})
$(".links").click(function(){
    if($(".open_bar").css("left") === "0px"){
        //closed
        $(".open_bar").animate({left:`-${boxWidth}px`},600)
        $(".always_open").animate({left:`0`},600)
        $("#change_icon").removeClass(`fa-solid fa-xmark`)
        $("#change_icon").addClass(`fa-solid open-close-icon fa-2x fa-align-justify`)
    }
    else{
        //opened
        $(".open_bar").animate({left:`0px`},600)
        $(".always_open").animate({left:`18%`},600)
        $("#change_icon").removeClass(`fa-solid open-close-icon fa-2x fa-align-justify`)
        $("#change_icon").addClass(`fa-solid fa-xmark`)
    }
})

//scroll function
// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.documentElement.scrollTop = 0; 
}

//search bar
$("#search").on('input', function() {
    if ($("#search").val()) {
        $('.clear-btn').removeClass("d-none");
    } else {
        $('.clear-btn').addClass("d-none");
    }
});

// Clear the input field when the clear button is clicked
$('.clear-btn').on('click', function() {
    $("#search").val('').focus();
    $('.clear-btn').addClass("d-none");
});

//stars 
//if below 10 (5stars) 8.1 ... 8.9 (4.5 stars)
//if below 8 (4stars) 7.1 ... 7.9 (3.5 stars)
//if below 7 (3stars) 5.1 ... 5.9 (2.5 stars)
//if below 5 (2stars) 3.1 ... 3.9 (1.5 stars)
//if below 3 (1stars) 1.1 ... 1.9 (.5 stars)
//if below 0 (1stars inactive)
//stars 
//if below 10 (5stars) 8.1 ... 8.9 (4.5 stars)
//if below 8 (4stars) 7.1 ... 7.9 (3.5 stars)
//if below 7 (3stars) 5.1 ... 5.9 (2.5 stars)
//if below 5 (2stars) 3.1 ... 3.9 (1.5 stars)
//if below 3 (1stars) 1.1 ... 1.9 (.5 stars)
//if below 0 (1stars inactive)
async function showStars(){
    $('.rate').each(function() {
        // Get the current <p> element
        var $this = $(this);

        // Get the data-id attribute value
        var dataIdValue = parseInt($this.attr('data-id'));
        console.log(dataIdValue)

        if (dataIdValue <= 0) {
            $this.append('<i class="fa-solid fa-star star-inactive" style="color: gray;"></i>');
        } 
        else if(dataIdValue > 0 && dataIdValue < 2){
            $this.append('<i class="fa-solid fa-star-half-stroke half1"></i>');
        }
        else if(dataIdValue >= 2 && dataIdValue < 3){
            $this.append('<i class="fa-solid fa-star star1"></i>');
        }
        else if(dataIdValue >= 3 && dataIdValue < 4){
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star-half-stroke half1"></i>');
        }
        else if(dataIdValue >= 4 && dataIdValue < 5){
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
        }
        else if(dataIdValue >= 5 && dataIdValue < 6){
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star-half-stroke half1"></i>');
        }
        else if(dataIdValue >= 6 && dataIdValue < 7){
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
        }
        else if(dataIdValue >= 7 && dataIdValue < 8){
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star-half-stroke half1"></i>');
        }
        else if(dataIdValue >= 8 && dataIdValue < 9){
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star-half-stroke half1"></i>');
        }
        else if(dataIdValue >= 9 && dataIdValue < 10){
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
            $this.append('<i class="fa-solid fa-star star1"></i>');
        }
    });
}


//design of whole page

//API
async function getMovie(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmRmMTU5ZDEyMWRjNzljNTQxYmMxOGRjMWViMDZjOCIsIm5iZiI6MTcyMTQwNzM1Mi43NTczMiwic3ViIjoiNjY5YTk1ZjEwMjczNzBmMWIyZGZjMzkzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.M_iq3IWEZw8r8zloOqH5xt7LxtIB4ylDV26kTS986cw'
        }
      };
      
    let movie = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=b6df159d121dc79c541bc18dc1eb06c8', options)
    let moviedescription =await movie.json()
    console.log(moviedescription)
    displayDataMovie(moviedescription.results)
}

//search
// async function searchMovie(search="inside") {
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmRmMTU5ZDEyMWRjNzljNTQxYmMxOGRjMWViMDZjOCIsIm5iZiI6MTcyMTQwNzM1Mi43NTczMiwic3ViIjoiNjY5YTk1ZjEwMjczNzBmMWIyZGZjMzkzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.M_iq3IWEZw8r8zloOqH5xt7LxtIB4ylDV26kTS986cw'
//         }
//       };
//     let movie = await fetch(`https://api.themoviedb.org/3/movie/${search}/keywords?api_key=b6df159d121dc79c541bc18dc1eb06c8`, options)
//     let moviedescription =await movie.json()
//     console.log(moviedescription)
//     displayDataMovie(moviedescription.results)
//     }
// let searchName = document.getElementById("search")
// searchName.addEventListener("input",function(){
//     console.log(searchName.value)
//     searchMovie(searchName.value)
// })
function displayDataMovie(data){
    let box = ''
    for(let i=0;i<data.length;i++){
        console.log(i)
        box += `<div class="card1 my-3 col-lg-4 col-md-6 col-sm-12 position-relative">
        <div class="image" style="overflow: hidden; border-radius: 10px;">
            <img src="https://image.tmdb.org/t/p/w500/${data[i].backdrop_path}">
        </div>
        <div class="caption p-4 text-light">
            <h2>${data[i].original_title}</h2>
            <p>${data[i].overview}</p>
            <p>Release Date : ${data[i].release_date}</p>
            <p class="rate" data-id="${data[i].vote_average}">

            </p>
            <h3 data-id="${data[i].vote_average}">${data[i].vote_average}</h3>
        </div>
    </div>`
    }
    document.getElementById("card").innerHTML = box
    showStars()
}
getMovie()

//search
async function searchMovie(search="inside") {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmRmMTU5ZDEyMWRjNzljNTQxYmMxOGRjMWViMDZjOCIsIm5iZiI6MTcyMTQwNzM1Mi43NTczMiwic3ViIjoiNjY5YTk1ZjEwMjczNzBmMWIyZGZjMzkzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.M_iq3IWEZw8r8zloOqH5xt7LxtIB4ylDV26kTS986cw'
        }
      };
    let movie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b6df159d121dc79c541bc18dc1eb06c8&query=${search}`, options)
    let moviedescription =await movie.json()
    console.log(moviedescription)
    displaySearchData(moviedescription.results)
    }
let searchName = document.getElementById("search")
searchName.addEventListener("input",function(){
    console.log(searchName.value)
    searchMovie(searchName.value)
    $("#card").addClass("d-none")
    $("#card_search").removeClass("d-none")
})
function displaySearchData(data){
    let box = ''
    for(let i=0;i<data.length;i++){
        console.log(i)
        box += `<div class="card1 my-3 col-lg-4 col-md-6 col-sm-12 position-relative">
        <div class="image" style="overflow: hidden; border-radius: 10px;">
            <img src="https://image.tmdb.org/t/p/w500/${data[i].backdrop_path}">
        </div>
        <div class="caption p-4 text-light">
            <h2>${data[i].title}</h2>
            <p>${data[i].overview}</p>
            <p>Release Date : ${data[i].release_date}</p>
            <p class="rate" data-id="${data[i].vote_average}">

            </p>
            <h3 data-id="${data[i].vote_average}">${data[i].vote_average}</h3>
        </div>
    </div>`
    }
    document.getElementById("card_search").innerHTML = box
    if ($('#search').val() === '') {
        $("#card").removeClass("d-none")
        $("#card_search").addClass("d-none")
        console.log("empty")
    }
    $('.clear-btn').on('click', function(){
        $("#card").removeClass("d-none")
        $("#card_search").addClass("d-none")
        console.log("empty")

    });
    showStars()
}
// return to main page on reload
if (performance.navigation.type === 1) {
    // This means the page was reloaded
    window.location.replace("../../index.html");
}



//contact-us

//name
$('#name-input').on('input', function() {
    let value = $(this).val();
    if (/^\d+$/.test(value)) { // Check if the value contains only numbers
        $(this).addClass('errorName');
        $(".error-name").removeClass("d-none")
        $("#error").removeClass("button")
        $("#error").addClass("error")
    } else {
        $(this).removeClass('errorName');
        $(".error-name").addClass("d-none")
        $("#error").removeClass("error")
        $("#error").addClass("button")
    }
});

//password
$('#password-input').on('input', function() {
    let value = $(this).val();
    let isValid = /^[A-Za-z\d]{8,}$/.test(value) && /\d/.test(value); // Check if value is at least 8 characters long and contains at least one number

    if (isValid) {
        $(this).removeClass('error-password');
        $('.errorPassword').addClass("d-none");
        $('#toggle-button').css({
            'bottom': '5px' // Change the bottom border color and style
        });
        $("#error").removeClass("error")
        $("#error").addClass("button")
    } else {
        $(this).addClass('error-password');
        $('.errorPassword').removeClass("d-none");
        $('#toggle-button').css({
            'bottom': '26px' // Change the bottom border color and style
        });
        $("#error").removeClass("button")
        $("#error").addClass("error")
    }
});

$('#toggle-button').on('click', function() {
    let input = $('#password-input');
    let type = input.attr('type');
    if (type === 'password') {
        input.attr('type', 'text');
        $('#toggle-button').removeClass("fa-solid fa-eye-slash")
        $('#toggle-button').addClass("fa-solid fa-eye")
    } else {
        input.attr('type', 'password');
        $('#toggle-button').removeClass("fa-solid fa-eye")
        $('#toggle-button').addClass("fa-solid fa-eye-slash")
    }
});

//email
$('#error-email').on('input', function() {
    let email = $('#error-email').val();
    let isValid = validateEmail(email);
    if (isValid) {
        $('.errorEmail').addClass("d-none")
        $(this).removeClass('error-email');
        $("#error").removeClass("error")
        $("#error").addClass("button")
    } else {
        $('.errorEmail').removeClass("d-none")
        $(this).addClass('error-email');
        $("#error").removeClass("button")
        $("#error").addClass("error")
    }
});
function validateEmail(email) {
    // Regular expression to check for '@' and '.com'
    var regex = /^[^\s@]+@[^\s@]+\.(com)$/;
    return regex.test(email);
}

//age
$('#error-age').on('input', function() {
    var age = parseInt($('#error-age').val(), 10); // Get the age value and convert to an integer
    var isValid = validateAge(age);
    
    if (isValid) {
        $('.errorAge').addClass("d-none")
        $(this).removeClass('error-age');
        $("#error").removeClass("error")
        $("#error").addClass("button")
    } else {
        $('.errorAge').removeClass("d-none")
        $(this).addClass('error-age');
        $("#error").removeClass("button")
        $("#error").addClass("error")
    }
});
function validateAge(age) {
    return age >= 16; // Check if age is 16 or older
}

//repassword
$('#error-rep').on('input', function() {
    let password = $('#password-input').val();
        let repassword = $('#error-rep').val();
        let isValid = validatePasswords(password, repassword);
        if (isValid) {
            $('.errorRep').addClass("d-none")
            $(this).removeClass('error-rep');
            $("#error").removeClass("error")
            $("#error").addClass("button")
        } else {
            $('.errorRep').removeClass("d-none")
            $(this).addClass('error-rep');
            $("#error").removeClass("button")
            $("#error").addClass("error")
        }
    });

    function validatePasswords(password, repassword) {
        return password === repassword; // Check if both passwords are identical
    }


