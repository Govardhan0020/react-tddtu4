import React from 'react';
import { useState } from 'react';
import './style.css';

const TodoList = () => {
  const [data, setData] = useState(' ');
  const [list, setList] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [EditId, setEditId] = useState(null);

  const HndeleChange = (e) => {
    setData(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!data) {
      alert('please fill the input box ');
    } else if (data && toggleBtn) {
      
       let updated =  list.map((item) => {
          if (item.id === EditId) {
            return { ...item, title: data };
          }
          return item;
        })
      setList(updated)
      setData('');
      setEditId(null);
      setToggleBtn(false);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: data,
      };
      setList([...list, newItem]);
      setData('');
      console.log(data);
    }
  };

  const DeleteItem = (getid) => {
    console.log(getid);
    const afterDeleted = list.filter((item) => item.id !== getid);
    setList(afterDeleted);
  };

  const EditItem = (getid) => {
    const editdata = list.find((item) => item.id == getid);
    console.log(editdata);
    setToggleBtn(true);
    setEditId(getid);
    setData(editdata.title);
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="enter your todo"
            name="data"
            value={data}
            onChange={HndeleChange}
          />
          <button type="submit"> {toggleBtn ? 'Update ' : ' ADD '} </button>
        </form>
      </div>
      <div className="todolist">
        {list.map((item) => {
          return (
            <div id="todo">
              <div clossName="list">
                {' '}
                <input type="radio" /> {item.title}{' '}
              </div>
              <div className="btn">
                <button onClick={() => DeleteItem(item.id)}> Delete</button>
                <button onClick={() => EditItem(item.id)}> Edit </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
