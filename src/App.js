import './App.css';
import { Fragament } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen"
import BasketScreen from "./screens/BasketScreen"
import DeliveryScreen from "./screens/DeliveryScreen"
import PreparingOrderScreen from "./screens/PreperingOrderScreen"
import RestaurantScreen from "./screens/RestaurantScreen"

const App = ({ id }) => {
  return (
    
      <Routes>
        <Route path='/' element={<HomeScreen id={id} />} />
        <Route path='/restaurant/*' element={<RestaurantScreen id={id} />} />
        <Route path='/basketScreen' element={<BasketScreen/>}/>
        <Route path='/preparingOrderScreen' element={<PreparingOrderScreen/>}/>
        <Route path='/deliveryScreen' element={<DeliveryScreen/>}/>
      </Routes>

  );
}

export default App;
