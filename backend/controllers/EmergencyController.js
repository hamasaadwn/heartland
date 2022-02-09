import Emergency from "../models/EmergencyModel.js";

// @desc Create Or update a content type
// @route Post api/emergency
// @access Private admin
const createOrUpdateEmergency = async (req, res) => {
  const { nameEN, nameAR, value, type, icon } = req.body;

  try {
    const data =
      // (await Emergency.findOne({
      //   type: type,
      // })) ||
      new Emergency({});

    data.type = type;
    data.nameEN = nameEN;
    data.nameAR = nameAR;
    data.value = value;
    data.icon = icon;
    data.user = req.user.id;

    const result = await data.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error!" });
  }
};

// @desc Get all emergencies
// @route GEt api/emergency/
// @access Public
const getEmergencies = async (req, res) => {
  try {
    const data = await Emergency.find({});

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error!" });
  }
};

// @desc Get emergency by type
// @route Post api/emergency/:type
// @access Public
const getEmergencyByType = async (req, res) => {
  try {
    const data = await Emergency.find({
      type: req.params.type,
    });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error!" });
  }
};

// @desc Get emergency by type
// @route Delete api/emergency/:id
// @access Public
const deleteEmergency = async (req, res) => {
  try {
    const emergency = await Emergency.findById(req.params.id);

    if (emergency) {
      await emergency.deleteOne();
      res.json({ message: "emergency removed", emergency });
    } else {
      res.status(404);
      throw new Error("emergency not found");
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error!" });
  }
};

export {
  createOrUpdateEmergency,
  getEmergencyByType,
  getEmergencies,
  deleteEmergency,
};
