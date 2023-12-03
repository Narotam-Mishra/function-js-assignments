/*
Write a JavaScript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the function with various incomes.
*/

function calculateTax(){
    // Define tax rates based on income ranges
    const taxRates = [
        {
            incomeRange: 1000000,
            rate: 0.1
        },
        {
            incomeRange: 500000,
            rate: 0.15
        },
        {
            incomeRange: 100000,
            rate: 0.2
        },
        {
            incomeRange: 50000,
            rate: 0.25
        }
    ]

    // nested function to calculate tax using tax rate array
    return function(income){
        let payableTax = 0;

        for(let { incomeRange, rate } of taxRates)
        {
            if(income<=incomeRange){
                payableTax += income*rate;
                break;
            }else{
                payableTax += income*rate;
                income -= incomeRange;
            }
        }
        return payableTax;
    };
}

const calculateTaxFromIncome = calculateTax();

console.log(`Tax for Rs 500000 is :`, calculateTaxFromIncome(500000));

console.log(`Tax for Rs 30000 is :`, calculateTaxFromIncome(30000));

console.log(`Tax for Rs 70000 is :`, calculateTaxFromIncome(70000));

console.log(`Tax for Rs 100000 is :`, calculateTaxFromIncome(100000));