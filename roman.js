function addStr(a, b, c = 0) {
    let x = '';
    for (let k1 = 0; k1 < a - c; k1++) {
        x += b;
    }
    return x;
}

// a = [400, 80, 3]
function roman2(a) {
    let str = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i].length == 1) {
            if (a[i] < 4) {
                str += addStr(parseInt(a[i]), 'I');
            }
            else if (a[i] == 4) {
                str += 'IV';
            }
            else if (a[i] >= 5 && a[i] < 9) {
                str += 'V';
                str += addStr(parseInt(a[i]), 'I', 5);
            }
            else if (a[i] == 9) {
                str += 'IX';
            }
        }
        else if (a[i].length == 2) {
            if (a[i] < 40) {
                str += addStr(parseInt(a[i]) / 10, 'X');
            }
            else if (a[i] == 40) {
                str += 'XL';
            }
            else if (a[i] >= 50 && a[i] < 90) {
                str += 'L';
                str += addStr(parseInt(a[i]) / 10, 'X', 5);
            }
            else if (a[i] == 90) {
                str += 'XC';
            }
        }
        else if (a[i].length == 3) {
            if (a[i] < 400) {
                str += addStr(parseInt(a[i]) / 100, 'C');
            }
            else if (a[i] == 400) {
                str += 'CD';
            }
            else if (a[i] >= 500 && a[i] < 900) {
                str += 'D';
                str += addStr(parseInt(a[i]) / 100, 'C', 5);
            }
            else if (a[i] == 900) {
                str += 'CM';
            }
        }
        else if (a[i].length == 4){
            if(a[i] <= 4000){
            str += addStr(parseInt(a[i]) / 1000, 'M');
            }
            else if(a[i] >= 5000){
                str = 'if required, it will get an update beyond 5000';
                break;
            }
        }
    }
  // document.write(str)
   return str;
}
/* 1 = I;   5 = V; | 10 = X;    50 = L; | 100 = C;  500 = D; | 1000 = M
   4 = IV;  9 = IX;| 40 = XL;   90 = XC;| 400 = CD; 900 = CM |*/
function roman(n) {
    let l = n.toString().length - 1;
    let temp = n;
    let s;
    let a = [];
    while (temp > 0) {
        s = temp % Math.pow(10, l--);
        a.push((temp - s).toString());
        temp = s;
    }
   // console.log(a);
 return roman2(a);
}
console.log(roman(1));
/*temp == 483     //s == 483%100 --> 83    // a += [483-83] ==> [400]   // temp = s == 83
  temp == 83      //s == 483%10 --> 3      // a += [83-3] ==> [400,80]  // temp = s == 3
  temp == 3       //s == 483%1 --> 0       // a += [3-0] ==> [400,80,3] // temp = s == 0 */