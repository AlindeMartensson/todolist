import logo from './logo.svg';
import './App.css';
import ToDoInput from './components/ToDoInput';
import List from './components/List'
import { useState } from 'react';



function App() {






  const [title, setTitle] = useState('');

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
    console.log('this is:', {title});
   
    
  };

  const [list, setList] = useState(
   []
  );

  function handleAdd () {

    const newList = [...list];
    newList.push({name : title, red: false, id : id });

    setList(newList);
}



const id = Math.random().toString(32);

function remove(id) {
  const newList = list.filter((item) => item.id !== id);
  
  console.log(id);

  setList(newList);
}





function makeRed(index) {

  const newList = [...list];

  newList[index] = {
    ...newList[index],
    red: !newList[index].red
  };

setList(newList);
  }

  return (
    <div className="App">

      <ToDoInput handleChange={handleChange}
      title={title}
      handleAdd={handleAdd}/>

      <List listItem={list}
      makeRed={makeRed}
      remove={remove}
      />
     
    </div>
  );
}

export default App;
