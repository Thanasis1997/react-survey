// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {console.log(list)}
      {Object.keys(list).map((key) => {
        console.log(list[key])
        return <li>{list[key] && answersSet[key]}</li>
      })}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, color, timeSpent, review, email}
}) {
  const handleRecall = () =>{
    const newData = {
      color: color,
      timeSpent: timeSpent,
      review: review,
      username: username,
      email: email
    }
    //TODO update the form
    console.log(newData);
 
  }
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
      <button onClick={handleRecall}>Recall</button>

    </li>
  );
}
