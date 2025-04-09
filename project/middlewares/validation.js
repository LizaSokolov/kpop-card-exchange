const validate = (schema, property = "body") => (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });

    if (error) {
        const errors = error.details.map((err) => err.message);
        console.log("🛑 Joi validation error:", errors);
        return res.status(400).json({ errors });
    }

    next();
};

export default validate;
