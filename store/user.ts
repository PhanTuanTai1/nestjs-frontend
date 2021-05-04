import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import {SignIn} from "../utils/api.service"

@Module({
    name: 'user',
    stateFactory: true,
    namespaced: true,
})
class User extends VuexModule {
    token: string = '';

    getToken() {
        return this.token;
    }

    @Action async signIn({username, password}: any) {
        let token = await SignIn('/api/auth/signin', {username,password});
        console.log("token", token);
    }

    @Mutation setToken(token: string) {
        this.token = token;
    }
}

export default User;