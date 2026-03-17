import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    let chars = ""
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (!chars) {
      alert('Bir secim aktiv olmalidi')
      return
    }

    let newPassword = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      newPassword += chars[randomIndex]
    }

    setPassword(newPassword)
  }

  const copyPassword = async () => {
    if (!password) return
    await navigator.clipboard.writeText(password)
    toast.success('Copied!')
  }

  return (
    <div className='container'>
      <Toaster position='top center'/>
      <div className='card'>
        <h1>Password Generator</h1>

        <div className='output-box'>
          <input type="text" value={password} readonly placeholder='Password will apper here' />
          <button onClick={copyPassword}>Copy</button>
        </div>

        <div className='field'>
          <label>Length: {length}</label>
          <input
            type="range"
            min='6'
            max='30'
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className='checkbox-group'>
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            Large Alphabet
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            Small Alphabet
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Numbers
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Symbols
          </label>
        </div>

        <button className="generate-btn" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div >
  )
}

export default App
