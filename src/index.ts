import { AxiosRequsetConfig } from './types/index';
import xhr from './xhr';


function axios(config:AxiosRequsetConfig):void{
    //TODO
    xhr(config)
}


export default axios