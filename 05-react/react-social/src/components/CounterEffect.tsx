import { useState, FC } from 'react'

interface Props {
    initialCount?: number;
    incrementBy?: number;
    decrementBy?: number;
}

export const CounterEffect: FC<Props> = ({ initialCount = 1, incrementBy = 1, decrementBy = 1 }) => {

    const [count, setCount] = useState<number>(initialCount);

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

    return (
        <div className="flex items-center gap-x-2 count-color">
            <button onClick={decrement} className="btn-primary">-</button>
            <span className="text-[#888]">{count}</span>
            <button onClick={increment} className="btn-primary">+</button>
        </div>
    )
}
