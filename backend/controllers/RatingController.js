import Rating from "../models/ratingModel.js";
import { RatingValidation } from "../utils/validation/RatingValidation.js";

// @desc Rate
// @route Post api/rating/:scope
// @access Public
const rate = async (req, res) => {
  const { valid, errors } = RatingValidation(req.body);

  if (!valid) return res.status(400).json(errors);

  const { rate } = req.body;

  try {
    const rating = new Rating({
      rate,
      scope: req.params.scope,
    });

    const rated = await rating.save();

    if (rated) {
      res.status(201).json({
        rated,
        message: "Post have been made successfully",
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

// @desc Rate
// @route Get api/rating
// @access Public
const result = async (req, res) => {
  try {
    const rating = await Rating.aggregate([
      {
        $group: {
          _id: "$scope",
          average: {
            $avg: "$rate",
          },
        },
      },
    ]);

    let count = 0;
    let sumCountry = 0;
    let avgWebsite = 0;

    rating.forEach((r) => {
      if (r._id === "website") {
        avgWebsite = r.average;
      } else {
        count++;
        sumCountry += r.average;
      }
    });
    let avgCountry = sumCountry / count;

    const result = {
      avgCountry,
      avgWebsite,
      rating,
    };

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "There is an error" });
  }
};


const getAllRating = async (req, res) => {
  try {
    const data = await Rating.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error!" });
  }
};

export { rate, result, getAllRating };