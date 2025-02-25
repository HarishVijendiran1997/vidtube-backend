import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const testing = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, "ok", "testing passed"));
});

export { testing };
