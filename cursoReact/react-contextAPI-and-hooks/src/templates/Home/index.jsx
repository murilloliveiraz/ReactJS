import { Button } from '../../components/Button';
import { useCounterContext } from '../../contexts/CounterContext';
import { Heading } from '../../components/Heading';

export const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <Heading/>

      <div>
        <Button onButtonClicked={actions.increase}>Increase</Button>
      </div>
    </div>
  );
};