import Card from "../models/card.model";

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
  const { title, service, ssdNo } = req.body;
  const companyProfilePicture = req.file;

  if (!title || !service || !ssdNo === undefined || !companyProfilePicture) {
    return res
      .status(400)
      .json({ error: "missing or invalid fields in the request body" });
  }
  try {
    const card = new Card({
      title,
      service,
      ssdNo,
      companyProfilePicture: companyProfilePicture.path,
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
const deleteCard = (req, res) => {
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
