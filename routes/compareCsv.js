const express = require("express");
const uploadCsv = require("../controllers/CompareCsv/uploadCsv")
const multerUpload = require("../middleware/multerUpload");
const compareCsv = require("../controllers/CompareCsv/compareCsv");
const multipleMulterUpload = require("../middleware/multipleMulterUploads");
const authMiddleware = require("../middleware/authMiddleware");
const {userData} = require("../controllers/CompareCsv/userCsvData");

const router = express.Router();

router.post("/uploadcsv", authMiddleware, multerUpload, uploadCsv);
router.post("/compareData", authMiddleware, multipleMulterUpload, compareCsv)
router.get("/compareAssigned/:taskId", userData);
// router.post("/saveAnswer:taskId", )

module.exports = router;
