// PLACEHOLDER CHART 1

const canvas6 = document.getElementById('chart6');

// instantiate new chart instance with two arguments:
// 1. canvas element where chart will be rendered
// 2. options object
chart_6 = new Chart (canvas6, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    
    options: {
        plugins: {
            tooltip: true,
            zoom: {
                pan: {
                    enabled: false,
                    mode: 'xy',
                },
                // drag to zoom in
                zoom: {
                    drag: {
                    enabled: true,
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 1,
                    backgroundColor: 'rgba(54, 162, 235, 0.3)',
                    maintainAspectRatio: false,
                }
            }
        }
    },
}
});

// self made function that just reloads the original chart
function resetZoom() {
    chart_6.resetZoom();
};
