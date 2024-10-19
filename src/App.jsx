import React from "react";
import Props from "./Props"
import Button from "./components/button";
import User from './pages/user/user';
import Product from './pages/product/product';
import MainLayout from "./layouts/main-layout/main-layout";
import State from './State';
import Component from "./Component";
import EventHandler from "./EventHandler";
import ConditionalRendering from "./ConditionalRendering";
import List from "./List";
import TodoAnatomy from './sample-app/todo-anatomy/todo-anatomy'
import CSS from "./CSS";
import GenerateBoxTony from "./sample-app/generate-box-tony/generate-box-tony";
import Header from "./components/header/header";
import Form from "./Form";
import StateHook from "./StateHook";
import LifeCycleHook from './LifeCycleHook';
import TrafficLightTony from "./sample-app/traffic-light-tony/TrafficLightTony";
import JobBoardTony from "./sample-app/job-board-tony/JobBoardTony";
import WrapperComponent from "./WrapperComponent";
import Todos from "./todos/Todos";
import { TodoProvider } from "./contexts/todo-context";
import Ref from "./Ref";
import ReducerHook from "./ReducerHook";
import PerformanceHook from "./PerformanceHook";
import CustomHook from "./CustomHook";
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Profile from "./pages/user/profile/profile";
import Account from "./pages/user/account/account";
import StateDetail from "./StateDetail";
import ProductDetail from "./pages/product/product-detail";
import { Invoice } from "./pages/invoice";
import { InvoiceDetail } from './pages/invoice/detail';

function Heading({ text = 'Default text' }) {
  return (
    <h1>this is heading: {text} </h1>
  )
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menus, setMenus] = React.useState([
    { id: 1, title: 'About Us', underline: false },
    { id: 2, title: 'Contact Us', underline: false}
  ])
  const [isShowLifeCycle, setIsShowLifeCycle] = React.useState(true)

  console.log('location: ', location)

  const greeting = {
    title: 'Welcome',
    caption: 'Happy brithday',
    description: 'lorem'
  }

  function toggleUnderline(menuId) {
    const newMenus = [...menus];
    const index = newMenus.findIndex(menu => menu.id === menuId);
    newMenus[index].underline = !newMenus[index].underline;
    setMenus(newMenus)
  }

  function showLifeCycle() {
    // toggle on/off
    // 1: false => !false (true)
    // 2: true => !true (false)
    setIsShowLifeCycle(prevState => !prevState); 
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/wrapper-component">Wraper Component</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/state">State</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/component" replace>Component</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user" replace>User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/props">Props</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/invoice">Invoice</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route 
            path="/props" 
            element={
              <Props 
                isLoading={false} // boolean
                firstName="tony" // string
                colors={['red', 'blue']} // string[]
                address={{
                  city: 'hcm',
                  district: 10,
                  country: {
                    code: 999
                  }
                }}
                score={10} // number
                component={Heading} // pass name component
                component2={<Heading text="direct component" />} // direct component
                // title={greeting.title}
                // description={greeting.description}
                // caption={greeting.caption}
                {...greeting} // spread operator
              >
                this is children props <br />
                <Heading />
                <Button text="Go to Home" onClick={() => navigate('/')} />
              </Props>
            } 
          />

          <Route 
            path="wrapper-component" 
            element={
              <>
                <h1>Demo WrapperComponent</h1>
                <MainLayout>
                  <User title="user"/>
                </MainLayout>

                <MainLayout>
                  <Product />
                </MainLayout>
              </>
            }
          />
          <Route path="/state" element={<State />} />
          <Route path="/state/:tony/product/:product" element={<StateDetail />} />
          <Route path="/component" element={<Component />} />
          <Route path="/user" element={<User />} >
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/invoice" element={<Invoice />}>
            <Route index element={<h3>Please select an invoice</h3>} />
            <Route path=":invoiceId" element={<InvoiceDetail />} />
          </Route>
        </Routes>

        <hr />
        <EventHandler />

        <hr />
        <ConditionalRendering />

        <hr />
        <List />

        <hr />
        <TodoAnatomy />

        <hr />
        <CSS />

        <hr />
        <GenerateBoxTony />

        <hr />
        <Header menus={menus} toggleUnderline={toggleUnderline} />
        
        <hr />
        <Form />

        <hr />
        <StateHook />

        <hr />
        <button type="button" onClick={showLifeCycle}>On/off lifecycle hook</button>
        {isShowLifeCycle && <LifeCycleHook />}

        <br />

        <TrafficLightTony />

        <br />
        <JobBoardTony />

        <br /> 
        <WrapperComponent />

        <br />
        <TodoProvider>
          <Todos />
        </TodoProvider>

        <br />
        <Ref />

        <br />
        <ReducerHook />
        <br />

        <PerformanceHook />
        <br />

        <CustomHook />
        <br />


        <br />
        <br />
        <br />
        <br />
        <br />
      </main>

      
    </>
  )
}

export default App
