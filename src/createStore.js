// solution
export default function createStore(reducer){
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state;
  }

  function render(){
    document.getElementById('container').innerHtml = state;
  }

  dispatch({type: "@@init"});

  return {dispatch, getState};
}
