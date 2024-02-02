import { connectToServer } from './socket-client'
import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>

    <Span id='server-status'>offline</Span>

    <ul id='clients-ul'>
    </ul>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

connectToServer()
