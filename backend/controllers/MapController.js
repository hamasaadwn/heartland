import mapModels from "../models/mapModels.js";
import { MapValidation } from "../utils/validation/MapValidation.js";

// @desc Create new city
// @route Post api/maps
// @access Private admin
const createMap = async (req, res) => {
  const data = req.body;
  data.branch = req.body.branch;

  const { valid, errors } = MapValidation(data);

  if (!valid) return res.status(400).json(errors);

  try {
    const mapModel = new mapModels({ ...data, user: req.user.id });

    const map = await mapModel.save();

    if (map) {
      res.status(201).json({
        map,
        message: "Map  have been made successfully",
      });
    } else {
      res.status(400);
      res.json({ general: "Invalid post data" });
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "There is an error" });
  }
};

// @desc Create new city
// @route Post api/maps/:id
// @access Private admin
const updateMap = async (req, res) => {
  const data = req.body;
  data.branch = req.body.branch;

  const { valid, errors } = MapValidation(data);

  if (!valid) return res.status(400).json(errors);

  try {
    const mapModel = await mapModels.findById(req.params.id);

    mapModel.branch.forEach((b) => {
      b.remove();
    });

    mapModel.name = data.name;
    mapModel.thumbnail = data.thumbnail;
    mapModel.countryMap = data.countryMap;
    mapModel.cityMap = data.cityMap;
    mapModel.cityMapAdd = data.cityMapAdd;
    mapModel.user = req.user.id;

    data.branch.forEach((branch, index) => {
      if (index < mapModel.branch.length) {
        mapModel.branch[index].address = branch.address;
        mapModel.branch[index].phone = branch.phone;
        mapModel.branch[index].email = branch.email;
        mapModel.branch[index].lang = branch.lang;
        mapModel.branch[index].lat = branch.lat;
      } else {
        mapModel.branch.push({
          address: branch.address,
          phone: branch.phone,
          email: branch.email,
          lang: branch.lang,
          lat: branch.lat,
        });
      }
    });

    const map = await mapModel.save();

    if (map) {
      res.status(201).json({
        map,
        message: "Map  have been made successfully",
      });
    } else {
      res.status(400);
      res.json({ general: "Invalid post data" });
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "There is an error" });
  }
};

// @desc get all
// @route Post api/maps
// @access Public
const getAllMaps = async (req, res) => {
  try {
    const posts = await mapModels.find({});
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "There is an error" });
  }
};

// @desc get specific
// @route Post api/maps/:id
// @access Public
const getMapById = async (req, res) => {
  try {
    const posts = await mapModels.findById(req.params.id);
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "There is an error" });
  }
};

// @desc get specific
// @route Post api/maps/m/:id
// @access Public
const getMapByCity = async (req, res) => {
  try {
    const posts = await mapModels.findOne({ name: req.params.id });
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "There is an error" });
  }
};

// @desc Delete a map by id
// @route DELETE api/maps/:id
// @access Private admin/owner
const deleteMapById = async (req, res) => {
  try {
    const map = await mapModels.findById(req.params.id);

    if (req.user.isAdmin || map.user.valueOf() === req.user.id) {
      await map.deleteOne();
      res.json({ message: "map removed" });
    } else {
      res.status(400);
      res.json({ general: "You can't change other users' maps" });
    }
  } catch (err) {}
};

export {
  createMap,
  updateMap,
  getAllMaps,
  getMapById,
  getMapByCity,
  deleteMapById,
};
