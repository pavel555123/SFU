import './App.css'
import {AppRouter} from "@/app/providers/router";
import {Suspense} from "react";

function App() {

  return (
      <div className='app'>
          <Suspense fallback=''>
              {/*<Component/>*/}
              <AppRouter/>
          </Suspense>
      </div>
  )
}

export default App
