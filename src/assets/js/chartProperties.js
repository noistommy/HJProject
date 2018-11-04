const setProperties = (chartData, colorsets, typeProps, chartType) => {
    const datasets = []
    chartData.forEach((value, i) => {
        const dataset = $.extend(true, {}, typeProps)
        dataset.label = value.label
        dataset.data = value.data
        dataset.backgroundColor = colorsets[i]
        dataset.hoverBackgroundColor = colorsets[i]
        if (chartType === 'line' || value.type === 'line') {
            dataset.pointBorderColor = colorsets[i]
            dataset.borderColor = colorsets[i]
        }
        if (chartType === 'doughnut') {
            dataset.backgroundColor = [colorsets[i], '#14161c']
            dataset.hoverBackgroundColor = [colorsets[i], '#14161c']
            dataset.borderWidth = 5
            dataset.borderColor = '#14161c'
        }
        if (chartType === 'halfDoughnut') {
            dataset.backgroundColor = [colorsets[i], '#373737']
            dataset.hoverBackgroundColor = [colorsets[i], '#373737']
            dataset.borderWidth = 1
            dataset.borderColor = '#14161c'
        }
        datasets.push(dataset)
    })
    return datasets
}

const setDoughnut = (chartData, colorsets, typeProps, chartType) => {
    const datasets = []
    const dataset1 = $.extend(true, {}, typeProps)
    const dataset2 = $.extend(true, {}, typeProps)

    dataset1.label = chartData[0].label
    dataset1.data = [chartData[0].data[0], chartData[0].data[1]]
    dataset1.backgroundColor = [colorsets[0], '#14161c']
    dataset1.hoverBackgroundColor = [colorsets[0], '#14161c']
    dataset1.borderWidth = 5
    dataset1.borderColor = '#14161c'
    datasets.push(dataset1)

    dataset2.label = chartData[0].label
    dataset2.data = [chartData[0].data[2], chartData[0].data[3]]
    dataset2.backgroundColor = [colorsets[1], '#14161c']
    dataset2.hoverBackgroundColor = [colorsets[1], '#14161c']
    dataset2.borderWidth = 5
    dataset2.borderColor = '#14161c'
    datasets.push(dataset2)

    return datasets
}

const setBarStackGroup = (chartData, colorsets, typeProps, stackId) => {
    const datasets = []
    chartData.forEach((value, i) => {
        let dataset = {}
        dataset = $.extend(true, {}, typeProps[0])
        dataset.label = value.label
        dataset.data = value.data
        dataset.backgroundColor = colorsets[i]
        dataset.hoverBackgroundColor = colorsets[i]
        if (value.type === 'bar') {
            dataset.yAxisID = 'y-axis-0'
            dataset.stack = `stack ${stackId[i]}`
        } else {
            dataset.pointBackgroundColor = 'white'
            dataset.pointBorderColor = colorsets[i]
            dataset.borderColor = colorsets[i]
            dataset.yAxisID = 'y-axis-1'
            dataset.type = value.type
            dataset.tension = 0
            dataset.fill = false
            dataset.borderDash = [8, 5]
        }
        datasets.push(dataset)
    })
    return datasets
}

const setMixed = (chartData, colorsets, typeProps) => {
    const datasets = []
    if (chartData.length < 2) {
        const lineData = {
            data: chartData[0].data,
            label: '추이',
            type: 'line',
        }

        chartData.push(lineData)
    }
    chartData.forEach((value, i) => {
        let dataset = {}
        dataset = $.extend(true, {}, typeProps[0])
        dataset.label = value.label
        dataset.data = value.data
        dataset.backgroundColor = colorsets[i]
        dataset.hoverBackgroundColor = colorsets[i]
        dataset.yAxisID = 'y-axis-0'
        if (value.type === 'line') {
            dataset.borderWidth = 1
            dataset.pointBackgroundColor = 'white'
            dataset.pointBorderColor = 'white'
            dataset.borderColor = 'white'
            dataset.yAxisID = 'y-axis-1'
            dataset.type = 'line'
            dataset.tension = 0
            dataset.fill = false
            dataset.borderDash = [5, 2]
        }
        datasets.push(dataset)
    })
    return datasets
}
export { setProperties, setDoughnut, setBarStackGroup, setMixed }
