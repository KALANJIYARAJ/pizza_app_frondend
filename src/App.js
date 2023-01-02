import "./App.css";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "..//node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./fontawesome-free/css/all.css"
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
import Base from "./Pizza/Base";
import Cheese from "./Pizza/Cheese";
import Sauce from "./Pizza/Sauce";
import Veggies from "./Pizza/Veggies";
import Meat from "./Pizza/Meat";
import Profile from "./user/Profile";
import OrderItems from "./user/OrderItems";
import AdminPortal from "./Admin/AdminPortal";
import EditUser from "./user/EditUser";
import ViewOrder from "./Order/ViewOrder";
import EditOrder from "./Order/EditOrder";
import ViewPizza from "./Pizza/ViewPizza";
import EditPizza from "./Pizza/EditPizza";
import ViewUser from "./user/ViewUser";
import CreateVeggiesMeats from "./VeggiesMeats/CreateVeggiesMeats";
import ViewVM from "./VeggiesMeats/ViewVM";
import EditVM from "./VeggiesMeats/EditVM";
import CreateOrder from "./Order/CreateOrder";




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
        <Route path="/createOrder" element={<CreateOrder/>}></Route>
        <Route path="/orderitems" element={<OrderItems />}></Route>
        <Route path="/portal" element={<PortalLayout/>}>
          <Route path="/portal" element={<Topbar />}></Route>
          <Route path="base" element={<Base />}></Route>
          <Route path="sauce" element={<Sauce />}></Route>
          <Route path="cheese" element={<Cheese />}></Route>
          <Route path="veggies" element={<Veggies />}></Route>
          <Route path="meat" element={<Meat />}></Route>
          </Route>
          <Route path="/admin" element={<AdminPortal/>}>
          <Route path="viewuser" element={<ViewUser />}></Route>
          <Route path="edituser/:userid" element={<EditUser />}></Route>

          <Route path="vieworder" element={<ViewOrder />}></Route>
          <Route path="editorder/:orderid" element={<EditOrder />}></Route>

          <Route path="createpizza" element={<CreatePizza />}></Route>
          <Route path="viewpizza" element={<ViewPizza />}></Route>
          <Route path="editpizza/:pizzaid" element={<EditPizza />}></Route>

          <Route path="createvm" element={<CreateVeggiesMeats />}></Route>
          <Route path="viewvm" element={<ViewVM />}></Route>
          <Route path="editvm/:vmid" element={<EditVM />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
