import React from 'react';
import { Header, Card, FeaturesClass } from './components'
import './scss/style.scss';
import { macbook } from './images'

function App() {
  return (
    <div className="App">
      <Header/>
      <Card 
        category="new design" 
        title="There is no other platform for you ..."
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quis alias nulla autem accusantium temporibus at odit asperiores quam sint, adipisci ad distinctio? Mollitia officiis labore corporis, numquam repellat earum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quis alias nulla autem accusantium temporibus at odit asperiores quam sint, adipisci ad distinctio? Mollitia officiis labore corporis, numquam repellat earum!"
        image={macbook}
        className="o-card"
      />
      <FeaturesClass title="Some awesome features" category="new features"/>
      <Card 
        category="new design" 
        title="Responsive design just need your tap ..."
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quis alias nulla autem accusantium temporibus at odit asperiores quam sint, adipisci ad distinctio? Mollitia officiis labore corporis, numquam repellat earum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quis alias nulla autem accusantium temporibus at odit asperiores quam sint, adipisci ad distinctio? Mollitia officiis labore corporis, numquam repellat earum!"
        image={macbook}
        className="o-card-reverse"
      />
    </div>
  );
}

export default App;
