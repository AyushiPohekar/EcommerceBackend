import express from "express";
import slugify from "slugify";
import { SingleCategoryController, categoryController, createCategoryController, deleteCategoryCOntroller, updateCategoryController } from "../controllers/createCategoryController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMidlleware.js";

const router=express.Router();

//routes

// create category
router.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
  );
// update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );
// getAll category
router.get(
    "/getallcategory",
   
  categoryController
  );


  //get single Category
router.get(
    "/single-category/:id",
   SingleCategoryController
  );

  //delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;

