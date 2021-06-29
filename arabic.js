function add(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1]){
            result-= arr[i];
        }
        else{
            result+=arr[i];
        }
    }
    return result;
}

function arabic(str) {
    let a = [];
    let temp = str.toUpperCase();
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == 'I') {
            a.push(1);
        }
        else if (temp[i] == 'V') {
            a.push(5);
        }
        else if (temp[i] == 'X') {
            a.push(10);
        }
        else if (temp[i] == 'L') {
            a.push(50);
        }
        else if (temp[i] == 'C') {
            a.push(100);
        }
        else if (temp[i] == 'D') {
            a.push(500);
        }
        else if (temp[i] == 'M') {
            a.push(1000);
        }
        else {
            return 'Invalid Digit';
        }
    }
    return add(a);
}

let result = arabic("MMMCDLXXXIII");
console.log(result);