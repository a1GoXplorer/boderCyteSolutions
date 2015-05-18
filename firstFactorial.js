//This uses the '?:' Ternary operator in place of an 'if..else' statement.
//The arguement is checked to see if it is less than 2 if it is the function returns 1.  If it's greater than 1 we use our newly
//formed function recursively to modify the given number as the argument by -1 and multiplying it by the original value.

function firstFactorial(num) { 
  return (num<2)?1:FirstFactorial(num-1)*num;
  return num; 
         
};


