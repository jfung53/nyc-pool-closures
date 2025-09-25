// PLACEHOLDER CHART 3

const canvas3 = document.getElementById('chart3');

// d3's function for reading a csv
d3.csv('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2814973/atp_wta.csv')
  .then(makeChart);

//Chart.defaults.font.family = 'IBM Plex Mono';

function makeChart(players) {

    // get csv data and turn it into an array
    let playerLabels = players.map(function(d) {return d.Name});
    let weeks = players.map(function(d) {return d.Weeks});
    // shorthand if statement: if gender is female, colour it red, else blue
    let playerColors = players.map(function(d) {return d.Gender === 'Female' ? '#F15F36' : '#19A0AA';});
    
    // create a chart inside the function
    let chart = new Chart(canvas3, {
        type: 'bar',
        data: {
            labels: playerLabels,
            datasets: [
                {
                    label: 'Female',
                    data: weeks,
                    backgroundColor: playerColors,
                }
            ]
        },
        options: {
            // turn bar chart on its side (chart comes from y axis)
            indexAxis: 'y',
        }
    });
}
