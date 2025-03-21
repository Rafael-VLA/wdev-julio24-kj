
// import { Counter } from './components/Counter';
import { CounterEffect } from './components/CounterEffect';

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="count-color">Hello world</h1>

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

      <CounterEffect />
    </div>
  )
}

export default App
