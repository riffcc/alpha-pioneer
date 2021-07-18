import Vue from "vue"

//Here's all dynamic values about responsive display and text sizing.

export default class ResponsiveService {
    
  static titleSize(vue: Vue) {
    switch (vue.$vuetify.breakpoint.name) {
      case("xs"): return "display-1"
      case("sm"): return "display-2"
      case("md"): return "display-2"
      case("lg"): return "display-3"
      case("xl"): return "display-4"
    }
	}

	static subtitleSize(vue: Vue) {
		switch (vue.$vuetify.breakpoint.name) {
			case("xs"): return "text-h5"
			case("sm"): return "text-h4"
			case("md"): return "text-h4"
			case("lg"): return "text-h4"
			case("xl"): return "text-h3"
		}
	}

	static normalSize(vue: Vue) {
		switch (vue.$vuetify.breakpoint.name) {
				case("xs"): return "text-h6"
				case("sm"): return "text-h5"
				case("md"): return "text-h5"
				case("lg"): return "text-h5"
				case("xl"): return "text-h4"
		}
	}

}