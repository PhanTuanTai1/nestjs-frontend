import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Task from "~/store/task";
import User from "~/store/user";

let taskModule: Task;
let userModule: User;

const initialiseStores  = (store: Store<any>) => {
    taskModule = getModule(Task, store);
    userModule = getModule(User, store);
}

export {initialiseStores, taskModule, userModule} 