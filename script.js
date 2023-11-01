const texts = [
    'I am Masum Billah',
    'I am a textile engineer',
    'My dream is marrying four wives',
    'I want many childrens',
    'I would like to create a football team',
];

const typed = new Typed('#typing', {
    strings: texts,
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 700,
});
