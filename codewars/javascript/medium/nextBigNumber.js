function nextBigger(n) {
    let number = `${n}`;
    let nSplitted = number.split('');

    function permutations(string) {
        let result = [];
        let inputArr = string.split('');

        const permute = (arr, m = []) => {
            if (arr.length === 0) {
                result.push(m);
            } else {
                for (let i = 0; i < arr.length; i++) {
                    let curr = arr.slice();
                    let next = curr.splice(i, 1);
                    permute(curr.slice(), m.concat(next));
                }
            }
        };

        permute(inputArr);
        let finalRes = [];

        result.forEach(element => {
            finalRes.push(element.join(''));
        });

        let res = [...new Set(finalRes)];
        return res.slice(0, 2);
    }

    let test = permutations(number);
    let myNumberIndex = test.findIndex(element => element == number);
    let finalAnswer = test[myNumberIndex + 1];
    if (nSplitted.length < 2 || Number(finalAnswer) < Number(number)) {
        return -1;
    } else {
        return Number(finalAnswer);
    }
}

//--------------------------------------------------------------------------------

function nextBigger(n){
  var d = n.toString().split('');

  // find the pivot, the point (from right) where i > i-1
  var p = -1;
  for (var i = d.length-1; i > 0; i--) {
    if (+d[i] > +d[i-1]) {
      p = i-1;
      break;
    }
  }

  // if we are unable to find the pivot, skip
  if (p == -1) return p;

  // splice the digits in the pivot
  var right = d.splice(p);

  // extract pivot
  var pv = right.splice(0, 1)[0];

  // find the lowest number > pv
  var mm = null, mmi = null;
  for (var i = 0; i < right.length; i++) {
    if (right[i] > pv) {
      if (mm == null || right[i] < mm) {
        mm = right[i];
        mmi = i;
      }
    }
  }

  if (mmi == null) return -1;

  right.splice(mmi, 1);
  right.push(pv);
  right = right.sort();

  // concat the left + new pivot + right part
  var ret = +d.concat([mm]).concat(right).join('');
  if (ret < n) return -1;
  return ret;
}
let number = 2017;
nextBigger(number);

//--------------------------------------------------------------------------------
//other solutions

function nextBigger(n){
    let a = +String(n).split('').sort((a,b) => b-a).join('');

   for (let i = n + 1; i <= a; i++) {
     if (a == +String(i).split('').sort((a,b) => b-a).join('')) return i
   }
   return -1
 }

//--------------------------------------------------------------------------------

function maxWithDigits(n) {
    return parseInt(n.toString().split("").sort(function(a, b) { return b - a; }).join(""));
  }
  function nextBigger(n) {
    let mx = maxWithDigits(n)
    for (i = n + 1; i <= mx; i++)
      if (maxWithDigits(i) === mx)
        return i;
    return -1;
  }
