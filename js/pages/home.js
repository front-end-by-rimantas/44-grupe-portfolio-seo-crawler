// IMPORT

// EXECUTION

/* HEADER start */
/* HEADER END */

/* HERO start */
/* Hero END */

/*SERVICES start */
const servicesSocialsData = [
    {
        numbers: '135+',
        description: 'Completed Sites',
    },
    {
        numbers: '1181',
        description: 'Happy Customers',
    },
    {
        numbers: '11k',
        description: 'Completed Sites',
    },
    {
        numbers: '23',
        description: 'Awards Winning',
    },
];

const socialsDOM = document.getElementById('socials_block');

let HTML = '';

for (const social of servicesSocialsData) {
    HTML += `<div class="social">
                <p class="numbers"><span class="main-color">${social.numbers}</span></p>
                <p class="description">${social.description}</p>
            </div>`;
}

socialsDOM.innerHTML = HTML;
/*SERVICES end */

/*OPTIMIZE start */
// const pliusDOM = document.getElementById('plius');
const pliusDOM = document.querySelectorAll('#plius');
const minusDOM = document.querySelectorAll('#minus');
const boxDOM = document.querySelectorAll('#experience-box');
const pDOM = document.querySelectorAll('#hidden-p');

console.log(pliusDOM);
console.log(minusDOM);
console.log(boxDOM);
console.log(pDOM);

function reveal1() {
    minusDOM[0].classList.remove('not-visable');
    pliusDOM[0].classList.add('not-visable');
    pDOM[0].classList.remove('not-visable');

    minusDOM[1].classList.add('not-visable');
    pliusDOM[1].classList.remove('not-visable');
    pDOM[1].classList.add('not-visable');

    minusDOM[2].classList.add('not-visable');
    pliusDOM[2].classList.remove('not-visable');
    pDOM[2].classList.add('not-visable');
}

boxDOM[0].addEventListener('click', reveal1);

function reveal2() {
    minusDOM[1].classList.remove('not-visable');
    pliusDOM[1].classList.add('not-visable');
    pDOM[1].classList.remove('not-visable');

    minusDOM[0].classList.add('not-visable');
    pliusDOM[0].classList.remove('not-visable');
    pDOM[0].classList.add('not-visable');

    minusDOM[2].classList.add('not-visable');
    pliusDOM[2].classList.remove('not-visable');
    pDOM[2].classList.add('not-visable');
}

boxDOM[1].addEventListener('click', reveal2);

function reveal3() {
    minusDOM[2].classList.remove('not-visable');
    pliusDOM[2].classList.add('not-visable');
    pDOM[2].classList.remove('not-visable');

    minusDOM[0].classList.add('not-visable');
    pliusDOM[0].classList.remove('not-visable');
    pDOM[0].classList.add('not-visable');

    minusDOM[1].classList.add('not-visable');
    pliusDOM[1].classList.remove('not-visable');
    pDOM[1].classList.add('not-visable');
}

boxDOM[2].addEventListener('click', reveal3);

/*OPTIMIZE end */

/*MARKETING AGENCY start*/
/*MARKETING AGENCY end*/

/*Featured start */
/*Featured end */

/*TEAM start */
/*TEAM end */

/*HAPPY CLIENTS start */
/*HAPPY CLIENTS end */

/* FOOTER start */
/* FOOTER END */
