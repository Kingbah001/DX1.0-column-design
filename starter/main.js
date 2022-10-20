ScrollReveal({ reset: true,
    duration: 2000,
    distance: '100px', })

ScrollReveal().reveal('.heading,.line', {
    origin: 'left'
});

ScrollReveal().reveal('.firstsection-leftdiv p',{
    origin: 'right',
})

ScrollReveal().reveal('.line', {
  delay:1000, origin:"bottom"
});

ScrollReveal().reveal('.logotext',{ scale:3, origin: "right", distance: '800px' })