// IMPORT

// EXECUTION

/* HEADER start */
/* HEADER END */

/* HERO start */
/* Hero END */

/*SERVICES start */
const servicesSocialsData = [
    {
        numbers: '137+',
        description: 'Completed Sites',
    },
    {
        numbers: '1200',
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
