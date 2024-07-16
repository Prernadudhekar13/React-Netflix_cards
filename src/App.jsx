import { useState } from 'react';
import  Netflix from "./components/Netflix";
// import './App.css'
import styles from "./components/Netflix.module.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      <h1 className={styles["class-heading"]}>List of Best Netflix Series</h1>
      <Netflix/>;
    </section>
  )
}

export default App;
