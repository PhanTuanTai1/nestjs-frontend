import {$axios, nuxtContext} from "./api";

const Post = async (url : string, data: any) => {
   try {
       return await $axios.post(url, data);
   }
   catch(error) {
      nuxtContext.error(new Error(JSON.stringify(error)));
   }
}

const Get = async (url: string, token: string) => {
    try {
        return await $axios.get(url, {
            headers:{
                Authorization: 'Bearer ' + token
            }
        });
    }
    catch(error) {
        // if(error.message.includes(''))
       nuxtContext.error(new Error(JSON.stringify(error)));
    }
}

const SignIn = async(url: string, data: any) => {
    try {
        let dataCallBack = await $axios.post(url, data);

        return dataCallBack.data['accessToken'];
    }
    catch(error) {
       return {code: 401};
    }
}

export {
    Post,
    SignIn,
    Get
}