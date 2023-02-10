import React from 'react'

const NumberContext = React.createContext()
const Num1 = React.createContext()

const ContextEx = () => {
    return (
        <NumberContext.Provider value={42}>
            <div>
                <Display />
            </div>
        </NumberContext.Provider>
    )
}

const Display = () => {
    return (
        <NumberContext.Consumer>
            {value => <div>The answer is {value}</div>}
        </NumberContext.Consumer>
    )
}

export default ContextEx



