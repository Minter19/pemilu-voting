import { supabaseCli } from "../../init.js";
export const deleteUserByAuthId = async (authId) => {
    if (!authId) {
        throw new Error("authId is required");
    }
    try {
        //delete user from users table
        const { data, error } = await supabaseCli.from("users").delete().eq("auth_id", authId);
        if (error) {
            return error;
        }
        return data;
    }
    catch (err) {
        throw new Error("Error deleting user: " + err);
    }
};
//# sourceMappingURL=deleteUserByAuthId.js.map