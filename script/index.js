// next and previous
const nextBtn = document.querySelector('.control__next');
const previousBtn = document.querySelector('.control__prev');

// image of person
const currentPerson = document.querySelector('.pro__person');
// quote
const currentQuote = document.querySelector('.quote__desc');
const quoteName = document.querySelector('.quote__name');
const quoteJob = document.querySelector('.quote__job');

nextBtn.addEventListener('click', () => {
    currentPerson.src = './images/image-john.jpg';
    currentQuote.innerHTML = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
    quoteName.innerHTML = 'John Tarkpor';
    quoteJob.innerHTML = 'Junior Front-end Developer';
})

previousBtn.addEventListener('click', () => {
    currentPerson.src = './images/image-tanya.jpg';
    currentQuote.innerHTML = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    quoteName.innerHTML = 'Tanya Sinclair';
    quoteJob.innerHTML = 'UX Engineer';
})