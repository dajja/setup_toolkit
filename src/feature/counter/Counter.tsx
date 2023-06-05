import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { RootState } from "../../app/store";
import { ReactNode, useState } from "react";

const Counter = (): ReactNode => {
    const count = useSelector((state: RootState) => state.concac.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState<number | string>(0);
    const addValue: number = +incrementAmount;

    const handleDecre = () => {
        dispatch(decrement());
    }
    const handleIncre = () => {
        dispatch(increment());
    }
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIncrementAmount(e.target.value);
    }
    const handleAdd = () => {
        if (Number.isNaN(addValue)) {
            setIncrementAmount("");
        } else {
            dispatch(incrementByAmount(addValue));
        }
    }
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
    return (
        <>
            <div>
                <button onClick={() => handleDecre()}>Click me</button>
                <div>{count}</div>
                <button onClick={() => handleIncre()}>Click me</button>
            </div>
            <div>
                <input type="text" value={incrementAmount} onChange={(e) => changeInput(e)} />
                <button onClick={() => handleAdd()}>Add count</button>
                <button onClick={() => resetAll()}>Reset</button>
            </div>
        </>
    )
}

export default Counter;