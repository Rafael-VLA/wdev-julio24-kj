import { useState, FC, Fragment, ReactNode, CSSProperties } from 'react'
// import './counter-styles.css' // => styles con clases (globales) 
// import styles from './counter.module.css'; // => styles con módulos

// Tarea: Definir la props decrementBy que sea opcional y que tenga un valor por defecto de 1
interface Props {
    initialCount?: number;
    title?: string;
    incrementBy?: number;
    decrementBy?: number;
    children: (value: number) => ReactNode
    // title: ReactNode
}

// const containerStyles = (count: number) => {

//     return { 
//         color: count % 2 === 0 ? "red" : "blue" 
//     }
// }


// export const Counter = ({ initialCount, incrementBy = 1 }: Props) => {
export const Counter: FC<Props> = ({ initialCount = 1, incrementBy = 1, decrementBy = 1, children }) => { // FC = Funcional Component

    console.log("Mi initial", initialCount)

    const [count, setCount] = useState<number>(initialCount); // [ state, setState ]

    console.log("Me renderizo");

    const containerStyles: CSSProperties = { 
        // color: count % 2 === 0 ? "red" : "blue" 
        color: "#888",
    }

    const increment = (): void => {
        setCount(count + incrementBy)
    };

    //Tarea: Crear el método decrement y usarlo en el evento del botón
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

    // {{  }} => { }
    return (
        <Fragment>
            { children(count) }

            <div className="flex items-center gap-x-2 count-color">
                <button onClick={decrement} className="btn-primary">-</button>
                {/* <span className={ styles.countLine }>{count}</span> */}
                <span style={containerStyles}>{count}</span>
                <button onClick={increment} className="btn-primary">+</button>
            </div>

            {/* <hr className="mt-4" /> */}
        </Fragment>
    )
}
