import './App.css'
import Main from './components/Main'
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'

function App() {

  return (
    <div className='container'>
        <TopNav></TopNav>
        <Main></Main>
        <SideNav></SideNav>
    </div>
  )
}

export default App
