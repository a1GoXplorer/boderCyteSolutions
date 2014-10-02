var longestWordSearcher = function(string) {
  
  var broken = string.split(" ");
  var mostLarge = "";
  
  for (var i = 0; i<broken.length; i++)
  {
    var wuurd = broken[i];
    if (wuurd.length>mostLarge.length)
    {
      mostLarge = wuurd;
    }
    
  }
  return mostLarge;
  
};
