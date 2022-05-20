import {useEffect, useState} from 'react'
import './App.css'
import { set } from "cookie-toss";

function App() {
  const [phone, setPhone] = useState('');
  const [added, setAdded] = useState(false);
  useEffect(() => {
    // save userId post login, in central hub

  }, [])
  const handleAddToCart = () => {
    let phone = prompt("Login using phone to continue...", '');
    if (phone !== null) {
      set({
        // This is the URL at which you've hosted the output of `createIframe`, above:
        iframeUrl: 'https://rapydgenie.netlify.app/',
        dataKey: 'rapidGenieUser',
        data: {
          userId: phone,
        }
      }).then(res => {
        console.log(`set res: ${JSON.stringify(res)}`);
      }).catch(err => {
        console.log(`set err: ${JSON.stringify(err)}`);
      });
      setPhone(phone);
      setAdded(true)
    }
  }
  return (
      <div className="App">
        {phone.length > 0 && (<h2>
          Hi {phone.slice(0, -7) + '*******'}
        </h2>)}
        <div>
          <div>
            <img src={'https://m.media-amazon.com/images/I/51yFtsNy+qL._SY300_SX300_.jpg'} width={320} height={320} alt={'product'} />
          </div>
          <div>
            <h3>Basmati rice (1KG)</h3>
            <p>Price: ₹5</p>
            {added ? (
                <p>
                  ✓ Added to cart
                </p>
            ) : (<button onClick={handleAddToCart} type="button">
              <img src="https://icongr.am/clarity/add.svg?size=16&amp;color=000" alt="icon"/>
              {' '}Add to cart
            </button>)}
          </div>
        </div>
        {added && (<div style={{
          position: 'absolute',
          bottom: 10,
          left: '45%',
        }}>
          <div>
            1 item
            ₹5
          </div>
          <div>
            <button type="button">
              Checkout {' '} →
            </button>
          </div>
        </div>)}
      </div>
  )
}

export default App
