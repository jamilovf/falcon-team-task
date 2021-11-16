import './App.css';
import { useState } from 'react';


function App() {
   const [image, setImage] = useState(null)

  const pasteFromClipboard = (e) => {
    if(e.clipboardData.files.length > 0){
      if(e.clipboardData.files[0].type.startsWith("image/")){
        setSnapshotImage(e.clipboardData.files[0]);
      }
    }
  }

  const setSnapshotImage = (file) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImage(fileReader.result);
    }

  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="snapshot-view">
            
            <img alt="snapshot" id="snapshot" onPaste={pasteFromClipboard} src={image}></img>
          </div>
        </div>
        <div className="col-4"></div>
        </div>
    </div>
  );
}

export default App;
