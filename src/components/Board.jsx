import React, { useState } from 'react'
import Square from './Square';

let Board = () => {
    const [state,setState] = useState(Array(9).fill(null));
    const [isXTurn,setisXTurn] = useState(true);

    const checkWinner = () => {
        const logicWinner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for  (const logic of logicWinner){
            const [a,b,c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) return state[a];
        }

        return false;
    }

    const handleClick = (ind) => {
        if (state[ind] !== null) return;
        let copystate = [...state];
        copystate[ind] = (isXTurn) ? "X" : "O";
        //Here the state is not changing instantly the state will change only on re-render
        setState(copystate);
        setisXTurn(!isXTurn);
    }

    const resetAll = () => {
        const arr = Array(9).fill(null);
        setState(arr);
    }

    const isWinner = checkWinner();

    return (isWinner) ? <>
    <h1> {isWinner} won the Game </h1>
    <button onClick={resetAll}> Play again </button>
    </> : (
        <div className='board'>
            <div className='row'>
                <Square onClick = {() => handleClick(0)} value = {state[0]}/>
                <Square onClick = {() => handleClick(1)} value = {state[1]}/>
                <Square onClick = {() => handleClick(2)} value = {state[2]}/>
            </div>
            <div className='row'>
                <Square onClick = {() => handleClick(3)} value = {state[3]}/>
                <Square onClick = {() => handleClick(4)} value = {state[4]}/>
                <Square onClick = {() => handleClick(5)} value = {state[5]}/>
            </div>
            <div className='row'>
                <Square onClick = {() => handleClick(6)} value = {state[6]}/>
                <Square onClick = {() => handleClick(7)} value = {state[7]}/>
                <Square onClick = {() => handleClick(8)} value = {state[8]}/>
            </div>
        </div>
    )
}

export default Board;