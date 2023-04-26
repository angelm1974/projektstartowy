import React,{useState} from 'react'
import axios from 'axios'
import FunkcyjnyButton from './FunkcyjnyButton';

function Tabela() {
  const [data, setData] = useState<any[]>([]);

  const handlePobierzDane = () => {
    
    axios.get('http://127.0.0.1:7000/produkt', {
       })
    .then(res => {
        console.log(res.data);
        setData(res.data);
    })
    .catch(err => {
        console.log(err);
    })
    }

    return (
    <div className='container'>
        <FunkcyjnyButton etykieta='Pobierz dane' onClick={handlePobierzDane} />
        <table className="table">
  <thead className="table-dark">
    <th>nazwa</th>
    <th>kategoria</th>
    <th>cena</th>
    <th>dostepnosc</th>
  </thead>
  <tbody>
        {data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.nazwa}</td>
                    <td>{item.kategoria}</td>
                    <td>{item.cena}</td>
                    <td>{item.dostepnosc ? "jest":"brak"}</td>
                </tr>
            )
        })}
  </tbody>
</table>
    </div>
  )
}

export default Tabela