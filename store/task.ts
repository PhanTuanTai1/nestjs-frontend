import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import {Post, Get} from "../utils/api.service"

@Module({
    name: 'task',
    stateFactory: true,
    namespaced: true,
})
class Task extends VuexModule {
    tasks: Array<any> = [];

    @Action async getAllTasks(token : any) {
        await Get('/api/tasks', token);
    }

    @Mutation setListTasks(tasks: any) {
        this.tasks = tasks;
    }
}

export default Task;