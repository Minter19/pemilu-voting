import { insertFromUserPemilu } from "@/modules/supabase/database/users_pemilu/insertFromUserPemilu.js";

export const post_result_pemilu = async (req, res) => {
  try {
    const data = await insertFromUserPemilu(req.body)
    return res.status(200).send({
      message: 'Success inserting to result pemilu',
    })

  } catch (error) {
    console.log(error.message);
    return res.status(400).send({message: error.message})
  }
}
