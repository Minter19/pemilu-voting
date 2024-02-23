import { supabaseCli } from "@/modules/supabase/init.js"

export const get_by_id = async (req, res) => {
  const {data, error} = await supabaseCli.from("users_pemilu").select("*")
  if(error) {
    throw error
  }
 await res.status(200).send(data)
}
