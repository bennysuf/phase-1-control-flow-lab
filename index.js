function scuberGreetingForFeet(n){
  if (n <= 400){
 return 'This one is on me!'
  } else if (n > 400 && n < 2000) {
    return 'That will be twenty bucks.'
  } else if (n > 2000 && n < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
};

function ternaryCheckCity(c){
 return c==='NYC'?'Ok, sounds good.':'No go.'
};

function switchOnCharmFromTip(x){
  switch (x){
    case 'generous': return 'Thank you so much.';
    break;
    case 'not as generous': return 'Thank you.';
    break;
    default: return 'Bye.'
    break;
  }
}