export const get_user = async (req, res) => {
    try {
        await res.status(200).send(req.user);
    }
    catch (err) {
        throw new Error("Error while getting user: " + err);
        res.status(500).send({ message: 'Error while getting user | Internal server error' });
    }
};
//# sourceMappingURL=get_user.js.map