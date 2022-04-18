import { buildFilePath, extractData } from './api/feedback';

function Feedback(props) {
  return (
    <ul>
      {props.feedBackItems.map((item) => {
       return <li key={item.id}>{item.feedback}</li>
      })}
    </ul>
  )
};

export async function getStaticProps() {
  const filePath = buildFilePath();
  const data = extractData(filePath);
  return {
    props: {
      feedBackItems: data
    }
  }
}
export default Feedback;
