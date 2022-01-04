(function ($) {
    'use strict';
    $(function () {
        var customerData = {
            labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
            datasets: [{
                label: 'New Tickets',
                data: [12, 25, 35, 25, 17, 13, 10, 6],
                backgroundColor: [
                    '#e4e4e4', '#e4e4e4', '#e4e4e4', '#e4e4e4', '#464dee', '#e4e4e4', '#e4e4e4', '#e4e4e4',
                ],
                borderColor: [
                    '#e4e4e4', '#e4e4e4', '#e4e4e4', '#e4e4e4', '#464dee', '#e4e4e4', '#e4e4e4', '#e4e4e4',
                ],
                borderWidth: 1,
                fill: false
            }
            ]
        };
        var customerOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    position: 'bottom',
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false, //this will remove only the label
                        stepSize: 300,
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        color: "#f0f3f6",
                        borderDash: [8, 4],
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                    },
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false,
                backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            plugins: {
                datalabels: {
                    display: false,
                    align: 'center',
                    anchor: 'center'
                }
            }
        };
        if ($("#customer").length) {
            var barChartCanvas = $("#customer").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            if (screen.width > 767) {
                var chartHeight = document.getElementById("customer");
                chartHeight.height = 60;
            }
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                data: customerData,
                options: customerOptions
            });
        }
        var ordersData = {
            labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
            datasets: [{
                label: 'New Tickets',
                data: [10, 10, 10, 10, 34, 10, 10, 10],
                backgroundColor: [
                    '#e4e4e4', '#e4e4e4', '#e4e4e4', '#e4e4e4', '#464dee', '#e4e4e4', '#e4e4e4', '#e4e4e4',
                ],
                borderColor: [
                    '#e4e4e4', '#e4e4e4', '#e4e4e4', '#e4e4e4', '#464dee', '#e4e4e4', '#e4e4e4', '#e4e4e4',
                ],
                borderWidth: 1,
                fill: false
            }
            ]
        };
        var ordersOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    position: 'bottom',
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false, //this will remove only the label
                        stepSize: 300,
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        color: "#f0f3f6",
                        borderDash: [8, 4],
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                    },
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false,
                backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            plugins: {
                datalabels: {
                    display: false,
                    align: 'center',
                    anchor: 'center'
                }
            }
        };
        if ($("#orders").length) {
            var barChartCanvas = $("#orders").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            if (screen.width > 767) {
                var chartHeight = document.getElementById("orders");
                chartHeight.height = 60;
            }
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                data: ordersData,
                options: ordersOptions
            });
        }
        var growthData = {
            labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
            datasets: [{
                label: 'New Tickets',
                data: [4, 9, 22, 29, 39, 25, 16, 11],
                backgroundColor: [
                    '#e4e4e4', '#e4e4e4', '#e4e4e4', '#e4e4e4', '#464dee', '#e4e4e4', '#e4e4e4', '#e4e4e4',
                ],
                borderColor: [
                    '#e4e4e4', '#e4e4e4', '#e4e4e4', '#e4e4e4', '#464dee', '#e4e4e4', '#e4e4e4', '#e4e4e4',
                ],
                borderWidth: 1,
                fill: false
            }
            ]
        };
        var growthOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    position: 'bottom',
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false, //this will remove only the label
                        stepSize: 300,
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        color: "#f0f3f6",
                        borderDash: [8, 4],
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                    },
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false,
                backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            plugins: {
                datalabels: {
                    display: false,
                    align: 'center',
                    anchor: 'center'
                }
            }
        };
        if ($("#growth").length) {
            var barChartCanvas = $("#growth").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            if (screen.width > 767) {
                var chartHeight = document.getElementById("growth");
                chartHeight.height = 60;
            }
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                data: growthData,
                options: growthOptions
            });
        }
        var revenueData = {
            labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
            datasets: [{
                label: 'New Tickets',
                data: [4, 9, 22, 29, 24, 15, 10, 4],
                backgroundColor: [
                    '#e4e4e4', '#e4e4e4', '#e4e4e4', '#e4e4e4', '#464dee', '#e4e4e4', '#e4e4e4', '#e4e4e4',
                ],
                borderColor: [
                    '#e4e4e4', '#e4e4e4', '#e4e4e4', '#e4e4e4', '#464dee', '#e4e4e4', '#e4e4e4', '#e4e4e4',
                ],
                borderWidth: 1,
                fill: false
            }
            ]
        };
        var revenueOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    position: 'bottom',
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false, //this will remove only the label
                        stepSize: 300,
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        color: "#f0f3f6",
                        borderDash: [8, 4],
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                    },
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false,
                backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            plugins: {
                datalabels: {
                    display: false,
                    align: 'center',
                    anchor: 'center'
                }
            }
        };
        if ($("#revenue").length) {
            var barChartCanvas = $("#revenue").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            if (screen.width > 767) {
                var chartHeight = document.getElementById("revenue");
                chartHeight.height = 60;
            }
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                data: revenueData,
                options: revenueOptions
            });
        }
        if ($("#flotChart").length) {
            var d1 = [
                [0, 15],
                [1, 18],
                [2, 16],
                [3, 17],
                [4, 19],
                [5, 16],
                [6, 22],
                [7, 19],
                [8, 20],
                [9, 19],
                [10, 24],
                [11, 22],
                [12, 26],
                [13, 24],
                [14, 25],
                [15, 21],
                [16, 23],
                [17, 23],
                [18, 24],
                [19, 24],
                [20, 23],
                [21, 23],
                [22, 20],
                [23, 25],
                [24, 25],
                [24, 26],
                [26, 26],
                [29, 24],
                [30, 25],
                [31, 27],
                [32, 28],
                [33, 28],
                [34, 29],
                [35, 29],
                [36, 30],
                [37, 30],
                [38, 32],
                [39, 32],
                [40, 30],
                [41, 30],
                [42, 28],
                [43, 28],
                [44, 28],
                [45, 32],
                [46, 32],
                [47, 35],
                [48, 38],
                [49, 40],
                [50, 39],
                [51, 42],
                [52, 42],
                [53, 47],
                [54, 47],
                [55, 50],
                [56, 54],
                [57, 56],
                [57, 57],
                [58, 58],
                [59, 55],
                [60, 54],
                [61, 50],
                [62, 52],
                [63, 49],
                [64, 48],
                [65, 47],
                [66, 45],
            ];
            var curvedLineOptions = {
                series: {
                    curvedLines: {
                        active: true,
                    },
                    shadowSize: 0,
                    lines: {
                        show: true,
                        lineWidth: 2,
                        fill: false
                    },
                },

                grid: {
                    borderWidth: 0,
                    labelMargin: 0
                },
                yaxis: {
                    show: false,
                    min: 0,
                    max: 80,
                    position: "left",
                    ticks: [
                        [0, '600'],
                        [50, '610'],
                        [100, '620'],
                        [150, '640']
                    ],
                    tickColor: '#e9e9e9',
                    tickLength: 0,
                },
                xaxis: {
                    show: true,
                    position: "bottom",
                    ticks: [
                        [0, 'Jan'],
                        [11, 'Feb'],
                        [22, 'Mar'],
                        [33, 'Apr'],
                        [44, 'May'],
                        [55, 'Jun'],
                        [66, 'Jul']
                    ],
                    tickColor: '#e9e9e9',
                },
                legend: {
                    noColumns: 4,
                    container: $("#legendContainer"),
                }
            }
            $.plot($("#flotChart"), [{
                data: d1,
                curvedLines: {
                    apply: true,
                    tension: 1,
                },
                points: {
                    show: false,
                    fillColor: '#1f3bb3',
                },
                color: '#464dee',

                lines: {
                    show: true,
                    fill: true,
                    fillColor: { colors: [{ opacity: 0.01 }, { opacity: 0.3 }] }
                },
                label: 'This year',
                stack: true,
            }], curvedLineOptions);
        }
        if ($("#flotChartDark").length) {
            var d1 = [
                [0, 15],
                [1, 18],
                [2, 16],
                [3, 17],
                [4, 19],
                [5, 16],
                [6, 22],
                [7, 19],
                [8, 20],
                [9, 19],
                [10, 24],
                [11, 22],
                [12, 26],
                [13, 24],
                [14, 25],
                [15, 21],
                [16, 23],
                [17, 23],
                [18, 24],
                [19, 24],
                [20, 23],
                [21, 23],
                [22, 20],
                [23, 25],
                [24, 25],
                [24, 26],
                [26, 26],
                [29, 24],
                [30, 25],
                [31, 27],
                [32, 28],
                [33, 28],
                [34, 29],
                [35, 29],
                [36, 30],
                [37, 30],
                [38, 32],
                [39, 32],
                [40, 30],
                [41, 30],
                [42, 28],
                [43, 28],
                [44, 28],
                [45, 32],
                [46, 32],
                [47, 35],
                [48, 38],
                [49, 40],
                [50, 39],
                [51, 42],
                [52, 42],
                [53, 47],
                [54, 47],
                [55, 50],
                [56, 54],
                [57, 56],
                [57, 57],
                [58, 58],
                [59, 55],
                [60, 54],
                [61, 50],
                [62, 52],
                [63, 49],
                [64, 48],
                [65, 47],
                [66, 45],
            ];
            var curvedLineOptions = {
                series: {
                    curvedLines: {
                        active: true,
                    },
                    shadowSize: 0,
                    lines: {
                        show: true,
                        lineWidth: 2,
                        fill: false
                    },
                },

                grid: {
                    borderWidth: 0,
                    labelMargin: 0,
                    color: '#b1b1b5'
                },
                yaxis: {
                    show: false,
                    min: 0,
                    max: 80,
                    position: "left",
                    ticks: [
                        [0, '600'],
                        [50, '610'],
                        [100, '620'],
                        [150, '640']
                    ],
                    tickColor: '#e9e9e9',
                    tickLength: 0,
                },
                xaxis: {
                    show: true,
                    position: "bottom",
                    ticks: [
                        [0, 'Jan'],
                        [11, 'Feb'],
                        [22, 'Mar'],
                        [33, 'Apr'],
                        [44, 'May'],
                        [55, 'Jun'],
                        [66, 'Jul']
                    ],
                    tickColor: '#313235',
                },
                legend: {
                    noColumns: 4,
                    container: $("#legendContainer"),
                }
            }
            $.plot($("#flotChartDark"), [{
                data: d1,
                curvedLines: {
                    apply: true,
                    tension: 1,
                },
                points: {
                    show: false,
                    fillColor: '#1f3bb3',
                },
                color: '#464dee',

                lines: {
                    show: true,
                    fill: true,
                    fillColor: { colors: [{ opacity: 0.01 }, { opacity: 0.3 }] }
                },
                label: 'This year',
                stack: true,
            }], curvedLineOptions);
        }
        var visitorsData = {
            labels: ["03/05", "03/06", "03/07", "03/08", "03/09", "03/10", "03/11", "Aug", "03/12", "03/13", "03/14", "03/15"],
            datasets: [{
                label: 'Jerry-s Kitchen',
                data: [50, 36, 67, 41, 94, 65, 67, 45, 37, 59, 57, 45],
                backgroundColor: [
                    '#4c53ee',
                ],
                borderColor: [
                    '#4c53ee',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee'],

            }, {
                label: 'Guru Groceries and Chaat House',
                data: [36, 2, 44, 16, 60, 124, 24, 39, 29, 16, 110, 35],
                backgroundColor: [
                    '#0ddbb9',
                ],
                borderColor: [
                    '#0ddbb9',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9'],

            },

            ],
        };

        var visitorsOptions = {
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: true,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        color: '#e9e9e9',
                    },
                    ticks: {
                        display: true,
                        beginAtZero: false,
                        stepSize: 0,
                        fontColor: '#6c7293'
                    }
                }],


            },
            legend: {
                display: false,
            },
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.000001
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<div class="row">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<div class="col-sm-6 col mr-3 ml-3 ml-sm-0 mr-sm-0 pr-md-0"><div class="py-4"><span class="legend-label" style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span><span class="chart-label">' + chart.data.datasets[i].label + '</span><span class="chart-label-count">' + chart.data.datasets[0].data[i] + '</span></div>');
                    text.push('</div>');
                }
                text.push('</div>');
                return text.join("");
            },
        };
        if ($("#visitors").length) {
            var lineChartCanvas = $("#visitors").get(0).getContext("2d");
            if (screen.width > 767) {
                var chartHeight = document.getElementById("visitors");
                chartHeight.height = 110;
            }
            var visitorschart = new Chart(lineChartCanvas, {
                type: 'line',
                data: visitorsData,
                options: visitorsOptions
            });
            document.getElementById('chart-visitors-legend').innerHTML = visitorschart.generateLegend();
        }
        var visitorsDarkData = {
            labels: ["03/05", "03/06", "03/07", "03/08", "03/09", "03/10", "03/11", "Aug", "03/12", "03/13", "03/14", "03/15"],
            datasets: [{
                label: 'Deal Saved',
                data: [50, 36, 67, 41, 94, 65, 67, 45, 37, 59, 57, 45],
                backgroundColor: [
                    '#4c53ee',
                ],
                borderColor: [
                    '#4c53ee',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee'],

            }

            ],
        };

        var visitorsDarkOptions = {
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: true,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        color: '#e9e9e9',
                    },
                    ticks: {
                        display: true,
                        beginAtZero: false,
                        stepSize: 0,
                        fontColor: '#6c7293'
                    }
                }],


            },
            legend: {
                display: false,
            },
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.000001
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<div class="row">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<div class="col-sm-6 col mr-3 ml-3 ml-sm-0 mr-sm-0 pr-md-0"><div class="py-4"><span class="legend-label" style="background-color:' + chart.data.datasets[i].backgroundColor[i] + '"></span><span class="chart-label">' + chart.data.datasets[i].label + '</span><span class="chart-label-count"> $' + chart.data.datasets[0].data[i] + '</span></div>');
                    text.push('</div>');
                }
                text.push('</div>');
                return text.join("");
            },
        };
        if ($("#visitors-dark").length) {
            var lineChartCanvas = $("#visitors-dark").get(0).getContext("2d");
            if (screen.width > 767) {
                var chartHeight = document.getElementById("visitors-dark");
                chartHeight.height = 110;
            }
            var visitorschart = new Chart(lineChartCanvas, {
                type: 'line',
                data: visitorsDarkData,
                options: visitorsDarkOptions
            });
            document.getElementById('chart-visitors-legend-dark').innerHTML = visitorschart.generateLegend();
        }
        var resourcesOverviewData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: 'Sessions',
                    data: [20, 69, 73, 66, 69, 73, 40, 59, 63, 91, 73, 40, 73],
                    backgroundColor: [
                        '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7',
                    ],
                    borderColor: [
                        '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7'
                    ],
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'New Users',
                    data: [11, 12, 1, 26, 12, 20, 2, 7, 18, 7, 7, 24, 7],
                    backgroundColor: [
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                    ],
                    borderColor: [
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                    ],
                    borderWidth: 1,
                    fill: false
                }]
        };
        var resourcesOverviewOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 0.4,
                    stacked: true,
                    gridLines: {
                        display: false, //this will remove only the label
                        drawBorder: false,
                        color: "#eaeaea",
                    },
                    ticks: {
                        display: true,
                        fontColor: "#6c7293",
                    }
                }],
                yAxes: [{
                    stacked: true,
                    display: true,
                    gridLines: {
                        display: true, //this will remove only the label
                        drawBorder: false,
                        color: "#eaeaea",
                    },
                    ticks: {
                        display: false,
                        stepSize: 40,
                        color: '#6c7293',
                    }
                }]
            },
            legend: {
                display: false,
                position: "bottom"
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        };
        if ($("#resources-overview").length) {
            var barChartCanvas = $("#resources-overview").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            if (screen.width > 767) {
                var ctx = document.getElementById("resources-overview");
                ctx.height = 88;
            }
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                data: resourcesOverviewData,
                options: resourcesOverviewOptions
            });
        }
        var resourcesOverviewDarkData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: 'Sessions',
                    data: [20, 69, 73, 66, 69, 73, 40, 59, 63, 91, 73, 40, 73],
                    backgroundColor: [
                        '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7',
                    ],
                    borderColor: [
                        '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7'
                    ],
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'New Users',
                    data: [11, 12, 1, 26, 12, 20, 2, 7, 18, 7, 7, 24, 7],
                    backgroundColor: [
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                    ],
                    borderColor: [
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                    ],
                    borderWidth: 1,
                    fill: false
                }]
        };
        var resourcesOverviewDarkOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 0.4,
                    stacked: true,
                    gridLines: {
                        display: false, //this will remove only the label
                        drawBorder: false,
                        color: "#eaeaea",
                    },
                    ticks: {
                        display: true,
                        fontColor: "#6c7293",
                    }
                }],
                yAxes: [{
                    stacked: true,
                    display: true,
                    gridLines: {
                        display: true, //this will remove only the label
                        drawBorder: false,
                        color: "#313235",
                    },
                    ticks: {
                        display: false,
                        stepSize: 40,
                        color: '#6c7293',
                    }
                }]
            },
            legend: {
                display: false,
                position: "bottom"
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        };
        if ($("#resources-overview-dark").length) {
            var barChartCanvas = $("#resources-overview-dark").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            if (screen.width > 767) {
                var ctx = document.getElementById("resources-overview-dark");
                ctx.height = 88;
            }
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                data: resourcesOverviewDarkData,
                options: resourcesOverviewDarkOptions
            });
        }
        if ($('#circleProgress1').length) {
            var bar = new ProgressBar.Circle(circleProgress1, {
                color: '#001737',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 10,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#464dee',
                    width: 10
                },
                to: {
                    color: '#464dee',
                    width: 10
                },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + '%' + '<div class="text-small text-muted">PROFIT</div>');
                    }

                }
            });

            bar.text.style.fontSize = '1.25rem';
            bar.text.style.fontWeight = 'bold';
            bar.text.style.align = 'center';
            bar.animate(.64); // Number from 0.0 to 1.0
        }
        if ($('#circleProgressdark1').length) {
            var bar = new ProgressBar.Circle(circleProgressdark1, {
                color: '#b1b1b1',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 10,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#464dee',
                    width: 10
                },
                to: {
                    color: '#464dee',
                    width: 10
                },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + '%' + '<div class="text-small text-muted">PROFIT</div>');
                    }

                }
            });

            bar.text.style.fontSize = '1.25rem';
            bar.text.style.fontWeight = 'bold';
            bar.text.style.align = 'center';
            bar.animate(.64); // Number from 0.0 to 1.0
        }
        if ($('#circleProgress2').length) {
            var bar = new ProgressBar.Circle(circleProgress2, {
                color: '#001737',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 10,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#0ddbb9',
                    width: 10
                },
                to: {
                    color: '#0ddbb9',
                    width: 10
                },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + '%' + '<br><span class="text-small text-muted">SALES</span>');
                    }

                }
            });

            bar.text.style.fontSize = '1.25rem';
            bar.text.style.fontWeight = 'bold';
            bar.text.style.align = 'center';
            bar.animate(.75); // Number from 0.0 to 1.0
        }
        if ($('#circleProgressdark2').length) {
            var bar = new ProgressBar.Circle(circleProgressdark2, {
                color: '#b1b1b1',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 10,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#0ddbb9',
                    width: 10
                },
                to: {
                    color: '#0ddbb9',
                    width: 10
                },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + '%' + '<br><span class="text-small text-muted">SALES</span>');
                    }

                }
            });

            bar.text.style.fontSize = '1.25rem';
            bar.text.style.fontWeight = 'bold';
            bar.text.style.align = 'center';
            bar.animate(.75); // Number from 0.0 to 1.0
        }
        var salesOverviewData = {
            labels: ["Rice", "Atta", "Bournvita", "Milk", "Oil", "Spices"],
            datasets: [{
                label: 'Purchase schedules',
                data: [511, 110, 620, 511, 110, 620],
                backgroundColor: [
                    '#696df1', '#07c2e7', '#d0964a','#d4b374', '#f37e7c', '#ad9c58',
                ],
                borderColor: [
                    '#696df1', '#07c2e7', '#d0964a','#d4b374', '#f37e7c', '#ad9c58',
                ],
                borderWidth: 1,
                fill: true
            }
            ]
        };
        var salesOverviewOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 0.1,
                    position: 'bottom',
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        color: "#eaeaea",
                    },
                    ticks: {
                        display: false, //this will remove only the label
                        stepSize: 1000,
                    }
                }],
                yAxes: [{
                    barPercentage: 1,
                    categoryPercentage: .5,
                    display: true,
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        color: "#eaeaea",
                        borderDash: [8, 1],
                    },
                    ticks: {
                        display: true,
                        beginAtZero: true,
                    },
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false,
                backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            plugins: {
                datalabels: {
                    display: true,
                    align: 'center',
                    anchor: 'center'
                }
            }
        };
        if ($("#sales-overview").length) {
            var barChartCanvas = $("#sales-overview").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            var barChart = new Chart(barChartCanvas, {
                type: 'horizontalBar',
                data: salesOverviewData,
                options: salesOverviewOptions
            });
        }
        var salesOverviewDarkData = {
            labels: ["Desktop", "Smartphones", "Tablets"],
            datasets: [{
                label: 'New Tickets',
                data: [2260, 3340, 2770],
                backgroundColor: [
                    '#0ddbb9', '#464dee', '#fcd539',
                ],
                borderColor: [
                    '#0ddbb9', '#464dee', '#fcd539',
                ],
                borderWidth: 1,
                fill: false
            }
            ]
        };
        var salesOverviewDarkOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 0.1,
                    position: 'bottom',
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        color: "#313235",
                    },
                    ticks: {
                        display: true, //this will remove only the label
                        stepSize: 300,
                    }
                }],
                yAxes: [{
                    barPercentage: 1,
                    categoryPercentage: .5,
                    display: true,
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        color: "#eaeaea",
                        borderDash: [8, 4],
                    },
                    ticks: {
                        display: true,
                        beginAtZero: true,
                    },
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false,
                backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            plugins: {
                datalabels: {
                    display: false,
                    align: 'center',
                    anchor: 'center'
                }
            }
        };
        if ($("#sales-overview-dark").length) {
            var barChartCanvas = $("#sales-overview-dark").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            var barChart = new Chart(barChartCanvas, {
                type: 'horizontalBar',
                data: salesOverviewDarkData,
                options: salesOverviewDarkOptions
            });
        }
        if ($("#inline-datepicker-dashboard").length) {
            $('#inline-datepicker-dashboard').datepicker({
                enableOnReadonly: true,
                todayHighlight: true,
            });
        }


        var nutrientData = {
            labels: ["Bread", "Milk", "Soda", "Beer"],
            datasets: [{
                label: 'Nutrient Data',
                data: [120, 340, 270, 234],
                backgroundColor: [
                    'rgb(255, 159, 64, 0.5)', 'rgb(255, 205, 86, 0.5)', 'rgb(54, 162, 235, 0.5)', 'rgb(153, 102, 255, 0.5)',
                ],
                borderColor: [
                    'rgb(255, 159, 64, 0.5)', 'rgb(255, 205, 86, 0.5)', 'rgb(54, 162, 235, 0.5)', 'rgb(153, 102, 255, 0.5)',
                ],
                borderWidth: 1,
                fill: false
            }
            ]
        };

        var nutrientOptions = {
                responsive: true,
                legend: {
                    display: true,
                    position: 'right',
                },
                title: {
                    display: false,
                    text: ''
                },
                scale: {
                    ticks: {
                        beginAtZero: true
                    },
                    reverse: false
                },
                animation: {
                    animateRotate: true,
                    animateScale: true
                }
        };

        if ($("#nutrientIntakes").length) {
            var barChartCanvas = $("#nutrientIntakes").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            var barChart = new Chart(barChartCanvas, {
                type: 'polarArea',
                data: nutrientData,
                options: nutrientOptions
            });
        }


        if ($('#Cal').length) {
            var bar = new ProgressBar.Circle(Cal, {
                color: '#62E79A',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailColor: '#E7FFD5',
                trailWidth: 10,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#E5FFD5',
                    width: 10
                },
                to: {
                    color: '#8CEC86',
                    width: 10
                },
                // Set default step function for all animate calls
                step: function (state, circle) {

                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);
                    circle.path.setAttribute('trailColor', '#000000');

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText('<div class="circle_label">Cal</div>' + '<div class="circle_number text-center">' + value + '' + '</div>');
                    }

                }
            });

            bar.text.style.align = 'center';
            bar.animate(.75); // Number from 0.0 to 1.0
        }

        if ($('#Fats').length) {
            var bar = new ProgressBar.Circle(Fats, {
                color: '#FF428B',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailColor: '#FED8E5',
                trailWidth: 10,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#FF5D95',
                    width: 10
                },
                to: {
                    color: '#FF5D95',
                    width: 10
                },
                // Set default step function for all animate calls
                step: function (state, circle) {

                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);
                    circle.path.setAttribute('trailColor', '#000000');

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText('<div class="circle_label">Fats</div>' + '<div class="circle_number text-center">' + value + '' + '</div>');
                    }

                }
            });

            bar.text.style.align = 'center';
            bar.animate(.25); // Number from 0.0 to 1.0
        }

        if ($('#Carbs').length) {
            var bar = new ProgressBar.Circle(Carbs, {
                color: '#29A5F7',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailColor: '#DBF2FF',
                trailWidth: 10,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#29A5F7',
                    width: 10
                },
                to: {
                    color: '#29A5F7',
                    width: 10
                },
                // Set default step function for all animate calls
                step: function (state, circle) {

                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);
                    circle.path.setAttribute('trailColor', '#000000');

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText('<div class="circle_label">Carbs</div>' + '<div class="circle_number text-center">' + value + '' + '</div>');
                    }

                }
            });

            bar.text.style.align = 'center';
            bar.animate(.85); // Number from 0.0 to 1.0
        }




        var visitorsData = {
            labels: ["03/05", "03/06", "03/07", "03/08", "03/09", "03/10", "03/11", "Aug", "03/12", "03/13", "03/14", "03/15"],
            datasets: [{
                label: 'Rice',
                data: [50, 36, 67, 41, 94, 65, 67, 45, 37, 59, 57, 45],
                backgroundColor: [
                    '#4c53ee',
                ],
                borderColor: [
                    '#4c53ee',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee'],

            }, {
                label: 'Atta',
                data: [36, 2, 44, 16, 60, 124, 24, 39, 29, 16, 110, 35],
                backgroundColor: [
                    '#0ddbb9',
                ],
                borderColor: [
                    '#0ddbb9',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9'],

            }, {
                label: 'Bread',
                data: [11, 21, 44, 6, 30, 12, 24, 11, 56, 16, 10, 15],
                backgroundColor: [
                    '#07c2e7',
                ],
                borderColor: [
                    '#07c2e7',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9'],

            }

            ],
        };

        var visitorsOptions = {
            scales: {
                yAxes: [{
                    display: true
                }],
                xAxes: [{
                    display: true,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        color: '#e9e9e9',
                    },
                    ticks: {
                        display: true,
                        beginAtZero: false,
                        stepSize: 0,
                        fontColor: '#6c7293'
                    }
                }],


            },
            legend: {
                display: false,
            },
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.000001
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<div class="row">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<div class="col-sm-6 col mr-3 ml-3 ml-sm-0 mr-sm-0 pr-md-0"><div class="py-4"><span class="legend-label" style="background-color:' + chart.data.datasets[i].backgroundColor[i] + '"></span><span class="chart-label">' + chart.data.datasets[i].label + '</span><span class="chart-label-count">' + chart.data.datasets[0].data[i] + '</span></div>');
                    text.push('</div>');
                }
                text.push('</div>');
                return text.join("");
            },
        };
        if ($("#buying_cycle").length) {
            var lineChartCanvas = $("#buying_cycle").get(0).getContext("2d");
            if (screen.width > 767) {
                var chartHeight = document.getElementById("buying_cycle");
                chartHeight.height = 110;
            }
            var visitorschart = new Chart(lineChartCanvas, {
                type: 'line',
                data: visitorsData,
                options: visitorsOptions
            });
            document.getElementById('chart-visitors-legend').innerHTML = visitorschart.generateLegend();
        }


        var ordersViewData = {
            labels: ["03/05", "03/06", "03/07", "03/08", "03/09", "03/10", "03/11", "Aug", "03/12", "03/13", "03/14", "03/15"],
            datasets: [{
                label: 'Order placed',
                data: [50, 36, 67, 41, 94, 65, 67, 45, 37, 59, 57, 45],
                backgroundColor: [
                    '#4c53ee',
                ],
                borderColor: [
                    '#4c53ee',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee', '#4c53ee'],

            }, {
                label: 'Order Cancelled',
                data: [36, 2, 44, 16, 60, 124, 24, 39, 29, 16, 110, 35],
                backgroundColor: [
                    '#f44336',
                ],
                borderColor: [
                    '#f44336',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#f44336', '#f44336', '#f44336', '#f44336', '#f44336', '#f44336', '#f44336', '#f44336', '#f44336', '#f44336', '#f44336', '#f44336', '#f44336', '#f44336'],

            }, {
                label: 'Order refunded',
                data: [3, 9, 5, 33, 21, 233, 24, 139, 229, 123, 111, 5],
                backgroundColor: [
                    '#0ddbb9',
                ],
                borderColor: [
                    '#0ddbb9',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9', '#0ddbb9'],

            }, {
                label: 'Orders Delivered',
                data: [23, 2, 4, 2, 80, 23, 4, 19, 29, 16, 12, 10],
                backgroundColor: [
                    '#fe9000',
                ],
                borderColor: [
                    '#fe9000',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#fe9000', '#fe9000', '#fe9000', '#fe9000', '#fe9000', '#fe9000', '#fe9000', '#fe9000', '#fe9000', '#fe9000', '#fe9000', '#fe9000', '#fe9000', '#fe9000'],

            }, {
                label: 'Orders Picked',
                data: [8, 6, 4, 0, 0, 56, 24, 12, 16, 6, 9, 28],
                backgroundColor: [
                    '#95c100',
                ],
                borderColor: [
                    '#95c100',
                ],
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
                pointBackgroundColor: ['#95c100', '#95c100', '#95c100', '#95c100', '#95c100', '#95c100', '#95c100', '#95c100', '#95c100', '#95c100', '#95c100', '#95c100', '#95c100', '#95c100'],

            }

            ],
        };

        var ordersViewOptions = {
            scales: {
                yAxes: [{
                    display: true
                }],
                xAxes: [{
                    display: true,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        color: '#e9e9e9',
                    },
                    ticks: {
                        display: true,
                        beginAtZero: false,
                        stepSize: 0,
                        fontColor: '#6c7293'
                    }
                }],


            },
            legend: {
                display: true,
                position: 'top',
            },
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.000001
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<div class="row">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<div class="col-sm-3 text-left mb-10 col mr-3 ml-3 ml-sm-0 mr-sm-0 pr-md-0"><div class="py-4"><span class="legend-label" style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span><span class="chart-label">' + chart.data.datasets[i].label + '</span><span class="chart-label-count">' + chart.data.datasets[0].data[i] + '</span></div>');
                    text.push('</div>');
                }
                text.push('</div>');
                return text.join("");
            },
        };
        if ($("#Orders").length) {
            var lineChartCanvas = $("#Orders").get(0).getContext("2d");
            if (screen.width > 767) {
                var chartHeight = document.getElementById("Orders");
                chartHeight.height = 110;
            }
            var orderschart = new Chart(lineChartCanvas, {
                type: 'line',
                data: ordersViewData,
                options: ordersViewOptions
            });
            document.getElementById('chart-Orders-legend').innerHTML = orderschart.generateLegend();
        }


        var frequentlyOrdersData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: 'Milk',
                    data: [20, 69, 73, 66, 69, 73, 40, 59, 63, 91, 73, 40, 73],
                    backgroundColor: [
                        '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7',
                    ],
                    borderColor: [
                        '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7'
                    ],
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'Bread',
                    data: [11, 12, 1, 26, 12, 20, 2, 7, 18, 7, 7, 24, 7],
                    backgroundColor: [
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                    ],
                    borderColor: [
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                    ],
                    borderWidth: 1,
                    fill: false
                }]
        };
        var frequentlyOrdersOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 0.4,
                    stacked: true,
                    gridLines: {
                        display: false, //this will remove only the label
                        drawBorder: false,
                        color: "#eaeaea",
                    },
                    ticks: {
                        display: true,
                        fontColor: "#6c7293",
                    }
                }],
                yAxes: [{
                    stacked: true,
                    display: true,
                    gridLines: {
                        display: true, //this will remove only the label
                        drawBorder: false,
                        color: "#eaeaea",
                    },
                    ticks: {
                        display: false,
                        stepSize: 40,
                        color: '#6c7293',
                    }
                }]
            },
            legend: {
                display: false,
                position: "bottom"
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        };
        if ($("#Frequently-Orders").length) {
            var barChartCanvas = $("#Frequently-Orders").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            if (screen.width > 767) {
                var ctx = document.getElementById("Frequently-Orders");
                ctx.height = 88;
            }
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                data: frequentlyOrdersData,
                options: frequentlyOrdersOptions
            });
        }


        var frequentlyOrdersData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: 'Jerry-s Kitchen',
                    data: [20, 69, 73, 66, 69, 73, 40, 59, 63, 91, 73, 40, 73],
                    backgroundColor: [
                        '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7',
                    ],
                    borderColor: [
                        '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7', '#0ad7f7'
                    ],
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'Guru Groceries and Chaat House',
                    data: [3, 45, 12, 66, 16, 24, 2, 27, 18, 17, 1, 14, 34],
                    backgroundColor: [
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                    ],
                    borderColor: [
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                        '#464dee',
                    ],
                    borderWidth: 1,
                    fill: false
                }]
        };
        var frequentlyOrdersOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 0.4,
                    stacked: true,
                    gridLines: {
                        display: false, //this will remove only the label
                        drawBorder: false,
                        color: "#eaeaea",
                    },
                    ticks: {
                        display: true,
                        fontColor: "#6c7293",
                    }
                }],
                yAxes: [{
                    stacked: true,
                    display: true,
                    gridLines: {
                        display: true, //this will remove only the label
                        drawBorder: false,
                        color: "#eaeaea",
                    },
                    ticks: {
                        display: false,
                        stepSize: 40,
                        color: '#6c7293',
                    }
                }]
            },
            legend: {
                display: false,
                position: "bottom"
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        };
        if ($("#Frequently-used-store").length) {
            var barChartCanvas = $("#Frequently-used-store").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            if (screen.width > 767) {
                var ctx = document.getElementById("Frequently-used-store");
                ctx.height = 88;
            }
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                data: frequentlyOrdersData,
                options: frequentlyOrdersOptions
            });
        }


    });
})(jQuery);