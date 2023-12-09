import React, { useEffect } from 'react'
import { useParams, useNavigate, useLocation, redirect } from 'react-router-dom'

export default function Post() {
  const navigate = useNavigate()
  //այստեղ այս հուկը պետք է, որպեսզի ստանանք <Link>-ի  "state"-ի արժեքը
  const location = useLocation()
  // console.log(location.state)
  const goBack = () => { navigate(-1) } // մեկ քայլ հետ
  const { id } = useParams()

  useEffect(() => {
    if (id === '6') {
      navigate("/")
    }
  }, [])

  return (
    <div>
      <h1>Post N {id}</h1>
      <button onClick={goBack} className="Post-Back">go Back</button>
    </div>
  )
}
