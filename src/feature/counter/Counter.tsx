import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './counterSlice';
import { RootState } from "../../app/store";

const Counter = () : ReactElement => {
    const count = useSelector((state : RootState) => state.concac.count);
    const dispatch = useDispatch();
    const handleDecre : () => void = () => {
        dispatch(decrement());
    }
    const handleIncre : () => void = () => {
        dispatch(increment());
    }
    return (
        <>
            <button onClick={() => handleDecre()}>Click me</button>
            <div>{count}</div>
            <button onClick={() => handleIncre()}>Click me</button>
        </>
    )
}

export default Counter;