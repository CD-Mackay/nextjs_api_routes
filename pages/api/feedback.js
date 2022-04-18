import fs from "fs";
import path from "path";

function buildFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const filePath = buildFilePath();
    const data = extractData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res
      .status(201)
      .json({ message: "heyyooo it worked!", feedback: newFeedback });
  } else if (req.method === "GET") {
    const filePath = buildFilePath();
    const data = extractData(filePath);
    res.status(201).json({ message: "success!", feedback: data });
  } else {
    res.status(200).json({
      message: "a message",
    });
  }
}

export default handler;
