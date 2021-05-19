import { JsonObject, JsonProperty, Any } from "json2typescript";

@JsonObject("Attributes")

class Attributes {
    @JsonProperty("cover_uploaded", Any, true)
    cover_uploaded?: any = undefined
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
    @JsonProperty("size", Number, true)
    size?: number = undefined
    @JsonProperty("num_file", Number, true)
    num_file?: number = undefined
    @JsonProperty("freeleech", Number, true)
    freeleech?: number = undefined
    @JsonProperty("double_upload", Number, true)
    double_upload?: number = undefined
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