import { useOutlet } from 'react-router-dom';

export function Router() {
  const element = useOutlet();

  return element;
}
