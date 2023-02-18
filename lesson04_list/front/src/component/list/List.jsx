
import './index.css'

const style = {
    width: '200px',
    color: 'red'
}

// const classNew = {
//     main: 'list',
//     active: 'red'
// }
//
// const classArr = ['list', 'red']

export default function List(props) {
    return <li style={style} className='list'>Hello: {props.name} Age: {props.age}</li>
}






