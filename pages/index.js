import { emitDeprecationWarning } from 'mongodb/lib/utils';
import { useRef } from 'react';


function HomePage() {
  const emailInput = useRef();
  const feedbackInput = useRef();

  function handleFormSubmit(event) {
    event.preventDefault();
    const email = emailInput.current.value;
    const feedback = feedbackInput.current.value;
    const reqBody = { email, text: feedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
        <label htmlFor="email">your email</label>
        <input type="email" id="email" ref={emailInput} />
        </div>
        <div>
        <label htmlFor="feedback">your feedback</label>
        <textarea id="feedback" rows="5" ref={feedbackInput} />
        </div>
        <button>send feedback</button>
      </form>
    </div>
  );
}


export default HomePage;
