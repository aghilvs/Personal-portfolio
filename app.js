const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

// FIRST LOGIC
// function pageTransitions() {
//     //Button Click active class
//     for (let i= 0; i < sectBtn.length; i++) {
//         sectBtn[i].addEventListener('click',function() {    // ARROW FUNCTION DOES NOT WORK HERE
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
//             this.className += ' active-btn';
//         })
//     }
// }
function pageTransitions() {
    //Button Click active class
    for (let i= 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click',function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');
        })
    }
    //SECTION ACTIVE CLASS
    allSections.addEventListener('click', (e)=> {
        const id = e.target.dataset.id;
        if(id) {
            //Remove Selected from the other buttons
            // sectBtns.forEach((btn) => {
            //     btn.classList.remove('active') // Check whether it is necessary or not
            // })
            // e.target.classList.add('active') // Better not to give 'active' to the controll icons
            //hide other sections
            sections.forEach((section)=> {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}
pageTransitions();