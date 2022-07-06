import logo from './images/gdfLogo.png'
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={logo} className="imagem" alt="logo" />
        <div className="subheader">
          <a>About</a>
          <a>Tools</a>
          <a>Apps</a>
          <a>Contact</a>
        </div>
      </header>
      <h1 class="text-3xl font-bold text-white underline">
    Hello world!
  </h1>
    </div>
  )
}

export default App
