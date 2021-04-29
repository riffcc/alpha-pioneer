import BPICurrentPrice from "@/models/BPICurrentPrice"
import JsonTool from "./tools/JsonTool"

export default class CoindeskService {
    
    static async getBPICurrentPrice(component: Vue) {
        try {
            const response = await component.axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            let convertedResponse = JsonTool.jsonConvert.deserializeObject(response.data, BPICurrentPrice)
            // @ts-ignore
            component.bpiCurrentPrice = convertedResponse
        } catch (err) {
            console.log(err)
        }
    }
}