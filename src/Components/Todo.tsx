// import React, { useReducer, useState } from "react";

// enum ActionTypes {
//     AddTodo = "addtodo",
// }

// type Action = {
//   type: ActionTypes;
// };

// type State = {
//     name: string;
//     complete: boolean
// };

// function reducer(todos: State, action: Action) {
//     switch (action.type){
//         case ActionTypes.AddTodo:
//         return [...todos, newTodo(action.payload.name)]
//     }
// }

// const newTodo = () => {
//     return {id: Date.now(), name: name, complete: false}
// }

// const Todo = () => {
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");


//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch({type: ActionTypes.AddTodo, payload: {name: name}})
//     setName("")
//   }

//   return (
//     <div>
//       <form onSubmit={}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// };

// export default Todo;
