import './App.css'
import Title from './components/title/title'
import Header from './components/header/header'
import CardList from './components/card-list/card-list'

function App() {
  return (
    <>
      <Header/>
      <Title>Каталог товаров </Title>
      <CardList/>
    </>
  )
}

export default App
