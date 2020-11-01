/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	let num = BigInt(digits.join('')) + BigInt(1);

	  return String(num).split('');
  };

  let digits = [1,2,3] //[1,2,4]
//   let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]


  console.log(  plusOne(digits))