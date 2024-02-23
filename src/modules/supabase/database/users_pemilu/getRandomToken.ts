import { supabaseCli } from "@/modules/supabase/init.js";


export const getRandomToken = async () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    let token = ""

    for (let i = 0; i < 25; i++) {
        if(i%5===0 && i !== 0){
            token += "-"
        }
        token += str.charAt(Math.floor(Math.random() * str.length))
    }
    return token;
};
