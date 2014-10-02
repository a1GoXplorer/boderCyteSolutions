//The function takes a string and uses a decrementing loop to iterate over it.
//Each pass of the loop adds the str[i] character to variable o
//We then return the newly created, reversed string.

function FirstReverse(str) { 
  var o = '';
  for(var i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;
  
         
};

//passed the test on JS Bin 10/2/2014
