import { useContext } from 'react';
import { RoutineContext } from '/src/app/App.jsx';
import styles from './Home.module.css';
import Showcase from '/src/components/Showcase.jsx'

function Home() {
  const [ routine, setRoutine ] = useContext(RoutineContext);

  function getTotalPrice() {
    let total = 0;
    for (let category of ['cleanser', 'moisturizer', 'cream', 'serum']) {
      if (routine[category]) {
        console.log('inside getTotalPrice: ' + routine[category]);
        total += Number(routine[category]['price_string'].slice(1));
      }
    }
    return total;
  }

  return(
    <main>
      <h2>Current Loadout</h2>
      <div id={styles['product-container']}>
        <Showcase category='cleanser' />
        <Showcase category='moisturizer' />
        <Showcase category='serum' />
        <Showcase category='cream' />
      </div>
      <h2>Total price: ${getTotalPrice()}</h2>
    </main>
  )
}

export default Home;