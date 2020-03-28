import axios from 'axios'


axios.interceptors.response.use(function (response) {
    const { data } = response
    // if (data.code === 0) {
    //     return data.data
    // } else {
    return data
    // }
    // Do something with response data
    // return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

const ajax = function (params) {
    const { url, method = "post", data = "" } = params
    if (method == "post") {
        return axios.post(url, data)
    }
    if (data) {
        return axios.get(url, {
            params: data
        })
    }
    return axios.get(url)

}

export default ajax