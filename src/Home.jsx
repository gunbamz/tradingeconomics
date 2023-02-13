import React, { useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";

export default function Home() {
     const [val, setVal] = useState("GDP");
     const [err, setErr] = useState(false);
     const [data, setData] = useState(null);
     const [isSending, setIsSending] = useState(false);

    const handleClick = async () => {
      let url = `https://api.tradingeconomics.com/historical/country/mexico/indicator/${val.toLocaleLowerCase()}?c=guest:guest&f=json`
    if (isSending) return;
    setIsSending(true);
    try {
        const res = await Axios.get(url);
        setErr(false)
        setVal(res.data[0].Category)
        setData(res.data)
    } catch (err) {
        setErr(true)
        console.log(err)
      }
    setIsSending(false);
  };

    return (
        <div id="home">
            <h3>
            {`Plotting charts of Mexico ${val.toUpperCase()}`}.
            </h3>
            <br />
            <div className="home-flex">
            <input
              type="text"
              name="lev"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="home-input"
              placeholder="indicator.."
            />
            <button
              className="home-button"
              disabled={isSending}
              onClick={handleClick}
            >
             Load data
            </button>
            {err && <span>no such indicator</span>}
          </div>
          <div id="chart">
            {isSending ? <p>loading</p> : data ?  <BarChart loader={handleClick} data={data} /> : 
            <p> Kindly click on the above button to see the infomation you need </p>}
          </div>
        </div>
    );
}