import { createUserPemilu } from "@/modules/supabase/database/users_pemilu/createUserPemilu.js"
import { getRandomToken } from "@/modules/supabase/database/users_pemilu/getRandomToken.js"
import { insertUser2Transcaction } from "@/modules/supabase/database/users_pemilu/insertUser2Transcaction.js"

export const post_users_pemilu = async (req, res) => {

  const {nik, name} = req.body
  const token = await getRandomToken()
  const userData = {
    nik,
    name,
    token
  }

  try {
    const reqInsertUserPemilu = await createUserPemilu(userData)
    const reqInsertTransaksiStatus = await insertUser2Transcaction(nik, false)
    return res.status(200).send({message: 'User pemilu created'})
  } catch (error) {
    console.log("error while inserting user pemilu: ", error)
    return res.status(400).send({message: error.message}) 
  }

}
