import store from "@/store/store"
import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators"

@Module({dynamic: true, store, name: "CategoriesModule"})
export default class CategoriesModule extends VuexModule {

	categories = [ "Movies", "Tv", "Music", "Games", "Applications", "Podcasts", "Audiobooks", "Books", "Scientific"]

}