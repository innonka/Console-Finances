
//Assign variables

var total = 0; 
var totalChanges = 0;
var previousProfit = 0;
var greatestIncrease = 0;
var greatestIncreaseMonth = "";
var greatestDecrease = 0; 
var greatestDecreaseMonth = "";

// The net total amount of Profit/Losses over the entire period
//Use for loop


for (var i = 0; i < finances.length; i++) {
    var data = finances[i];
    var date = data[0];
    var profit = data[1];
    total = total + profit;

    //If condition for greatest increase and greatest decrease

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
//Calculate average changes in Profit/Losses over the entire period

var averageChanges = totalChanges / (finances.length - 1); 

console.log("Financial Analysis\n===================");
console.log("Total number of months: %s", finances.length);
console.log("Profit/Losses: $%s", total);
console.log("Average Change: $%s", averageChanges.toFixed(2));
console.log("Greatest Increase in Profits: %s ($%s)", greatestIncreaseMonth, greatestIncrease);
console.log("Greatest Decrease in Losses: %s ($%s)", greatestDecreaseMonth, greatestDecrease);


