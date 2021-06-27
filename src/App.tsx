import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./pages/Auth/Home";
import { NewRoom } from "./pages/Auth/NewRoom";
import { Room } from './pages/Rooms/Room';
import { AdminRoom } from './pages/Rooms/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
  
function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Switch> 
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom}/>
            <Route path="/rooms/:id" component={Room}/>

            <Route path="/admin/rooms/:id" component={AdminRoom}/>
          </Switch>
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
