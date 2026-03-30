import Joi from "joi";

export const hideArticleSchema = Joi.object({
  articleName: Joi.string().required().messages({
    "string.empty": "Article name is required",
    "any.required": "Article name is required"
  })
});

export const showArticleSchema = Joi.object({
  articleName: Joi.string().required().messages({
    "string.empty": "Article name is required",
    "any.required": "Article name is required"
  })
});