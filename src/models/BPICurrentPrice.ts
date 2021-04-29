import { Any, JsonConvert, JsonObject, JsonProperty } from "json2typescript"

@JsonObject("Time")
class Time{
    @JsonProperty("updated", String, true)
    updated?: string = undefined
    @JsonProperty("updatedISO", String, true)
    updatedISO?: string = undefined
    @JsonProperty("updateduk", String, true)
    updateduk?: string = undefined
}

@JsonObject("BPI")
class BPI {
    @JsonProperty("code", String, true)
    code?: string = undefined
    @JsonProperty("description", String, true)
    description?: string = undefined
    @JsonProperty("rate", String, true)
    rate?: string = undefined
    @JsonProperty("rate_float", Number, true)
    rate_float?: number = undefined
    @JsonProperty("symbol", String, true)
    symbol?: string = undefined
}

@JsonObject("BPICurrentPrice")
export default class BPICurrentPrice{
    @JsonProperty("time", Time, true)
    time?: Time = undefined
    @JsonProperty("disclaimer", String, true)
    disclaimer?: string = undefined
    @JsonProperty("chartName", String, true)
    chartName?: string = undefined
    @JsonProperty("bpi", Object, true)
    bpi?: BPI = undefined
}