// create your App component here
import React, { useState, useEffect } from 'react'

function App() {

  const [image, setImage] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(
    () => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => setImage(data.message))
      setIsLoaded(true)

    }, []
  )



  return (
    <div>
      {isLoaded ? <img src={image} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  )
}

export default App