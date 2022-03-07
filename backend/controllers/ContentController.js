import Content from "../models/contentModel.js";
import { ContentValidation } from "../utils/validation/ContentValidation.js";

// @desc Create Or update a content type
// @route Post api/content
// @access Private admin
const createOrUpdateContent = async (req, res) => {
  const { valid, errors } = ContentValidation(req.body);

  if (!valid) return res.status(400).json(errors);

  const { contentEn, contentKu, contentAr, type, image } = req.body;

  try {
    const data =
      (await Content.findOne({
        type: type,
      })) || new Content({});

    data.type = type;
    data.contentAr = contentAr;
    data.contentEn = contentEn;
    data.contentKu = contentKu;
    data.image = image;
    data.user = req.user.id;

    const result = await data.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Server Error" });
  }
};

// @desc Get content by type
// @route Post api/content/:type
// @access Public
const getContentByType = async (req, res) => {
  try {
    const data = await Content.findOne({
      type: req.params.type,
    });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error!" });
  }
};

export { createOrUpdateContent, getContentByType };
