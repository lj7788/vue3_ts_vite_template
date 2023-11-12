import { defineStore } from "pinia";
const useUserStore = defineStore("user", {
    state:()=>({

    }),
    actions:{
        userLogin(userInfo: { username: string; password: string; code: string; uuid: string; }) {
        },
        getInfo(){

        },
        logOut(){
            return new Promise((a,b)=>{})
        }
    }
});
export default useUserStore