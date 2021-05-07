import store from "@/store/store"
import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators"

@Module({dynamic: true, store, name: "UserInterfaceModule"})
export default class CategoriesModule extends VuexModule {

    sidebar: boolean = true

    @Mutation
    showSidebar(v: boolean) {
        this.sidebar = v
    }

}