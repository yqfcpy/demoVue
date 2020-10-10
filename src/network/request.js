import axios from 'axios'
export function request (config) {
  const instance = axios.create({
    baseURL: 'http://qingfeng.myq-see.com',
    timeout: 5000
  })
  // 拦截器
  // axios.interceptors 全局拦截
  // 我们拦截局部 request请求拦截 response返回 响应返回
  // 请求拦截
  instance.interceptors.request.use(config => {
    // 成功的拦截
    console.log(config)
    return config
  }, err => {
    // 失败的请求 如果请求成功了就不会进入到失败里
    // 一般很少到这里 因为请求很少是没有发送出去的时候
    console.log(err)
    return err
  })
  // 响应的拦截
  instance.interceptors.response.use(result => {
    // 响应成功
    console.log(result)
    // 很多东西被返回实际上我只要 result.data
    return result.data
  }, err => {
    // 响应失败
    console.log(err)
    return err
  })

  return instance(config)
}
