import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import appStore from './utils/appStore.js';
// import appStore from './utils/appStore';

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
