
import Torrent from "@/models/Torrent"
import { Any } from "json2typescript"
import Vue from "vue"
import ConstantTool from "./tools/ConstantTool"
import JsonTool from "./tools/JsonTool"

export default class RiffService {
    
    static async getTorrents(component: Vue, torrents: Torrent[]) {

        //@ts-ignore
        component.loading = true

        try {
            const response = await component.axios.get(`https://u.riff.cc/api/torrents`,{
                params: {
                    api_token: ConstantTool.RIFF_API_TOKEN
                }
            })
            let convertedResponse = JsonTool.jsonConvert.deserializeArray(response.data.data, Torrent)
            console.log(response.data)
            torrents.splice(0, torrents.length)
            convertedResponse.forEach(t => torrents.push(t))

            //@ts-ignore
            component.loading = false
        } catch (err) {
            //@ts-ignore
            component.loading = false
            console.log(err)
        }
    }

    static async getTorrent(component: Vue, id: number, torrents: Torrent[]) {

        //@ts-ignore
        component.loading = true

        try {
            const response = await component.axios.get(`https://u.riff.cc/api/torrents/${id}/`, {
                params: {
                    api_token: ConstantTool.RIFF_API_TOKEN
                }
            })
            const convertedResponse = JsonTool.jsonConvert.deserializeObject(response.data, Torrent)
            

        } catch (err) {
            console.log(err)
        }
    }

    static async getTorrentPage(component: Vue, page: number, torrents: Torrent[]) {

        //@ts-ignore
        component.loading = true

        try {
            const response = await component.axios.get(`https://u.riff.cc/api/torrents/`, {
                params: {
                    page: page,
                    api_token: ConstantTool.RIFF_API_TOKEN
                }
            })
    
            const convertedResponse = JsonTool.jsonConvert.deserializeArray(response.data.data, Torrent)
            if (page == 1) {
                torrents.splice(0, torrents.length)
            }

            console.log(response.data)

            convertedResponse.forEach(t => torrents.push(t))
            
            //@ts-ignore
            component.page = (component.page + 1)
            //@ts-ignore
            component.loading = false

        } catch(err) {
            //@ts-ignore
            component.loading = false
        }
    }

    static async getFeaturedTorrents(component: Vue, URL: string, torrents: Torrent[]) {
        //@ts-ignore
        component.loading = true

        try {
            const mainJsonResponse = await component.axios.get(URL)
            let list = mainJsonResponse.data.featured
            torrents.splice(0, torrents.length)
            for (let id of list) {
                const response = await component.axios.get(`https://u.riff.cc/api/torrents/${id}/`, {
                    params: { api_token: ConstantTool.RIFF_API_TOKEN }
                })
                const convertedResponse = JsonTool.jsonConvert.deserializeObject(response.data, Torrent)
                torrents.push(convertedResponse)
            }
            //@ts-ignore
            component.loading = false
        } catch (err) {
            console.log(err)
            //@ts-ignore
            component.loading = false
        }
    }

    static getCoverURL(torrent: Torrent) {
        if (torrent.attributes?.cover_uploaded != null) {
            return `https://origin.riff.cc/covers/${torrent.id}.png`
        } else {
            return null
        }
    }
}