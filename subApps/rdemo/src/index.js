import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './publicPath.config'

export async function bootstrap() {
  console.log('reactTodo bootstraped')
}

export async function mount(props) {
  console.log('reactTodo mounted', props)

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

export async function update(props) {
  console.log('reactTodo updated', props)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
