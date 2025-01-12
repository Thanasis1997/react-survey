import { useState } from "react";
import AnswersList from '../components/AnswersList'
function Main() {

  const initialData = {
    color: '',
    timeSpent: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false
    },
    review: '',
    username: '',
    email: ''
  }

  const [open, setOpen] = useState(false); //Ignore this state
  const [data, setData] = useState(initialData)
  const [answers, setAnswers] = useState([])

  const handleChange = (e) =>{
    const {type, name, checked,value} = e.target
    if(type === 'checkbox'){
      
      let newVal = data[name]
      newVal[value] = checked
      
      setData({...data, [name]: newVal})
    }else{
      setData({...data, [name]: value})

    }

  }

  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(data)
      setAnswers([...answers, data])
      setData(initialData)


  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
       {answers.length > 0 && <AnswersList answersList = {answers} setData={setData} data={data}/>}
      </section>
      <section className="main__form">
      <form class="form" onSubmit={handleSubmit}>
  <h2>Tell us what you think about your rubber duck!</h2>
  
  <div class="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <ul>
    <li>
      <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={data.color == 1}/><label for="color-one">1</label>
    </li>
    <li>
      <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={data.color == 2}/><label for="color-two">2</label>
    </li>
    <li>
      <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} checked={data.color == 3}/><label for="color-three">3</label>
    </li>
    <li>
      <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={data.color == 4}/><label for="color-four">4</label>
    </li>
  </ul>
  </div>
  <div class="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>

    <ul>
      <li>
        <label><input name="timeSpent" type="checkbox" value="swimming" onChange={handleChange} checked={data.timeSpent.swimming}/>Swimming</label>
      </li>
      <li>
        <label><input name="timeSpent" type="checkbox" value="bathing" onChange={handleChange} checked={data.timeSpent.bathing}/>Bathing</label>
      </li>
      <li>
        <label><input name="timeSpent" type="checkbox" value="chatting" onChange={handleChange} checked={data.timeSpent.chatting}/>Chatting</label>
      </li>
      <li>
        <label><input name="timeSpent" type="checkbox" value="noTime" onChange={handleChange} checked={data.timeSpent.noTime}/>I don't like to
          spend time with it</label>
      </li>
    </ul>
  </div>
  <label>What else have you got to say about your rubber duck?<textarea name="review" cols="30"
      rows="10" onChange={handleChange} value={data.review}></textarea></label><label>Put your name here (if you feel like it):<input type="text" name="username"
      value={data.username} onChange={handleChange}/></label><label>Leave us your email pretty please??<input type="email" name="email"
      value={data.email} onChange={handleChange}/></label><input class="form__submit" type="submit" value="Submit Survey!" />
  </form>
      </section>
    </main>
  );
}

export default Main;
