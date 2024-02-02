import { Manager } from 'socket.io-client'

export const connectToServer = () => {
  const manager = new Manager('http://localhost:3003/socket.io/socket.io.js')

  const socket = manager.socket('/')
  console.log({ socket })
}
