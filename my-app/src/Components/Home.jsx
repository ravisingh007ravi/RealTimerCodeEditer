import React from 'react'
import CodeImage from '../Images/code-sync.png'
import {v4 as uuidV4} from 'uuid';


const Home = () => {

  const CreateNewRoom = (e) => {
    e.preventDefault();

    const id = uuidV4()
    console.log(id)
  }

  return (

    <div className='HomeWrapper'>
      <div className='formWrapper'>
        <img src={CodeImage} className='HomeLogo' alt="CodeImage_logo" />
        <h4 className='HomeMainLabel'>Paste Invitaion ROOM-ID</h4>

        <div className='HomeInputGroup'>
          <input type="text" className='HomeInputBox' placeholder='ROOM ID' />
          <input type="text" className='HomeInputBox' placeholder='USERNAME' />
          <button className='Homebtn'>Join</button>
          <span className='homeCreateInfo'>
            If you don't have an invite then create &nbsp;

            <a onClick={CreateNewRoom} href="/" className='HomeCreateNewRoom'>New ROOM</a>
          </span>
        </div>
      </div>
      <footer className='HomeFooter'>
        Built with ❤️ by &nbsp;<a className='HomeFooterDesign' href="https://github.com/ravisingh007ravi">Code's Ravi</a>
      </footer>

    </div>

  )
}

export default Home
