import { ToastContainer } from 'react-toastify'
import { ListRepo } from './components/ListRepo'
import {GlobalStyles} from './GlobalStyles'

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  

  return (
    <>
      <ListRepo/>
      <GlobalStyles/>
      <ToastContainer/>
    </>
  )
}

export default App