import './App.css'
/*
function App() {
  return (
    <>
      <header>
      </header>
      <main>
        <h1>Bienvenido a mi Aplicación de React!! </h1> 
        <h2>Lista de cosas que hay por hacer</h2>
        <ol>
          <li>Aprender React</li>
          <li>Practicar con Vite</li>
          <li>Construir proyectos increibles</li>
        </ol>
      </main>
      <footer></footer>
    </>
  )
}

export default App
*/

//CON COMPONENTES
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App