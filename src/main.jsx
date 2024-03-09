import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { QRcode } from './QRcode.jsx'
import "../css/qrcode.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <QRcode />
  </React.StrictMode>,
)
