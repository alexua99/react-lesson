import {Users} from "./data/Users";
import List from "./component/list/List";

export default function App() {

    // console.log(Users)
    //let user = true;
    //
    const newObjIf = Users.map(item => (
        // && = if
        // item.age > 18 && (
        //     <li key={item.id}>
        //         Hello: {item.name} <br/>
        //         Age: {item.age}
        //     </li>
        // )

        // if else  if {<li>Aprove: {item.name} Age: {item.age}</li>} else {<li>Error: {item.name} Age: {item.age}</li>}
        // item.age > 18 ? <li className='list'>Aprove: {item.name} Age: {item.age}</li> : <li className='list'>Error: {item.name} Age: {item.age}</li>

        item.age > 18 ? <List key={item.id} name={item.name} age={item.age} /> : <List key={item.id} name={item.name} age={item.age} />
    ))

    // Array
    const arr = ["Sasha", 'Olya', 'Sveta', 'Misha']
    const newArr = arr.map(item => <li className='list' key={item}>{item}</li>)

    return (
      <ul>

         {/*<li>{arr[0]}</li>*/}
         {/*<li>{arr[1]}</li>*/}
         {/*<li>{arr[2]}</li>*/}
         {/* {*/}
         {/*     arr.map(item => (*/}
         {/*         <li>{item}</li>*/}
         {/*     ))*/}
         {/* }*/}


          {/*{newArr}*/}
          {newObjIf}
      </ul>
    );
}
