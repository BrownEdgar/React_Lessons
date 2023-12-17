import { useState, useEffect } from 'react'
import { rgbToHex } from './util'

export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut)
  }, [alert])
  return (
    <article
      className={'color'}
      onClick={() => {
        setAlert(true);
        // Click-ից հետո copy  է անում նշված գույնը
        navigator.clipboard.writeText(hex)
      }}
      style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copy to clipboard</p>}
    </article>
  )
}
