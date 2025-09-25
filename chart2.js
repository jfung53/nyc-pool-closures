// PLACEHOLDER CHART 2

const canvas2 = document.getElementById('chart2');

// make dataset variables
const labels = ['January', 'February', 'March', 'April'];
const volumes = [4, 8, 24, 16];
const area = [10, 20, 30, 40];

// create data object
const dataObj = {
    labels: labels,
    datasets: [ {
        label: "Volumes",
        data: volumes
        }],
    }; 


// instantiate new chart instance with two arguments:
// 1. canvas element where chart will be rendered
// 2. options object
chart_2 = new Chart (canvas2, {
    type: 'bar',
    data: dataObj,
    
    options: {
        backgroundColor: 'rgba(173, 255, 47, .5)', // greenyellow
        hoverBackgroundColor: 'rgba(0,255,0, .7)', // lime
        borderColor: "limegreen",
        borderWidth: 2,
        hoverBorderColor: "white",
        animation: {
            duration: 500,
        },

        plugins: {
            title: {
                display: true,
                text: 'This is an optional title',
                font: {
                    family: "'IBM Plex Mono', 'Arial', 'sans-serif'",
                    //size: 20,

                }
            }
        },
    }
}

);

// vanilla javascript

// define our own function called toggle
// e = events (convention)
// toggles between two datasets and styles
function toggle (e) {
    if (chart_2.data.datasets[0].label == "Volumes") {
        chart_2.data.datasets[0].data = area;
        chart_2.data.datasets[0].label = "Area";
        chart_2.data.datasets[0].borderColor = "green";
        chart_2.data.datasets[0].backgroundColor = "gray";
    } 
    else {
        chart_2.data.datasets[0].data = volumes;
        chart_2.data.datasets[0].label = "Volumes";
        chart_2.data.datasets[0].borderColor = "black";
        chart_2.data.datasets[0].backgroundColor = "blue";
    }

    chart_2.update();
}
