import { deleteAuthUser } from "../../modules/supabase/database/users/deleteAuthUser.js";
import { deleteUserByAuthId } from "../../modules/supabase/database/users/deleteUserByAuthId.js";
export const delete_user = async (req, res) => {
    const { auth_id } = req.user;
    try {
        //delete auth user from supabase
        const deleteFromAuth = await deleteAuthUser(auth_id);
        //deleten user data from users table
        const deleteFromUsersTable = await deleteUserByAuthId(auth_id);
        res.status(200).send({ message: 'User deleted' });
    }
    catch (err) {
        throw new Error("Error while deleting user: " + err);
        res.status(500).send({ message: 'Error while deleting user | Internal server error' });
    }
};
//# sourceMappingURL=delete_user.js.map