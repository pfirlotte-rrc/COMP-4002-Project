import Joi, { ObjectSchema } from "joi";

// define the correct shape of a category object received in JSON
// Requires a Category Name
export const categorySchema: ObjectSchema = Joi.object({
    categoryName: Joi.string().required().messages({
        "any.required": "Category Name is required",
        "string.empty": "Category Name cannot be empty"
    }),
});