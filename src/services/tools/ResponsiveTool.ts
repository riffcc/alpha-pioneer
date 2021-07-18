import Vue from "vue"

//Here's all dynamic values about responsive display and text sizing.

export default class ResponsiveTool {
	static textSize(vue: Vue) {
		switch (vue.$vuetify.breakpoint.name) {
			case("xs"): return "text-size-4"
			case("sm"): return "text-size-5"
			case("md"): return "text-size-6"
			case("lg"): return "text-size-6"
			case("xl"): return "text-size-7"
		}
	}

	static subtitleTextSize(vue: Vue) {
		switch (vue.$vuetify.breakpoint.name) {
			case("xs"): return "text-size-2"
			case("sm"): return "text-size-2"
			case("md"): return "text-size-2"
			case("lg"): return "text-size-2"
			case("xl"): return "text-size-2"
		}
	}

}