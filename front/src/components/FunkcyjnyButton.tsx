import React  from 'react'

type Buttonprops = {
    etykieta: string;
    onClick?: () => void;
}

function FunkcyjnyButton({etykieta,onClick}: Buttonprops) {
   
 

  return (
    <div>
    <button type="button" onClick={onClick} className="btn btn-primary mb-4">
        {etykieta}
    </button>
    
  </div>
  )
}

export default FunkcyjnyButton