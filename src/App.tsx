import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'
function App() {

  return (
    <div>
      hello
      <ConnectButton chainStatus="icon" showBalance={false} accountStatus="address"/>
    </div>
  )
}

export default App
