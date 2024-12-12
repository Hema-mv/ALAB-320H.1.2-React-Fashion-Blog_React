// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';
import StreetinBrooklyn from './images/StreetinBrooklyn.jpg'
import VintageinVogue from './images/VintageinVogue.jpg'


const articles = [
  {
    title: 'On the Street in Brooklyn',
    image: StreetinBrooklyn,
    alt: 'StreetinBrooklyn',
    content: `Cray Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nihil veniam dicta error rem repellendus iusto voluptatem at
        consequuntur, mollitia quo incidunt amet numquam autem tempore iure
        deserunt minima dolore velit. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Dolore illo porro laboriosam. Quod vitae dolorem
        nihil cumque nobis tenetur laboriosam, ea deserunt veniam quam iure
        nisi sint neque odio recusandae! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Sit in laborum provident adipisci
        consequatur, aspernatur voluptate a, placeat atque qui animi ipsa vero
        laudantium nostrum deserunt eveniet vitae rerum ullam.`
  },
  {
    title: 'Vintage in Vogue',
    image: VintageinVogue,
    alt: 'VintageinVogue',
    content: `sray Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nihil veniam dicta error rem repellendus iusto voluptatem at
        consequuntur, mollitia quo incidunt amet numquam autem tempore iure
        deserunt minima dolore velit. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Dolore illo porro laboriosam. Quod vitae dolorem
        nihil cumque nobis tenetur laboriosam, ea deserunt veniam quam iure
        nisi sint neque odio recusandae! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Sit in laborum provident adipisci
        consequatur, aspernatur voluptate a, placeat atque qui animi ipsa vero
        laudantium nostrum deserunt eveniet vitae rerum ullam.`
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
