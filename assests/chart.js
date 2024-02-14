var data =  {
    labels: ["Jan","Feb", "March", "April", "may", "june", "Aug"],
    datasets: [{
        labels: "Saved This Month",
        borderColor: "#ff6384",
        data: [12, 19, 3, 5, 2],
        fill: false
    }]
};

var ctx = document.getElementById("lineChart").getContext("2d");

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
});