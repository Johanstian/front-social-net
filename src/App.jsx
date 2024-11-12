import { Routing } from "./router/Routing";
// import { HeaderPriv } from "./components/layouts/private/HeaderPriv"
// import { HeaderPub } from "./components/layouts/public/HeaderPub"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import es from 'javascript-time-ago/locale/es.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(es)

function App() {

  return (
      <Routing></Routing>
  )
}

export default App
