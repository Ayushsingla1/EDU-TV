import { createRoot } from 'react-dom/client'
import WalletProvider from './utils/walletProvider.tsx'
import { RecoilRoot } from 'recoil';

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <WalletProvider>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </WalletProvider>
)
