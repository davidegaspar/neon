const neon = require('./modules/neon.js');

function displaySign(emoji, name){

  // init
  let sections = [];

  // start neon
  sections.push(neon.start());
  sections.push(neon.emoji(emoji));

  // add letters as neon sections
  // ...

  // end neon
  sections.push(neon.emoji(emoji));
  sections.push(neon.end());

  // light up in sequence
  // ...

}
displaySign('🍕','pizza');
// neonx('🍜','ramen');
// neonx('🌮','tacos');
