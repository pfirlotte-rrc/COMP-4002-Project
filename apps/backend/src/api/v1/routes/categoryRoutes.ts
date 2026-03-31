import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { categorySchema } from "../validations/categoryValidation";
import * as categoryController from "../controllers/categoryController"

/**
 * Routes determine which endpoints are made available, which controller
 * method to request if that route gets a corresponding request,
 * and invoke validation middleware if needed.
 */

const router: Router = express.Router();

// define routes that Express will listen for requests to
// define method that will be invoked when route gets a request
router.get("/", categoryController.getAllCategories);

// methods including data invoked validateRequest middleware
// tested against categorySchema
router.post("/", validateRequest(categorySchema), 
    categoryController.createNewCategory);

export default router;