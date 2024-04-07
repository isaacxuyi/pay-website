var ctx = document.getElementById("lineChart").getContext("2d");

// Function to create gradient
function createGradient(ctx) {
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(196, 167, 196, 0.5)'); // Slightly darker light purple
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // White
    return gradient;
}

// Define initial data for each timeframe
var weekData = [12, 19, 3, 5, 2, 25, 10];
var dayData = [8, 15, 10, 7, 12, 18, 5];
var yearData = [30, 40, 25, 35, 45, 60, 55];

// Initial data and options for the chart
var data = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "Aug"],
    datasets: [{
        label: "Saved This Month",
        borderColor: "rgb(22, 22, 22)",
        borderWidth: 3,
        data: weekData,
        fill: true,
        backgroundColor: createGradient(ctx),
        lineTension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0
    }]
};

var options = {
    elements: {
        line: {
            tension: 0.4
        }
    },
    scales: {
        x: {
            display: false
        },
        y: {
            display: false
        }
    }
};

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

// Function to update chart data based on the selected timeframe
function updateChartData(newData) {
    myLineChart.data.datasets[0].data = newData;
    myLineChart.update();
}

// Event listeners for timeframe buttons
document.getElementById("timeframe-week").addEventListener("click", function() {
    updateChartData(weekData);
});

document.getElementById("timeframe-day").addEventListener("click", function() {
    updateChartData(dayData);
});

document.getElementById("timeframe-year").addEventListener("click", function() {
    updateChartData(yearData);
});
