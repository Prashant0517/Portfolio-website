let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            
        };
    });
};
// // typing animation
// var type = new Typed(".typing",{
//     strings:["","Prashant Patil."],
//     typespeed:70,
//     backspeed:60,
//     loop:true
// })

// var type = new Typed(".typing-1",{
//     strings:["","Web Developer."],
//     typespeed:100,
//     backspeed:60,
//     loop:true
// })
// var type = new Typed(".typing-2",{
//     strings:["","Web Developer."],
//     typespeed:100,
//     backspeed:60,
//     loop:true
// })

