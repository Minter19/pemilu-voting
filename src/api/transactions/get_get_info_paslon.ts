import { getInfoPaslon } from "@/modules/supabase/database/users_pemilu/getInfoPaslon.js"

export const get_get_info_paslon = async (req, res) => {
  try {
    const data = await getInfoPaslon()
    const payload = (data.map((item) => {
      const {id_paslon, paslon_name1, paslon_name2} = item
      return {id_paslon, paslon_name1, paslon_name2}
    }))
    return res.status(200).send(payload)
  } catch (error) {
    return res.status(400).send({message: error.message})
  }
}
