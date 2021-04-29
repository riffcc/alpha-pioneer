import { JsonObject, JsonProperty, Any } from "json2typescript";

@JsonObject("Attributes")

class Attributes {
    @JsonProperty("name", String, true)
    name?: string = undefined    
    @JsonProperty("release_year", Any, true)
    release_year?: any = undefined
    @JsonProperty("category", String, true)
    category?: string = undefined
    @JsonProperty("type", String, true)
    type?: string = undefined
    @JsonProperty("resolution", Any, true)
    resolution?: any = undefined
    @JsonProperty("size", String, true)
    size?: string = undefined
    @JsonProperty("num_file", Number, true)
    num_file?: number = undefined
    @JsonProperty("freeleech", String, true)
    freeleech?: string = undefined
    @JsonProperty("double_upload", String, true)
    double_upload?: string = undefined
    @JsonProperty("uploader", String, true)
    uploader?: string = undefined
    @JsonProperty("seeders", Number, true)
    seeders?: number = undefined
    @JsonProperty("leechers", Number, true)
    leechers?: number = undefined
    @JsonProperty("times_completed", Number, true)
    times_completed?: number = undefined
    @JsonProperty("tmbd_id", String, true)
    tmdb_id?: string = undefined
    @JsonProperty("imbd_id", String, true)
    imdb_id?: string = undefined
    @JsonProperty("tvdb", String, true)
    tvdb_id?: string = undefined
    @JsonProperty("mal_id", String, true)
    mal_id?: string = undefined
    @JsonProperty("igdb_id", String, true)
    igdb_id?: string = undefined
    @JsonProperty("featured", Number, true)
    featured?: number = undefined
    @JsonProperty("tmbd_id", Any, true)
    stream_id?: any = undefined
    @JsonProperty("created_at", String, true)
    created_at?: string = undefined
    @JsonProperty("download_link", String, true)
    download_link?: string = undefined
}


@JsonObject("Torrent")

export default class Torrent {
    @JsonProperty("type", String, true)
    type?: string = undefined
    @JsonProperty("attributes", Attributes, true)
    attributes?: Attributes = undefined
    @JsonProperty("id", String, true)
    id?: string = undefined
}

/*{
    "links": {
        "first": "https://u.riff.cc/api/torrents?page=1",
        "last": "https://u.riff.cc/api/torrents?page=219",
        "prev": null,
        "next": "https://u.riff.cc/api/torrents?page=2",
        "self": "https://u.riff.cc/api/torrents"
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 219,
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
        ],
        "path": "https://u.riff.cc/api/torrents",
        "per_page": 15,
        "to": 15,
        "total": 3283
    }
}*/