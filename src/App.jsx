import { Header } from "./Components/Header"
import { MovieCard } from "./Components/MovieCard"
import Movielist from "./Components/Movielist"
import { Search } from "./Components/Search"

import './index.css'

function App() {
  

  return (
    <>
      <Header />
      <Search />
      <Movielist />
      {/* <MovieCard /> */}
    </>
  )
}

export default App
