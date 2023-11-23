import { Button } from '../../components/Button';
import { useCounterContext } from '../../contexts/CounterContext';
import { Heading } from '../../components/Heading';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions.asyncError().then((r) => console.log(r)).catch((e) => console.log(e.name, ":", e.message));
  }

  return (
    <div>
      <Heading/>

      <div>
        <Button onButtonClicked={actions.increase}>Increase</Button>
        <Button onButtonClicked={actions.decrease}>Decrease</Button>
        <Button onButtonClicked={actions.reset}>Reset</Button>
        <Button onButtonClicked={() => actions.setCounter({ counter: 10})}>set 10</Button>
        <Button onButtonClicked={() => actions.setCounter({ counter: 100})}>set 100</Button>
        <Button disabled={state.loading} onButtonClicked={actions.asyncIncrease}>Async Increase</Button>
        <Button disabled={state.loading} onButtonClicked={actions.asyncError}>Async Error</Button>
      </div>
    </div>
  );
};