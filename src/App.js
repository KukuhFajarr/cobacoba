// import axios from 'axios'
import React, { useState } from 'react'
// import PropTypes from 'prop-types'

const data={
  nama_barang:'',
  total:0
}

const App = props => {
  const [databarang, setDatabarang] = useState(data);
  let dataa = {
    nama:'azizah'
  }
  const getData = () => {
    fetch("http://localhost:8000/api/produk", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
  }

  const handleChange = (e) => {
    let tmp = {...databarang};
    tmp[e.target.id] = e.target.value;
    setDatabarang(tmp);
  }

  const postData = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(databarang)
    };
    fetch('http://localhost:8000/api/produk', options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  const updateData = (id) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(databarang)
    };
    fetch('http://localhost:8000/api/produk/'+id, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  const deleteData = (id) => {
    fetch("http://localhost:8000/api/produk/"+id, {method: "DELETE"})
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
  }

  return (
    <div>
    <button onClick={()=>getData()}>get data</button>
    <div>{dataa.nama}</div>
    <input type='text' id='nama_barang' onChange={(e)=>handleChange(e)} />
    <input type='number' id='total' onChange={(e)=>handleChange(e)} />
    <button onClick={()=>postData()}>submit</button>
    <button onClick={()=>updateData(2)}>update</button>
    <button onClick={()=>deleteData(2)}>delete</button>
    </div>
  )
}

App.propTypes = {}

export default App