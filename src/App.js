import "./styles.css";
import {useState} from 'react';
import React from 'react';

function App (){

  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  function addItem(){
    if(input !== ''){
      var item = list.push = input;
      setList(list => [...list, item]);
      setInput('');
    }else{
      alert("Digite uma tarefa para ser inserida!");
    }
  }

  function removeItem(content){
    var item = list;
    item = item.filter(l => l !== content);
    setList(item);
  }

    return (
      <div className="container">
        <h1 id="title">LISTA DE TAREFAS</h1>

        <div className="newTask">
          <input type="text" id="inputTask" placeholder="Digite uma nova tarefa..." value={input} onChange={(event) => setInput(event.target.value)}/>
          <button id="addTask" onClick={addItem}>+</button>
        </div> 

        {list.map((item, indice) => (
        <div className="itemList" key={indice} onClick={() => removeItem(item)}>
          <span>{item}</span>
        </div>
        ))}

      </div>
    );
};

export default App;
