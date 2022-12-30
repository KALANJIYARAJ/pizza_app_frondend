import "./App.css";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "..//node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./fontawesome-free/css/all.css"
// import "./css/sb-admin-2.css";
import Login from "./Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forgot from "./Login/Forgot";
import CreateAccount from "./Login/CreateAccount";
import PortalLayout from "./PortalLayout";
import Topbar from "./Topbar";
import Payment from "./Order/Payment";
import CreatePizza from "./Pizza/CreatePizza";
import ResetPassword from "./Login/ResetPassword";
import AddVeggiesMeat from "./VeggiesMeats/AddVeggiesMeat";
import CreateVeggiesMeals from "./VeggiesMeats/CreateVeggiesMeats";
import Base from "./Pizza/Base";
import Cheese from "./Pizza/Cheese";
import Sauce from "./Pizza/Sauce";
import Veggies from "./Pizza/Veggies";
import Meat from "./Pizza/Meat";
import Order from "./Order/Order";
import Card from "./Order/Card";
import Upi from "./Order/Upi";
import Profile from "./user/Profile";
import OrderItems from "./user/OrderItems";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/accout" element={<CreateAccount />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/reset/:userId" element={<ResetPassword/>}></Route>
        <Route path="/addvm/:index" element={<AddVeggiesMeat/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/card" element={<Card/>}></Route>
        <Route path="/upi" element={<Upi/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/orderitems" element={<OrderItems />}></Route>
        <Route path="/portal" element={<PortalLayout/>}>
          <Route path="/portal" element={<Topbar />}></Route>
          <Route path="base" element={<Base />}></Route>
          <Route path="sauce" element={<Sauce />}></Route>
          <Route path="cheese" element={<Cheese />}></Route>
          <Route path="veggies" element={<Veggies />}></Route>
          <Route path="meat" element={<Meat />}></Route>
          <Route path="createpizza" element={<CreatePizza />}></Route>
          <Route path="createVM" element={<CreateVeggiesMeals />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
