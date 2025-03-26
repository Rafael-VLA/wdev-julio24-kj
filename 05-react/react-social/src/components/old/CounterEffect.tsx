import { useState, FC, useEffect } from 'react'

interface Props {
    initialCount?: number;
    incrementBy?: number;
    decrementBy?: number;
}

const getTodo = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const todo = await res.json();

    return todo;
}


export const CounterEffect: FC<Props> = ({ initialCount = 1, incrementBy = 1, decrementBy = 1 }) => {

    const [count, setCount] = useState<number>(initialCount);
    const [todo, setTodo] = useState<string>("");

    const increment = (): void => {
        setCount(count + incrementBy)
    };

    const decrement = (): void => {


        setCount((currentCount) => {

            if (currentCount > 0) { // Mientras el contador sea mayor que 0
                const result = currentCount - decrementBy; // 1 < 0
                return result < 0 ? 0 : result; // Se decrementa
            }

            console.log("Devuelvo el mismo valor", currentCount)

            return currentCount; // Si no, se mantiene le mismo valor
        })


    };

    // useEffect se ejecutará cada vez que se renderice el componente
    useEffect(() => { // useEffect = mounted de vue
        // console.log("Counter effect montado")

        return () => { // useEffect == unmounted de vue
            // console.log("Counter effect desmontado")
        }
    })

    /* Petición fecth */
    useEffect(() => { // async - await
        

        const test = async() => {
            const todo = await getTodo();

            setTodo(JSON.stringify(todo))
        }

        test();

        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log(json)
        //     })

    }, [])
    

     /* Manejo de eventos */
    useEffect(() => {

        const preElement = document.querySelector("#counter pre") as (HTMLPreElement | null);

        let timeoutId:number = -1; 

        const handleClick = () => {
            // console.log(preElement.innerText)
            timeoutId = setTimeout(() => {
                console.log("Se ejecutó el setTimeout");
            }, 5000);

        }

        preElement?.addEventListener("click", handleClick)

        return () => {
            clearTimeout(timeoutId)
            preElement?.removeEventListener("click", handleClick)
        }

    }, [])

    // Tarea: Realizar una petición fetch que me obtenga un usuario, imprimir por consola
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(user => {
            console.log(user)
        })

    }, [])

    return (
        <div id="counter">

            <div className="flex items-center gap-x-2 count-color">
                <button onClick={decrement} className="btn-primary">-</button>
                <span className="text-[#888]">{count}</span>
                <button onClick={increment} className="btn-primary">+</button>
            </div>

            <pre className="mt-4 cursor-pointer">
                { todo }
            </pre>

        </div>
    )
}
