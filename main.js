import './style.css'
import { content } from './scripts/content.js'
import { setupCounter } from './counter.js'

function App(){
  let fruits=content.map(i=>`<li>${i}</li>`)

document.querySelector('#app').innerHTML = `
 ${fruits}
`}
App()

setupCounter(document.querySelector('#counter'))
