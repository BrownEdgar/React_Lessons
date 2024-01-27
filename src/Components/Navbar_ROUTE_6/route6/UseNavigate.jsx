// /////////////////////////////////////////////////////////////////////////////
// * Window օբյեկտում "history"-ի հետ աշխատելու հնարավորություն կա, բայց այստեղ խորհուրդ չի տրվում օգտվել դրանից
// useNavigate հուկը նոր է (փոխարինում է հին 'useHistory' հուկին, հիմա հման հուկ չկա)։Այն մեզ վերադարձնում է ֆունկցիա։
// useNavigate-ը աշխատում է թ պարամետրերի հետ
// 1․ Այն է թե ուր ենք ուզում  "redirect" անել այցելուին (url)
// 2․
// {replace:true , state} Переодресация, եթե չենք ուսում "history"-ում ավելացնել:state-ը կարող է լինել կամայական տվյալ, որը կարող ենք կարդալ այն հասցեում որտեղ տեղապոխվենք useLocation() հուկի միջոցով
// /////////////////////////////////////////////////////////////////////////////

import { useNavigate } from 'react-router-dom'

export default function UseNavigate() {
  const navigate = useNavigate()

  const goBack = () => { navigate(-1) } // մեկ քայլ հետ
  const goHome = () => { navigate('/', { replace: false }) } // {replace:false} by default
  return (
    <div>
      <button onClick={goBack}>go Back</button>
      {/* լավ չի! պետք է սովորական <Link to='/'>  */}
      <button onClick={goHome}>go Home</button>
    </div>
  )
}
