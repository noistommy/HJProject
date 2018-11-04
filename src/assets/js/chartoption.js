const baseOptions = {
    animation: {
        duration: 1000,
        // easing: 'easeOutBounce',
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                padding: 5,
                fontColor: '#ffffff',
                maxTicksLimit: 11,
                // stepSize: 0.5,
                // max: 0,
                // min: 0,
            },
            scaleLabel: {
                display: true,
                labelString: 'yAxes',
                fontColor: 'white',
            },
            gridLines: {
                display: true,
                color: 'rgba(255, 255, 255, .1)',
                zeroLineColor: 'rgba(255, 255, 255, .8)',
                zeroLineWidth: 2,
                drawBorder: true,
            },
        }],
        xAxes: [{
            ticks: {
                beginAtZero: true,
                fontColor: '#ffffff',
            },
            scaleLabel: {
                display: true,
                labelString: '',
                fontColor: 'white',
            },
            gridLines: {
                display: true,
                color: 'rgba(255, 255, 255, .1)',
            },
        }],
    },
    legend: {
        display: true,
        padding: 10,
        labels: {
            fontColor: '#ffffff',
            fontSize: 12,
            boxWidth: 12,
        },
    },
    // tooltips: {
    //     backgroundColor: '#3d4abf',
    //     borderColor: '#ffffff',
    //     borderWidth: 1,
    //     caretSize: 3,
    // },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        datalabels: {
            display: false,
        },
    },
}

const barOptions = {
    scales: {
        xAxes: [{
            categoryPercentage: 0.5,
            barPercentage: 0.6,
        }],
        yAxes: [{
            ticks: {
                callback: (value, index, valuse) => {
                    let result = value
                    if (value >= 100000000 || value <= -100000000) {
                        value = parseFloat((value * 0.00000001).toFixed(1))
                        result = `${value}억`
                    } else if (value >= 100000 || value <= -100000) {
                        value = value * 0.0001
                        result = `${value}만`
                    } else {
                        result = value
                    }
                    return result
                },
            },
        }],
    },
    legend: {
        display: true,
        labels: {
            fontSize: 15,
            boxSize: 15,
        },
    },
}
const horizontalBarOptions = {
    scales: {
        yAxes: [{
            categoryPercentage: 0.5,
            barPercentage: 0.6,
        }],
        xAxes: [{
            gridLines: {
                display: true,
                color: 'rgba(255, 255, 255, .1)',
                zeroLineColor: 'rgba(255, 255, 255, .8)',
                zeroLineWidth: 2,
                drawBorder: true,
            },
            ticks: {
                callback: (value, index, valuse) => {
                    // return `${value}%`
                    let result = '0'
                    if (value > 100) {
                        result = '초과'
                    } else {
                        result = `${value}%`
                    }
                    return result
                },
            },
        }],
    },
    plugins: {
        datalabels: {
            display: true,
            align: 'end',
            anchor: 'end',
            color: '#ffffff',
            offset: 0,
            font: {
                size: 20,
                family: 'Bebas Neue',
            },
            formatter: (value, context) => {
                let result = '0'
                if (value === 120) {
                    result = '완료'
                } else {
                    result = `${value}%`
                }
                return result
            },
        },
    },
}
const barStackOptions = {
    scales: {
        yAxes: [{
            stacked: true,
            ticks: {
                callback: (value, index, valuse) => {
                    let result = value
                    if (value >= 100000000 || value <= -100000000) {
                        value = parseFloat((value * 0.00000001).toFixed(1))
                        result = `${value}억`
                    } else if (value >= 10000000 || value <= -10000000) {
                        value = value * 0.0000001
                        result = `${value}천만`
                    } else {
                        result = value
                    }
                    return result
                },
            },
        }],
        xAxes: [{
            // categoryPercentage: 0.5,
            barPercentage: 0.5,
            stacked: true,
        }],
    },
    legend: {
        display: true,
        position: 'left',
    },
}

