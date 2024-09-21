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

function Heading({ text = 'Default text' }) {
  return (
    <h1>this is heading: {text} </h1>
  )
}

function App() {
  const [menus, setMenus] = React.useState([
    { id: 1, title: 'About Us', underline: false },
    { id: 2, title: 'Contact Us', underline: false}
  ])
  const [isShowLifeCycle, setIsShowLifeCycle] = React.useState(true)

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
        <Button />
      </Props>


      <h1>Demo WrapperComponent</h1>

      <MainLayout>
        <User title="user"/>
      </MainLayout>

      <MainLayout>
        <Product />
      </MainLayout>


      <hr />
      <State />

      <hr />
      <Component />

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
    </>
  )
}

export default App
