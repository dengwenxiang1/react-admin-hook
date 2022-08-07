import axios from 'axios';
export default function ajax(url,data={},type='GET'){
   return new Promise((resolve,rejct)=>{
     let promise;
      if(type==="GET"){
        promise=axios.get(url,{
            params:DataView
        })
      }else if(type==='POST'){
        promise=axios.post(url,data)
      }else{
        promise=axios.put(url,data)
      }
      promise.then(response=>{
        resolve(response.data)
       })
       .catch(error=>{
        message.error('请求出错了：'+error.message)
       })
   })
};