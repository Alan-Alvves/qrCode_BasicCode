import './App.css'
import image from './assets/image-qr-code.png'
function App() {


  return (
    <div className='container'>
        <div className='containerBox'>
            <img src={image} alt='qr code image' className='styleImg'/>
            <div className='textArea'>
                <h3 className='textTitle'>
                Improve your front-end skills by building projects  
                </h3>
                <h3 className='textSub'>
                Scan the QR code to visit Frontend Mento and take your coding skills to the next level
                </h3>
            </div>
        </div>
    </div>
  )
}

export default App
