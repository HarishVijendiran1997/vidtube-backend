import { Router } from "express";

import {
  registerUser,
  logoutUser,
  loginUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
} from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middlewares.js";

import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
); //? ok
router.route("/login").post(loginUser); //? ok
router.route("/refresh-token").post(verifyJWT, refreshAccessToken); //? ok
router.route("/logout").post(verifyJWT, logoutUser); //? ok

router.route("/change-password").post(verifyJWT, changeCurrentPassword); //? ok
router.route("/current-user").get(verifyJWT, getCurrentUser); //? ok
router.route("/update-account").patch(verifyJWT, updateAccountDetails); //? ok
router.route("/watch-history").get(verifyJWT, getWatchHistory); //? ok

router.route("/channel-profile/:username").get(getUserChannelProfile); //? ok

router
  .route("/update-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar); //? ok
router
  .route("/update-cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage); //? ok

export default router;
