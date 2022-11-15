
//1. Assign variables

var total = 0; 
var totalChanges = 0;
var previousProfit = 0;
var greatestIncrease = 0;
var greatestIncreaseMonth = "";
var greatestDecrease = 0; 
var greatestDecreaseMonth = "";

//2. The net total amount of Profit/Losses over the entire period.
//Sum up all the numbers,



for (var i = 0; i < finances.length; i++) {
    var data = finances[i];
    var date = data[0];
    var profit = data[1];
    total = total + profit;
    
    if (i > 0) {
        var change = profit - previousProfit; 
        totalChanges = totalChanges + change;

        if (change > greatestIncrease) {
            greatestIncrease = change;
            greatestIncreaseMonth = date;
        }
        if (change < greatestDecrease) {
            greatestDecrease = change; 
            greatestDecreaseMonth = date;
        }

    }


    previousProfit = profit;
}

var averageChanges = totalChanges / (finances.length - 1); //calculate average changes in Profit/Losses over the entire period

console.log("Financial Analysis\n===================");
console.log("Total number of months: %s", finances.length);
console.log("Profit/Losses: $%s", total);
console.log("Average Change: $%s", averageChanges.toFixed(2));
console.log("Greatest Increase in Profits: %s ($%s)", greatestIncreaseMonth, greatestIncrease);
console.log("Greatest Decrease in Losses: %s ($%s)", greatestDecreaseMonth, greatestDecrease);

//The greatest increase in profits (date and amount) over the entire period.
 
