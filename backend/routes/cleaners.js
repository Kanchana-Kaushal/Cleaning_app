const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
    clockIn,
    clockOut,
    isUserClockedIn,
} = require("../controllers/cleaner.controller");

// ✅ POST clock in
router.post("/clock/clock-in", auth(["cleaner"]), clockIn);

// ✅ POST clock out
router.post("/clock/clock-out", auth(["cleaner"]), clockOut);

//Check if the current user clocked in to any job. if yes return the job
router.get("/clock/status", auth(["cleaner"]), isUserClockedIn);

module.exports = router;
