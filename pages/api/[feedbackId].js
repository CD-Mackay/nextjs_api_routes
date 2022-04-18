import { buildFilePath, extractData } from "./feedback";

function handler(req, res) {
  const feedBackId = req.query.feedbackId;
  const filePath = buildFilePath();
  const data = extractData(filePath);
  const item = data.find((feedback) => feedback.id === feedBackId);
  res.status(200).json({ feedback: item });
}

export default handler;
