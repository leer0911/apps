import { useNavigate } from 'react-router-dom';

export function useLinkTo() {
  const navigate = useNavigate();

  return { linkTo: navigate };
}
