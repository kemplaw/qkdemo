import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import { render } from './render'

render()

registerMicroApps(
  [
    {
      name: 'reactTodo',
      entry: '//localhost:3000',
      container: '#sub-app-container',
      activeRule: '/'
    }
  ],
  {
    afterMount() {
      console.log('subapp loaded')
    },
    beforeUnmount() {
      console.log('before subapp unmount')
    }
  }
)

setDefaultMountApp('/')
start()
