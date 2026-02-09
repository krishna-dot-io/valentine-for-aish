const answers_no = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "But wait... remember all those times you farted and I still loved you? 💨😂",
    "Think again, Koala! 🐨",
    "But I'm your Bear! 🐻",
    "Please give me a chance!",
    "Don't be so cold, Koala! ❄️",
    "This Panda is sad now 🐼😢",
    "I'll cry! Like, actually cry! 😭",
    "It's our 2nd married Valentine's! Come on! 💍",
    "Your Bear needs his Koala! 🐻❤️🐨",
    "I promise no dad jokes today! (maybe)",
    "You're breaking my fuzzy little heart! 💔",
    "Ok, let's just start over..."
];

const FART_JOKE_INDEX = 3; // Index of the fart joke message

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source on first click
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    
    clicks++;
    
    // Special fart joke GIF
    if (i === FART_JOKE_INDEX) {
        banner.src = "public/images/fart.gif";
        refreshBanner();
    } else if (clicks > 0 && i !== FART_JOKE_INDEX) {
        // Keep no.gif for other states
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    
    // Increase yes button size gradually
    const sizes = [30, 40, 35, 45, 50];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    
    let total = answers_no.length;
    
    // Change button text
    if (i < total - 1) {
        no_button.innerHTML = `<p>${answers_no[i]}</p>`;
        i++;
    } else if (i === total - 1) {
        alert(answers_no[i]);
        // Reset everything
        i = 1;
        no_button.innerHTML = `<p>${answers_no[0]}</p>`;
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
        clicks = 0;
        banner.src = "public/images/mid.gif";
        refreshBanner();
    }
});

yes_button.addEventListener('click', () => {
    // Change banner gif to celebration
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    
    // Hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    
    // Hide question
    let question = document.getElementById('question-heading');
    question.style.display = "none";
    
    // Show success message
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force animation restart
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}
