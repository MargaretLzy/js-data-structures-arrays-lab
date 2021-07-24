// Write your solution here!
const drivers =['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
drivers.push(name)}

function destructivelyPrependDriver(name){
    drivers.unshift(name)}

 function destructivelyRemoveLastDriver(){
     drivers.pop()
 }

  function  destructivelyRemoveFirstDriver(){
      drivers.shift()
  }
  function appendDriver(name){
      const add= [...drivers,name];
   return add;
  }
  function prependDriver(name){
      const pre=[name, ...drivers ];
      return pre;
  }
  function removeLastDriver(){
     return drivers.slice(0,2);
  }
  function removeFirstDriver()
  {
      return drivers.slice(1,3)
  }
