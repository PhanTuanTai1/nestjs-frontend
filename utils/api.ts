import {NuxtAxiosInstance } from "@nuxtjs/axios";

let $axios: NuxtAxiosInstance;
let nuxtContext : any;

export function initializeAxios(axiosInstance: NuxtAxiosInstance, context: any) {
    $axios = axiosInstance
    nuxtContext = context;
}
     
export { $axios, nuxtContext }