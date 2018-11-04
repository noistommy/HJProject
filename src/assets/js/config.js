const BaseURL = () => {
    let BASEURL = 'http://localhost/'
    const testenv = false
    if (testenv) {
        BASEURL = 'http://172.16.10.105:21009/charts/bi/management/favorite/'
    } else {
        BASEURL = 'http://192.168.0.21:21011/charts/bi/management/favorite/'
    }
    console.log(BASEURL)
    return BASEURL
}

export default { BaseURL }
