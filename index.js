// Show the alert box
function showAlert() {
    document.getElementById('alertBox').style.display = 'block';
}

// Close the alert box when Cancel or Allow button is clicked
document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('alertBox').style.display = 'none';
});

document.getElementById('allowBtn').addEventListener('click', function() {
    document.getElementById('alertBox').style.display = 'none';
});

// Show the alert automatically on page load
window.onload = showAlert;

// Open the sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

// Close the sidenav
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// card
function toggleLike(event) {
    const heartButton = event.currentTarget; // Get the specific button clicked
    heartButton.classList.toggle('liked');  // Toggle the 'liked' class for this button
}

function showMoreCards() {
    const extraCards = document.getElementById('extra-cards');
    const showMoreBtn = document.getElementById('show-more-btn');
    
    extraCards.style.display = "flex"; // Show extra cards
    showMoreBtn.style.display = "none"; // Hide the button
}

function toggleLike(event) {
    const button = event.currentTarget;
    button.classList.toggle('liked');
}

// slider
let currentIndex = 0;
        
function slide(direction) {
    const slider = document.getElementById('slider');
    const totalCards = document.querySelectorAll('.card').length;
    const cardsInView = Math.floor(window.innerWidth / document.querySelector('.card').clientWidth);

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalCards - cardsInView;
    } else if (currentIndex > totalCards - cardsInView) {
        currentIndex = 0;
    }

    slider.style.transform = `translateX(-${currentIndex * 100 / cardsInView}%)`;
}


