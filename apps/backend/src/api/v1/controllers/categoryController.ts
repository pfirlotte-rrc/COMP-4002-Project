import { Request, Response, NextFunction } from "express";
// import {Category} from "@prisma/client";
import * as categoryService from "../services/categoryService";
import { successResponse } from "../models/responseModel";

/**
 * Controller methods determine how to handle requests and respond to requests.
 * It sends the appropriate components of the request to services (if needed)
 * and responds to the request with an appropriate code/body.
 */

export const getAllCategories = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const categories = await categoryService.fetchAllCategories();
        res.status(200).json(
            successResponse(categories, "Categories retrieved succesfully")
        );
    } catch (error) {
        // errorHandler middleware will always be the last to catch error throws
        next(error);
    }
};

export const createNewCategory = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newCategory = await categoryService.createNewCategory(req.body);
        res.status(201)
            .json(successResponse(newCategory, "Category created succesfully"));
    } catch(error) {
        next(error);
    }
};
