import ContactUs from "../models/contactUsModel.js";

// @desc Create Or update a contact by id
// @route Post api/contact/:id
// @access Private admin
const createOrUpdateContact = async (req, res) => {
  const { value, type } = req.body;

  try {
    let data = null;
    if (req.params.id) {
      data = await ContactUs.findById(req.params.id);
    } else {
      data = new ContactUs({});
    }
    data.type = type;
    data.value = value;
    data.user = req.user.id;

    const result = await data.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error!" });
  }
};

const getAllContactInfo = async (req, res) => {
  try {
    const data = await ContactUs.find({}).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error!" });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await ContactUs.findById(req.params.id);

    if (contact) {
      await contact.deleteOne();
      res.json({ message: "contact removed", contact });
    } else {
      res.status(404);
      throw new Error("contact not found");
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Error!" });
  }
};

export { createOrUpdateContact, getAllContactInfo, deleteContact };
