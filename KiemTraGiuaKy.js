function isPrime(num) {
    if(num == 1){
        return false;
    }
    if(num == 2 || num == 3){
        return true;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false
        }
    }
    return true;
}

function listPrimes(arr) {
    let resultArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(isPrime(arr[i]))
        {
            resultArr.push(arr[i]);
        }
    }

    if(resultArr.length!=0) {
        for(let i = 0; i < resultArr.length; i++) {
            document.write("<br/>Phan tu thu " + i + " la: " + resultArr[i]);
        }
    }
    else{
        document.write("Mang da cho khong co phan tu nao la so nguyen to!!!");
    }
}

function sumDiagonal(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i][i];
    }
    return sum;
}

function reverseArr(arr) {
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

function createArray(arr) {
    let outputArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 1){
            reverseArr(arr[i]);
        }
        for(let j = 0; j < arr[i].length; j++){
            outputArr.push(arr[i][j]);
        }
    }
    return outputArr;
}