const stackGroupOptions = {
    scales: {
        yAxes: [{
            id: 'y-axis-0',
            position: 'left',
            stacked: true,
            ticks: {
                fontColor: '#ffffff',
                callback: (value, index, valuse) => {
                    let result = value
                    if (value >= 100000000 || value <= -100000000) {
                        value = parseFloat((value * 0.00000001).toFixed(1))
                        result = `${value}억`
                    }
                    return result
                },
            },
        },
        {
            id: 'y-axis-1',
            position: 'right',
            stacked: true,
            ticks: {
                fontColor: '#ffffff',
                callback: (value, index, valuse) => {
                    let result = value
                    if (value >= 100000000 || value <= -100000000) {
                        value = parseFloat((value * 0.00000001).toFixed(1))
                        result = `${value}억`
                    }
                    return result
                },
            },
        }],
        xAxes: [{
            categoryPercentage: 0.5,
            barPercentage: 0.6,
            stacked: true,
        }],
    },
    legend: {
        display: true,
        position: 'left',
    },
}
const mixedOptions = {
    scales: {
        yAxes: [{
            id: 'y-axis-0',
            position: 'left',
            ticks: {
                callback: (value, index, valuse) => {
                    let result = value
                    if (value >= 10000) {
                        value = parseFloat((value * 0.0001).toFixed(1))
                        result = `${value}만`
                    } else {
                        result = value
                    }
                    return result
                },
            },
        },
        {
            id: 'y-axis-1',
            position: 'right',
            ticks: {
                callback: (value, index, valuse) => {
                    let result = value
                    if (value >= 10000) {
                        value = parseFloat((value * 0.0001).toFixed(1))
                        result = `${value}만`
                    } else {
                        result = value
                    }
                    return result
                },
            },
        }],
        xAxes: [{
            categoryPercentage: 0.5,
            barPercentage: 0.6,
        }],
    },
}

const lineOptions = {
    scales: {
        yAxes: [{
            ticks: {
                callback: (value, index, valuse) => {
                    let result = value
                    if (value >= 10000) {
                        value = parseFloat((value * 0.0001).toFixed(1))
                        result = `${value}만`
                    } else {
                        result = value
                    }
                    return result
                },
            },
        }],
    },
    elements: {
        line: {
            tension: 0,
        },
    },
}

const doughnutOptions = {
    tooltips: {
        enabled: false,
    },
    legend: {
        display: false,
        labels: {
        boxWidth: 12,
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 60,
}

const halfDoughnutOptions = {
    animation: {
        duration: 1000,
    },
    legend: {
        display: false,
        labels: {
        boxWidth: 12,
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    cutoutPercentage: 80,
}

const pieOptions = {
    animation: {
        duration: 1000,
    },
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            boxWidth: 12,
            fontColor: '#ffffff',
        },
    },
    cutoutPercentage: 45,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        datalabels: {
            display: true,
            align: 'end',
            anchor: 'center',
            color: '#ffffff',
            offset: -10,
            font: {
                size: 40,
                family: 'Bebas Neue',
            },
            formatter: (value, context) => {
                let result = 0
                if (value > 5) {
                    result = `${value}%`
                } else {
                    result = ''
                }
                return result
            },
        },
    },
}

const pluginOptions = {
    plugins: {
        datalabels: {
            align: 'top',
            anchor: 'end',
            backgroundColor: '#3d4abf',
            color: '#ffffff',
            offset: 0,
            font: {
                size: '30px',
            },
        },
    },
    annotation: {
        drawTime: 'afterDatasetsDraw',
        events: ['click'],
        annotations: [
            {
                drawTime: 'afterDraw',
                id: 'hline',
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 18,
                borderColor: '#ffffff',
                borderWidth: 1,
                borderDash: [5, 2],
                label: {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    content: 'Test Label',
                    enabled: true,
                    position: 'right',
                    yAdjust: -10,
                },
            },
        ],
    },
}


export { baseOptions, barOptions, mixedOptions, horizontalBarOptions, barStackOptions, stackGroupOptions, lineOptions, doughnutOptions, halfDoughnutOptions, pieOptions, pluginOptions }
