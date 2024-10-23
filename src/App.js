import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import NewGame from './pages/new-game/new-game';
import JoinGame from './pages/join-game/join-game';
import './custom.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/home';
import DefaultLayout from './components/default-layout.js/default-layout';

function AppRoutes() {
  // Define routes using useRoutes
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/new-game', element: <NewGame /> },
    { path: '/join-game', element: <JoinGame /> }
  ]);

  return routes;
}

function App() {
  return (

      <DefaultLayout>
        <Router>
          {/* AppRoutes is already handling the route setup internally */}
          <AppRoutes />
        </Router>
      </DefaultLayout>

  );
}

export default App;
