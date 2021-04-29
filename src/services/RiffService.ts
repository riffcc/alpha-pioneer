
import Torrent from "@/models/Torrent"
import ConstantTool from "./tools/ConstantTool"
import JsonTool from "./tools/JsonTool"

export default class CoindeskService {
    
    static async getTorrents(component: Vue, torrents: Torrent[]) {
        try {
            const response = await component.axios.get(`https://u.riff.cc/api/torrents/?api_token=${ConstantTool.RIFF_API_TOKEN}`)
            let convertedResponse = JsonTool.jsonConvert.deserializeArray(response.data.data, Torrent)
            torrents.splice(0, torrents.length)
            convertedResponse.forEach(t => torrents.push(t))
        } catch (err) {
            console.log(err)
        }
    }

    static async getTorrent(component: Vue, id: number) {
        try {
            const response = await component.axios.get(`https://u.riff.cc/api/torrents/${id}/?api_token=${ConstantTool.RIFF_API_TOKEN}`)
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }
}