export const log_middleware = async (req, res, next) => {
    console.log("Request:", req.method, req.url);
    next();
    // Complete function
};
//# sourceMappingURL=log_middleware.js.map