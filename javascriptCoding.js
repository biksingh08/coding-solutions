// assuming we are only implementing enough anonymous functions for multiplication of 3 numbers
function mul (a) { // most outer function can access input a
  return function (b) { // first inner anonymous func can access input a and b
    return function (c) { // second inner anonymous func can access input a, b and c
      return a * b * c; // we return multiplication in the most inner anon func to return the value
    };
  };
}
