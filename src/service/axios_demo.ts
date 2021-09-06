import axios from 'axios'
//axios 实例对象
// 1.获取参数
/* axios.get('http://httpbin.org/get').then((res) => {
  console.log(res.data)
}) */
/* 4.axios的全局配置选项 */
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
axios.defaults.headers = {}
/* 2.get请求，并且传入参数 */
axios
  .get('/get', {
    params: {
      name: 'aben',
      age: 18
    },
    /* 4.axios的局部配置选项 */
    timeout: 2000,
    headers: {}
  })
  .then((res) => {
    console.log(res.data)
  })
/* 3.post请求 */
axios
  .post('/post', {
    data: {
      name: 'aben2',
      age: '18'
    }
  })
  .then((res) => {
    console.log(res.data)
  })
/* 4.axiosd 配置选项 */

/* axios.get(url)这里返回的是promise的泛型 ，是一个axiosresponse对象类型。因此我们用面then来接受promise*/
//promise本身是有类型的
/* 我们都知道then是来承接resolve的参数的，但是这里我们对resolve声明了一个字符串，而then接受到不会识别他是个字符串，而是unknown
因此，我们需要在一开始进行promise类调用的时候进行泛型申明该类参数为字符串类型 */
/* new Promise<string>((resolve, reject) => {
	resolve('12345 ')
}).then((res) => {

}) */
/*
axios.request({
	method:'GET'
}) */
/* 5.axios.all */
/* 多个请求，在数据返回的时候一起返回 ,
这里返回的实际上是个数组 ,并且该数组的真实数据都是存放在data中*/
axios
  .all([
    axios.get('/get', { params: { name: 'why', age: 18 } }),
    axios.post('/post', { data: { name: 'why', age: 18 } })
  ])
  .then((res) => {
    console.log(res)
    // console.log(res[0].data)
    // console.log([1])
  })
//6.axios的拦截器
//假如每个请求都需要使用token，那么我们事实上是要写在头部headers中的，而token是需要系统进行验证的，这个时候我们就需要在axios中进行拦截
//还有另一个可能就是请求停留时间较长，我们就需要进行提示，并且加载loading组件。
//拦截请求 fn1表示发送成功会执行的函数，fn2请求发送失败会发送的函数
axios.interceptors.request.use(
  (config) => {
    //  在你拦截的地方进行需要的操作，例如这里改变方法
    //config.url = '/post'
    console.log('请求成功拦截')
    return config
  },
  (err) => {
    console.log('发送错误')
    return err
  }
)
//拦截响应 fn1数据响应成功（服务器正常返回数据，20x状态码），fn2数据响应失败（40x或50x）
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res.data
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
