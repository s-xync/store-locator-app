const HttpStatus = require("http-status-codes");
const Store = require("../models/Store");

// @desc get all stores
// @route GET /api/v1/stores
// @acess public
exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.find();
    return res.status(HttpStatus.OK).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (err) {
    console.error(err);
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error." });
  }
};

// @desc create a store
// @route POST /api/v1/stores
// @acess public
exports.addStore = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);

    return res.status(HttpStatus.OK).json({
      success: true,
      data: store
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ error: "Store already exists." });
    }
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error." });
  }
};
