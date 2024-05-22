
import './App.css';
import Navabaar from './components/Navabaar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navabaar title='TextUtils' about='About TextUtils'/>
      <div className='container my-5'>
      <TextForm heading="Enter The text to analtze"/>
      </div>
      
    </>
  );
}

export default App;
