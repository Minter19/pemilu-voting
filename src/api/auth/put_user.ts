import { updateUserByAuthId } from "@/modules/supabase/database/users/updateUserByAuthId.js"

export const put_user = async (req, res) => {
  
  const {auth_id} = req.user
  const {name} = req.body
  try {
    let reqUpdate = await updateUserByAuthId(auth_id, {name})
    return res.status(200).send({message: 'User updated'})
  } catch (error) {
    console.log("error while updating user: ", error)
    return res.status(500).send({message: 'Error while updating user | Internal server error'}) 
  }
}
