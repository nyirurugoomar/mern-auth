import Card from "../models/card.model.js";

export const getCards = (req, res) => {
  Card.find()
    .then((card) => {
      res.json(card);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

//post
export const createCard = async (req, res) => {
  const { title, service, ssdNo, companyProfilePicture } = req.body;

  if (!title || !service || !ssdNo || !companyProfilePicture === undefined) {
    return res
      .status(400)
      .json({ error: "missing or invalid fields in the request body" });
  }
  try {
    const card = new Card({
      title,
      service,
      ssdNo,
      companyProfilePicture,
    });

    const savedCard = await card.save();
    res.status(200).json(savedCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCard = async (req, res) => {
  const { title, service, ssdNo } = req.body;
  let updateFields = {
    title,
    service,
    ssdNo,
  };

  // Check if a new company picture is uploaded
  if (req.file) {
    updateFields.companyPicture = req.file.path;
  }

  try {
    const updatedCard = await Card.findOneAndUpdate(
      { _id: req.params.cardID },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedCard) {
      return res.status(404).json({ error: "Card not found" });
    }

    res.json(updatedCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//  delete
// export const deleteCard = (req, res) => {
//   Card.deleteOne({ _id: req.params.cardID })
//     .then((result) => {
//       if (result.deletedCount === 0) {
//         return res.status(404).json({ error: "Card not found" });
//       }
//       res.json({ message: "Card Deleted" });
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error.message });
//     });
// };

export const deleteCard = (req, res) => {
  Card.deleteOne({ _id: req.params.cardID })
    .then((result) => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Card not found" });
      }
      res.json({ message: "Card Deleted" });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
