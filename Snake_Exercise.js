const letters = ['S', 'W', 'G'];
do{
   const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log(randomLetter)
  let inp = prompt('Enter one letter between S, W, OR G');
  if(inp == randomLetter){
    alert('Tie')
  }
  else if(inp == 'S'){
      if (randomLetter == 'W'){
        alert('You won')
      }
      else if(randomLetter == 'G'){
        alert('You lost')
      }
  } 
  else if(inp == 'W'){
      if (randomLetter == 'G'){
        alert('You won')
      }
      else if(randomLetter == 'S'){
        alert('You lost')
      }
  }
  else if(inp == 'G'){
      if (randomLetter == 'S') {
        alert('You won')
      }
      else if (randomLetter == 'W'){
        alert('You lost')
      }
  }
  else{
    alert('invalid caharacter')
  }
}
while(confirm('Wanna play again?'))
