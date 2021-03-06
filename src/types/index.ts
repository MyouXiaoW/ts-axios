export type Method = 'get' | 'GET' 
| 'delete' | 'Delete' 
| 'head'|'HEAD'
|'options'|'OPTIONS'
|'post'|'POST'
|'put'|'PUT'
|'patch'|'PATCH'


export interface AxiosRequsetConfig{
    url:string
    method?:Method
    data?:any
    param?:any
}