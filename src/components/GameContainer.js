import React, { useState } from 'react';
import './GameContainer.css';
import { Header, Button, Grid } from 'semantic-ui-react'
import Confetti from 'react-dom-confetti';
import Jump from 'react-reveal/Jump';
import Shake from 'react-reveal/Shake';

const confettiConfig = {
    angle: "0",
    spread: "360",
    startVelocity: "30",
    elementCount: "30",
    dragFriction: "0.2",
    duration: "1000",
    stagger: "0",
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const operations = [
    {
        operator: "mult",
        leftOperand: 5,
        rightOperand: 5,
        solution: 25,
        random_solutions: [25, 32, 15]
    },
    {
        operator: "mult",
        leftOperand: 6,
        rightOperand: 7,
        solution: 42,
        random_solutions: [42, 32, 44]
    },
    {
        operator: "mult",
        leftOperand: {
            operator: "mult",
            leftOperand: 5,
            rightOperand: 5,
        },
        rightOperand: 2,
        solution: 50,
        random_solutions: [25, 32, 15]
    }
];

function GameContainer() {


    const [currentOperation, setCurrentOperation] = useState(operations[0]);
    const [confettisActive, setConfettiActive] = useState(currentOperation.random_solutions.map(() => false));
    const [shakeIt, setShakeit] = useState(0);
    const [jumpIt, setJumpit] = useState(0);

    // Handle clic for all game (check solution & go to another test)
    const handleClick = (responseIndex) => {
        if (currentOperation.random_solutions[responseIndex] === currentOperation.solution) {
            let newConfState = [...confettisActive];
            newConfState[responseIndex] = true;
            setConfettiActive(newConfState);
            setTimeout(() => setConfettiActive(currentOperation.random_solutions.map(() => false)), 1000);
            setTimeout(() => { setJumpit(jumpIt + 1) }, 300);
        } else {
            setShakeit(shakeIt + 1);
        }

        // let newOp = { ...operations[1] };
        let newOp = generateRandomOp();
        // setCurrentOperation(newOp)

        setTimeout(() => { setCurrentOperation(newOp) }, 1000);
    };

    return (
        <div className="GameContainer">
            <Shake spy={shakeIt} duration={1000}>
                <Jump spy={jumpIt}>
                    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Operation operation={currentOperation} />
                            <ProductSolutions operation={currentOperation} handleClick={handleClick} confettisActive={confettisActive} />
                        </Grid.Column>
                    </Grid>
                </Jump>
            </Shake>
        </div>
    )

}

function Operation(props) {
    function createOperationText(operation) {
        // TO DO switch case for all signs
        const opSign = "x";
        return `${operation.leftOperand} ${opSign} ${operation.rightOperand}`;
    }

    return (
        <Header size='huge'>{createOperationText(props.operation)}</Header>
    );
}

function ProductSolutions(props) {
    return (
        props.operation.random_solutions.map(
            (el, index) => {
                return <p key={index}>
                    <ProductSolution
                        value={el}
                        handleClick={() => props.handleClick(index)}
                        confettiActive={props.confettisActive[index]}
                    />
                </p>
            })
    );
}

function ProductSolution(props) {
    return (
        <Button onClick={props.handleClick}>
            <Confetti active={props.confettiActive} config={confettiConfig} />
            {props.value}
        </Button>
    );
}

// function timerBar() {
// }

function generateRandomOp() {

    function genIntBetween(floor, ceil) {

        let res = Math.floor(Math.random() * ceil) + floor;
        // console.log(`Floor : ${floor} | Ceil : ${ceil} | Result : ${res}`);
        return res;
    }

    function nearIntInf(num) {
        return num - Math.floor(num / 3);;
    }
    function nearIntSup(num) {
        return num + Math.floor(num / 3);
    }

    let leftOp = genIntBetween(1, 9);
    let rightOp = genIntBetween(1, 9);
    let result = leftOp * rightOp;
    let randomSolutions = [genIntBetween(nearIntInf(result), nearIntSup(result)), genIntBetween(nearIntInf(result), nearIntSup(result)), genIntBetween(nearIntInf(result), nearIntSup(result))];



    randomSolutions = randomSolutions.map((sol) => {
        if (sol === result) {
            return sol + 2;
        } else {
            return sol;
        }
    });


    let pos = genIntBetween(0, randomSolutions.length + 1);
    randomSolutions.splice(pos, 0, result);

    return {
        operator: "mult",
        leftOperand: leftOp,
        rightOperand: rightOp,
        solution: result,
        random_solutions: randomSolutions
    };

}

export default GameContainer;

