  function button(){
    var inputArray = [];
  var size = 5; 
  
  for(var i=0; i<size; i++) {
    
    inputArray[i] = prompt('Enter Element ' + (i+1));
    inputArray.sort();
    document.getElementById("demo").innerHTML = inputArray.map(function(x){ return x.toUpperCase() });
  }
  var str = String(inputArray).toUpperCase().split(",");
  }
