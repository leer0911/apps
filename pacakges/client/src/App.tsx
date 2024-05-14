import { ConfigProvider, ConfigProviderProps } from 'antd';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

const theme: ConfigProviderProps['theme'] = {
  token: {
    colorPrimary: '#E15615',
  },
};

function App() {
  const element = useRoutes(routes);

  return <ConfigProvider theme={theme}>{element}</ConfigProvider>;
}

export default App;
