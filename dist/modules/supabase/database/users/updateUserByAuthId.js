import { supabaseCli } from "../../init.js";
export const updateUserByAuthId = async (authId, updateData) => {
    if (!authId || !updateData) {
        throw new Error("authId and updateData are required");
    }
    try {
        const { data, error } = await supabaseCli.from("users").update(updateData).eq("auth_id", authId);
        if (error) {
            throw error;
        }
        return data;
    }
    catch (err) {
        console.log("Error updating user: ", err);
        throw err;
    }
};
//# sourceMappingURL=updateUserByAuthId.js.map