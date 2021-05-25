
// Battles
d3.json("http://localhost:5000/api/battles").then(function(data) {
    console.log(data)

    var update = {
        'marker.color': '#b8860b'
    }
    var update2 = {
        'marker.color': '#808080'
    }

    var layout = {
        'paper_bgcolor': 'rgba(255,255,255,0)',
        'plot_bgcolor': 'rgba(35,33,39,.5)',
        "title": {
            text: 'Kings: Attacks & Defenses',
            font: {
                family: 'Algerian',
                size: 22,
                color: '#ffffff'
            }
        },

        "legend": {
            "display": true,
            font: {
                family: 'Algerian',
                size: 16,
                color: '#ffffff'
            }
        },
        "xaxis": {
            title: 'King',
            titlefont: {
                family: 'Algerian',
                size: 19,
                color: '#ffffff'
            },
            tickfont: {
                family: 'Algerian',
                size: 14,
                color: '#ffffff'
            },
            showgrid: false,
        },
        "yaxis": {
            title: 'Number of Battles',
            titlefont: {
                family: 'Algerian',
                size: 19,
                color: '#ffffff'
            },
            tickfont: {
                family: 'Algerian',
                size: 14,
                color: '#ffffff'
            }, 
            showgrid: false,
        },
        "barmode": "group"
    };

    Plotly.newPlot("plot", data, layout);
    Plotly.restyle("plot", update, [0]);
    Plotly.restyle("plot", update2, [1])

    
});

// Directors
d3.json("http://localhost:5000/api/directors").then(function(data) {
    console.log(data)

    var update3 = {
        'marker.color': '#b8860b'
    }
    var layout = {
        'paper_bgcolor': 'rgba(255,255,255,0)',
        'plot_bgcolor': 'rgba(35,33,39,.5)',
        "title": {
            text: 'Directors vs. Ratings',
            font: {
                family: 'Algerian',
                size: 22,
                color: '#ffffff'
            }
        },
        "barmode": "group",
        "xaxis": {
            title: 'Director',
            titlefont: {
                family: 'Algerian',
                size: 19,
                color: '#ffffff'
            },
            tickfont: {
                family: 'Algerian',
                size: 14,
                color: '#ffffff'
            },
            showgrid: false,

        },
        "yaxis": {
            title: 'Average Rating',
            titlefont: {
                family: 'Algerian',
                size: 19,
                color: '#ffffff'
            },
            showgrid: false,

        }
        
    };

    Plotly.newPlot("graph", data, layout);
    Plotly.restyle("graph", update3, [0]);

    
});

// console.log(data)

var jon = d3.select(".jon");
var danny = d3.select(".danny");
var tyrion = d3.select(".tyrion");
var cersei = d3.select(".cersei");

    // Creating list variable for each character (unorderd list for line)
var jonList = d3.select(".jon-line");
var dannyList = d3.select(".danny-line");
var tyrionList = d3.select(".tyrion-line");
var cerseiList = d3.select(".cersei-line");
var synopsisList = d3.select(".synopsis")

    // Clears out existing list entries (lines)
jonList.html("");
dannyList.html("");
tyrionList.html("");
cerseiList.html("");


function getJon() {
    d3.csv("./data/jon_output.csv").then(function(data) {
        console.log(data);
        jonSnowData = data[Math.floor(Math.random() * data.length)];
        jonList.html("");
        jonList.append("li").text(jonSnowData["Jon_I_am"])

    })
}

function getDanny() {
    d3.csv("./data/danny_output.csv").then(function(data) {
        console.log(data);
        dannyData = data[Math.floor(Math.random() * data.length)];
        dannyList.html("");
        dannyList.append("li").text(dannyData["Danny_I_am"])

    })
}

function getCersei() {
    d3.csv("./data/cersei_output.csv").then(function(data) {
        console.log(data);
        cerseiData = data[Math.floor(Math.random() * data.length)];
        cerseiList.html("");
        cerseiList.append("li").text(cerseiData["Cersei_I_am"])

    })
}

function getTyrion() {
    d3.csv("./data/tyrion_output.csv").then(function(data) {
        console.log(data);
        tyrionData = data[Math.floor(Math.random() * data.length)];
        tyrionList.html("");
        tyrionList.append("li").text(tyrionData["Tyrion_I_am"])

    })
}

d3.select(".btn.btn-default.btn-lg.jon").on("click", getJon);
d3.select(".btn.btn-default.btn-lg.danny").on("click", getDanny);
d3.select(".btn.btn-default.btn-lg.cersei").on("click", getCersei);
d3.select(".btn.btn-default.btn-lg.tyrion").on("click", getTyrion);


jonList.append("li").text()


