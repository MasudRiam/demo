let num = [12, 14, 11, 10, 9]
let sum = 0;

for (let i = 0; i < num.length; i++) {
	sum += num[i];
    // console.log(sum);
    }

let sumAll = num.reduce ((accumlator, acct) => {
    return accumlator + acct
})

    console.log (sumAll);