import Visitor from "../models/visitorsModel.js";

// @desc visitors
// @route Post api/visitor
// @access Public
const visitorCount = async (req, res) => {
  try {
    const vis = (await Visitor.findOne({})) || new Visitor({ visitors: 0 });

    vis.visitors++;

    const result = await vis.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "There is an error" });
  }
};

// // @desc visitors
// // @route Get api/visitor
// // @access Public
// const count = async (req, res) => {
//     try {
//         const vis = await Visitor.findOne({})) || new Visitor({ visitors: 0 });

//         res.json(result);
//       } catch (err) {
//         console.log(err);
//         res.status(400);
//         res.json({ general: "There is an error" });
//       }
// };

export { visitorCount };
