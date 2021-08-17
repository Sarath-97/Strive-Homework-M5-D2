import { body } from "express-validator";

export const bookValidationMiddleware = [
    body("title").exists().withMessage("Name is needed"),
    body("price").exists().withMessage("Price is needed")
]

