
// import { Counter } from './components/Counter';
import { useState } from 'react';
import { CounterEffect } from './CounterEffect';

function App() {

  const [show, setShow] = useState<boolean>(true)

  return (
    <div className="container mx-auto">
      <h1 className="count-color custom-text-justify">Hello world</h1>

      {/* <Counter initialCount={0} decrementBy={2} title="dsdsds">
          {
            (currentCount) => {
              return (
                <h1 className="mb-2 text-blue-400">Conter 1 - { currentCount }</h1>
              )
            }
          }
        </Counter> */}

      {/* <Counter initialCount={0} decrementBy={2}>
        <h1 className="mb-2 text-blue-400">Conter 1</h1>
      </Counter> */}

      <div className="flex flex-col gap-4">


        {
          show === true ? (
            <CounterEffect />
          ) : (<></>)
        }

        <hr />

        <div>
          <button onClick={() => setShow(false)} className="btn-primary">Esconder componente</button>
        </div>

      </div>

    </div>
  )
}

export default App
