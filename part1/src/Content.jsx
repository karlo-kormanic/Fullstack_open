import Part from './Part.jsx'

const Content = (props) => {
    return (
        <>
            <Part name = {props.part1} number = {props.exercise1}/>
            <Part name = {props.part2} number = {props.exercise2}/>
            <Part name = {props.part3} number = {props.exercise3}/>
        </>
    )
}

export default Content;