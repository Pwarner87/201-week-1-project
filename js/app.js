'use strict';


// Setting Varibles
var surname, aname, wtf, awtf, lts, alts, clean, aclean, guess;


// Asking for name
function askName(){
  surname = prompt('May I have your name?');
  aname= surname.toLowerCase();
  console.log('Asking for a name- ' +aname);

  // Respone for no answer
  if(surname === ''){
    surname = prompt('You do not wish to tell me your name?');
  }
  console.log('recieved no response');

  // Respones for if they will give a name
  if(aname === 'n' || aname === 'no'){
    alert('Well i do not like how this is starting');
  }
  if(aname === 'y' || aname === 'yes' ){
    alert('Great then what is your name?');
  }
  console.log('did we recieve a name- ' + aname);

  // Final attempt to get name
  surname = prompt('Now your name please');
  console.log('Persons name ' + aname);
}

askName();


// Asking if they would like to be friends
function newFriend(){
  wtf = prompt('Would you like to be friends ' + surname);
  awtf = wtf.toLowerCase();

  // Responses for if they would like to be friends
  if(awtf === 'n' || awtf === 'no'){
    alert('Well i did not want to be friends anyway');
  }
  if(awtf === 'y' || awtf === 'yes'){
    alert('Grand! Let us celebrate with drinks on me');
  }
  console.log('Are we friends? ' + awtf);
}

newFriend();

// Asking if they like to swim
function swimTime(){
  lts = prompt('Do you like to swim ' + surname);
  alts = lts.toLowerCase();

  // Responses for if they like to swim
  if(alts === 'n' || alts === 'no'){
    alert('Well then you are not about to have any fun');
  }
  if(alts === 'y' || alts === 'yes'){
    alert('Great, I have a brand new Jacuze we can soak in');
  }
  console.log('Do they like to swim' + alts);
}

swimTime();

// Alert for taking them to Jacuze
surname = alert('Let us hit the Jacuze!');


// Asking if the Jacuze is clean enough for them
function cleanTub(){
  clean = prompt('Is the Jacuze clean enough for ya?');
  aclean = clean.toLowerCase();


  // Responses for if they think the Jacuze is clean enough
  if(aclean === 'n' || aclean === 'no'){
    alert('Well that is too bad, jump on in(pushes into the Jacuze)');
  }
  if(aclean === 'y' || aclean === 'yes'){
    alert('I can appreciate a person who does not mind a little dirt');
  }
  console.log('Is the Jacuze clean enough? ' + aclean);
}
// Announcing that prepared drinks have been brought over
surname = alert('(Bently the butler brings over drinks)');

cleanTub();

// Asking if they enjoyed themselves
function goodTime(){
  surname = prompt('Did you enjoy yourself?');
  aname = name.toLowerCase();


  // Responses for if they enjoyed themselves
  if(aname === 'n' || aname === 'no' ){
    alert('Then get out and never come back again!');
  }
  if(aname === 'y' || aname === 'yes'){
    alert('Great! I will have to invite you over again sometime');
  }
  console.log('Will we be friends forever? ' + aname);
}

goodTime();


// Explaining the guessing game
alert('Before you go how about we play a little guessing game?');
alert('I will give you 7 chances to guess the correct number');
alert('If you fail...well just hope you dont fail');

// Asking the first guessing question
guess = prompt('Now please guess a number between 0-50, you only have 7 tries so guess carefully');


// Declaring the varible tries. Also running a loop that will keep prompting user to guess until they either get it right or run out of tries
var tries;

function guessingGame(){
  for(tries = 0; tries < 7; tries++){
    if(tries === 18) continue;
    prompt('sorry not quite. Try again');
  }
  // Notifying user if that they were correct and setting up to ask another question
  // alert('Congradulations I am glad you guessed correctly, I did not want our night to end on a bad note');
  alert('Ok actually one more thing before you go...this time i swear');
}

guessingGame();

// Defining the varible soccer and making it an array
var soccer;
soccer = ['Sounders', 'Manchester United', 'PSG', 'Atletico Madrid'];

// Asking the next question and defining the varible guess while prompting user to answer question
alert('If you can guess one of my four favorite soccer teams you can have my Jacuze that you love so much, but you only get one guess!');
guess = prompt('Take you guess wisely');

//Using if/else statement to determine if user answered question correctly
function soccerTime(){
  if(guess === soccer[0] || soccer[1] || soccer[2] || soccer[3]){
    alert('Ding ding ding ding ding, we have a winner!! Now all you have to do is figure out how to take the Jacuze');
  }
  else{
    alert('Sorry it seems like you do not win the Jacuze tonight');
  }
}

soccerTime();
