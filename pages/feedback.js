import { buildFilePath, extractData } from "./api/feedback";
import { useState } from "react";

function Feedback(props) {
  const [feedbackData, setFeedBackData] = useState();

  function loadFeedBackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedBackData(data.feedback));
  }
  return (
    <ul>
      {props.feedBackItems.map((item) => {
        return (
          <li key={item.id}>
            {item.feedback}
            <button onClick={loadFeedBackHandler.bind(null, item.id)}>
              Show details
            </button>
            {feedbackData && <p>{feedbackData.email}</p>}
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = buildFilePath();
  const data = extractData(filePath);
  return {
    props: {
      feedBackItems: data,
    },
  };
}
export default Feedback;
