import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Useers from './Users';
// import Friends from './Friends';

function App() {

  function handleClicked() {
    alert('button clicked');
  }

  const handleClicked2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }


  return (
    <>
      <h1>Recat Core Concept 2</h1>

      <Friends></Friends>

      <Useers></Useers>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClicked}>Click Me</button>
      <button onClick={handleClicked2}>Clicked Him</button>
      <button onClick={() => { alert('third clicked') }}>Third</button>
      {/* vejailla */}
      {/* <button onClick={addToFive(3)}>Four</button> */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
