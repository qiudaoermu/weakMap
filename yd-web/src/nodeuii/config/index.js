import _ from 'lodash';
import path from 'path';
let config = {
   "viewDir":path.join(__dirname,'../views')
}
const init = () =>{
    if(process.env.NODE_ENV=="development") {
        const localConfig = {
            port:8081
        }
        config = _.extend(localConfig)
    }
    if (process.env.NODE_ENV == "production"){
        const proconfig = {
            port: 80
        }
        config = _.extend(localConfig);
    }
    return config
}
const result = init()
export default result;