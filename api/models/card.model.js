import mongoose from "mongoose";

const CardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    ssdNo: {
      type: String,
      required: true,
    },
    companyProfile: {
      type: String,
      default:
        "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg",
    },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", CardSchema);
