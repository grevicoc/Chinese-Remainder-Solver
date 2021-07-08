//gcd euclid method
function gcd(num1,num2){
    let tempNum;
    while (num2!==0){
        tempNum = num1;
        num1 = num2;
        num2 = tempNum%num2;
    }
    return num1;
}

//mencari angka yang membuat checkNumber*multiplier % modulus menghasilkan 1
function findMultiplier(checkNumber,modulus){
    if (gcd(checkNumber,modulus)!==1){
        throw Error("ERROR, numbers are not relatively prime!")
    }

    let multiplier=0;
    let value = (checkNumber*multiplier)%modulus;
    while (value!==1){
        multiplier++;
        value = (checkNumber*multiplier)%modulus;
    }
    
    return multiplier;
}

//fungsi untuk mengolah 2 equation menjadi 1 equation
function convert2EquationTo1(eq1,eq2){
    let tempNum = eq2[0];
    tempNum -= eq1[0];
    let multiplier = findMultiplier(eq1[1],eq2[1]);

    return [tempNum*multiplier,eq2[1]];
}

//fungsi rekursif untuk membantu menyelesaikan perhitungan, contoh case untuk menyimpan process adalah 3 mod 5, 5 mod 7, dan 7 mod 11.
function processingCount(arrayOfEquation,baseEq,eq2,currentNumEq,numOfEq,arrayOfProcess){
    if (currentNumEq===1){
        arrayOfProcess.push(baseEq);    //simpan x = 3+5k1
    }
    
    if (numOfEq-1===currentNumEq){
        let tempEq = convert2EquationTo1(baseEq,eq2);
        arrayOfProcess.push(tempEq);    //simpan k2=9+11k3

        let resultEq = [baseEq[0] + baseEq[1]*tempEq[0],baseEq[1]*tempEq[1]];
        arrayOfProcess.push(resultEq);  //simpan x= 348+385k3
        return resultEq;
    }else{
        let tempEq = convert2EquationTo1(baseEq,eq2);
        arrayOfProcess.push(tempEq);    //simpan k1 = 6+7k2
        
        let resultEq = [baseEq[0] + baseEq[1]*tempEq[0],baseEq[1]*tempEq[1]];
        arrayOfProcess.push(resultEq);  //simpan x = 33+35k2
        return processingCount(arrayOfEquation,resultEq,arrayOfEquation[currentNumEq+1],currentNumEq+1,numOfEq,arrayOfProcess);
    }
}

//fungsi yang menerima beberapa equation dan menghasilkan angka yang memenuhi semua equation tersebut dan mengembalikan juga beberapa eq sebagai step-step process
function countResult(arrayOfEquation){
    // console.log(arrayOfEquation);
    let retArrayOfProcess = [];
    retArrayOfProcess.push(arrayOfEquation);    //awal2
    let finalEq = processingCount(arrayOfEquation,arrayOfEquation[0],arrayOfEquation[1],1,arrayOfEquation.length,retArrayOfProcess);
    while (finalEq[0]<0){
        finalEq[0] += finalEq[1];
    }

    // console.log(arrayOfEquation);
    return [finalEq[0],retArrayOfProcess];
}

export default countResult;