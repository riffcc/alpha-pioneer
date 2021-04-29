
import ConstantTool from "./tools/ConstantTool"
import JsonTool from "./tools/JsonTool"

export default class CoindeskService {
    
    static async getSomething(component: Vue) {
        try {
            console.log(ConstantTool.RIFF_API_TOKEN)
            const response = await component.axios.get(`https://u.riff.cc/api/torrents/?api_token=`, {
                params: { api_token: ConstantTool.RIFF_API_TOKEN }
            })
        } catch (err) {
            console.log(err)
        }
    }
}