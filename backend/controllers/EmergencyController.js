import Emergency from "../models/EmergencyModel";

// @desc Create Or update a content type
// @route Post api/emergency
// @access Private admin
const createOrUpdateEmergency = async (req, res) => {
  const { nameEN, nameAR, value, type, icon } = req.body;

  try {
    const data =
      (await Emergency.findOne({
        type: type,
      })) || new Content({});

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

// @desc Get emergency by type
// @route Post api/content/:type
// @access Public
const getEmergencyByType = async (req, res) => {
  try {
    const data = await Emergency.findOne({
      type: req.params.type,
    });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error!" });
  }
};

export { createOrUpdateEmergency, getEmergencyByType };
