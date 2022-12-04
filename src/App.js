import { useState } from 'react';
import './App.css';
import Header from './Header/Header';

function App() {
  // const [arr,setArr] = useState(["asdas dasd aspod maspod paso", "asdmaposdmpasomd", "gpsdomgps dpgsmg", "asdmaspodmpoa asdas", "dapms paspo maspo aspm"])
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Dignissimos sequi architecto?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "Voluptas praesentium facere?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];
  return (
    <div className="App">
      <div className='container'>
        <div className='wrapper'>
          {
            faqs.map((el) => (
              <Header faq={el} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
