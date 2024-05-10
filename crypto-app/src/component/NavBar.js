import React from 'react'
import "./NavBar.css"
import { Button} from '@mui/material'

function NavBar() {
  return (
    
    <div className='nav'>
        <div className='image'> 
           <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png'></img>
           <p>Coin</p>
        </div>
        <div className='menu'> 
           <p>Cryptocurrencies</p>
           <p>Exchanges</p>
           <p>NFT</p>
           <p>learn</p>
        </div>
        <div className='button'>
          <Button variant="contained">Login</Button>
        </div>


    </div>
  )
}

export default NavBar