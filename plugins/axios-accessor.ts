import {Plugin} from '@nuxt/types';
import {initializeAxios} from "../utils/api";

const accessor : Plugin = (context) => {
    initializeAxios(context.$axios, context);    
}

export default accessor;