import React, { Fragment, useEffect, useState } from 'react'
import './Main.css'
import axios from 'axios';
import { ArrowDropDownOutlined, ArrowDropUpOutlined } from '@mui/icons-material';
import { InputLabel, MenuItem, Pagination, Select } from '@mui/material';


function Main() {
  let [data, setData] = useState([]);
  let [row, setRow] = useState('50')
  let [count, setCount] = useState(283);
  let [page,SetPage] = useState(1);

 
  
  useEffect(() => {
    setTimeout(() => {
      axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${row}&page=${page}`)
      // axios.get(url)
        .then((res) => { setData(res.data) })
        .catch((err) => { console.log(err); })
    }, 1000)



  }, [row,page])

  let handleChange = (e) => {

    if (parseInt(e.target.value) === 50) {
      setCount(283)
    } else if (parseInt(e.target.value) === 100) {
      setCount(142)
    } else {
      setCount(48)
    }
    setRow(e.target.value)
  }

  let changePage = (e) =>{
    SetPage(parseInt(e.target.innerText))
    // console.log(typeof(e.target.innerText));
  }

  return (
    <div className='main'>



      <table className='table'>

        <thead>
          <tr>
            <th style={{ width: "50px" }}>#</th>
            <th style={{ width: "325px" }}>Coin</th>
            <th style={{ width: "200px" }}>Price</th>
            <th style={{ width: "100px" }}>24hr high</th>
            <th style={{ width: "100px" }}>24hr low</th>
            <th style={{ width: "100px" }}>24hr</th>
            <th>24hr Volume</th>
            <th>Market Cap</th>
          </tr>
        </thead>

        <tbody>
          {data.map((x, key) => {
            return (
              <Fragment key={key}>
                <tr>
                  <td><p>{x.market_cap_rank}</p></td>
                  {/* <td><p>{x.rank}</p></td> */}
                  <td>
                    <div style={{ fontWeight: "bold" }}>
                      <img className='sym' src={x.image}></img>
                      <p style={{ display: 'inline', fontSize: "15px", marginTop: "5px" }}> {x.name}</p>
                      <p style={{ display: 'inline', color: "GrayText", fontSize: "12px" }}> {String(x.symbol).toUpperCase()}</p>
                    </div>
                  </td>
                  <td><p>${x.current_price}</p></td>
                  <td><p>${x.high_24h}</p></td>
                  <td><p>${x.low_24h}</p></td>
                  <td>
                    <p> {/*<ArrowDropDownOutlined fontSize='medium' sx={{color:"green",width:"15px"}}></ArrowDropDownOutlined>*/}
                      {parseFloat(x.price_change_percentage_24h) < 0 ? <p style={{ color: "red" }}> <ArrowDropDownOutlined fontSize='medium' sx={{ color: "red", width: "15px" }} />{0 - parseFloat(x.price_change_percentage_24h).toFixed(2)}%</p> : <p style={{ color: "green" }}> <ArrowDropUpOutlined fontSize='medium' sx={{ color: "green", width: "15px" }} />{parseFloat(x.price_change_percentage_24h).toFixed(2)}%</p>}
                    </p>
                  </td>

                  <td><p>${x.total_volume}</p></td>
                  <td><p>${x.market_cap}</p></td>
                </tr>
              </Fragment>
            )
          })}
        </tbody>
      </table>

      <div className='bottom'>
        {
          data.length === 0 ? <></> : <>
            <Pagination className='page' onChange={changePage} size='large' count={count} shape="rounded" />

            <InputLabel id="demo-select-small-label">rows</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={row}
              label="Age"
              size='small'
              onChange={handleChange}
            >
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
              <MenuItem value={300}>300</MenuItem>
            </Select>
          </>
        }

      </div>
    </div>
  )
}

export default Main