import React, {useState} from 'react';
import '../index.css';
import initialState from '../Constants/initialState.js';
import EditorBox from '../Components/editorBox.js';
import PreviewBox from '../Components/previewBox.js';


function App() {
  const [state, setState] = useState(initialState);

  function onInputChange(event) {
    setState({content: event.target.value});
    console.log(state.content);
  }

  return (
    <div>
      <h1>Online Markdown Editor</h1>
      <div className="container">
        <EditorBox  updateState={onInputChange} content={state.content}/>
        <PreviewBox content={state.content} />
      </div>
    </div>
  );
}

export default App;
