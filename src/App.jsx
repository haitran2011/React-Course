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

function Heading({ text = 'Default text' }) {
  return (
    <h1>this is heading: {text} </h1>
  )
}


function App() {
  const greeting = {
    title: 'Welcome',
    caption: 'Happy brithday',
    description: 'lorem'
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
      
    </>
  )
}

export default App
