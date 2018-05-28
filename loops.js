function forLoop(array){
  for(let i = 1; i <= 25; i++){
    if (i == 1)
    array[i] = "I am ${i} strange loop";
    else
    array[i] = "I am ${i} strange loops";
  }
    return array; 
}

function whileLoop(number){
  let i = number;
  while(i > 0){
    console.log(--i)
  }
  
  return "done"
  
}