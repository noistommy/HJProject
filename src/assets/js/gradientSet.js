const makeGradientSet = (target, setNum, config, colors, reverse) => {
    let colorSet = colors
    if (reverse === 'reverse') { colorSet = colorSet.reverse() }
    const gradientSet = []
    const list = Array.from(new Array(setNum), (x, i) => { return i })
    list.forEach((value, i) => {
        const gradient = target.getContext('2d').createLinearGradient(config.start.posx, config.start.posy, config.end.posx, config.end.posy)
        gradient.addColorStop(0, colorSet[i].start)
        gradient.addColorStop(1, colorSet[i].end)
        gradientSet.push(gradient)
    })
    return gradientSet
}
export default { makeGradientSet }
