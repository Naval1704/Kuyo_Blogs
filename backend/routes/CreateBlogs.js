const express = require("express");
const router = express.Router();

router.post("/post-blog",async (req, res) => {
    try {
        console.log(req.body);
        await user.create({
          name: req.body.name,
          email: req.body.email,
          password: securePassword,
        });
        res.json({ success: true });
      } catch (error) {
        console.log(error);
        res.json({ success: false });
      }
    }
)


module.exports = router;