//Construction
const { useState, useEffect } = React;

const LiveValue = () => {
  const [exchangeAmount, setExchangeAmount] = useState("CPM");
  const [convertor, setConvertor] = useState("BTC");
  const [coinName, setCoinName] = useState("CPM Coin");
  const [convertCoinName, setConvertCoinName] = useState("Bitcoin ");
  const [currencyValue, setCurrencyValue] = useState(1.43587);
  const [formValue, setFormValue] = useState({ amount: 50, convertor: null });
  const [cpmIncrease,setCpmIncrease]=useState(1000)
  const [newCpmIncrease,setNewCpmIncrease]=useState({cpmBlance:1000,usdBlance:100})
  console.log("coni", coinName);
  const handleForm = (e) => {
    setExchangeAmount(e.target.value.split("-")[0]);
    setConvertor(e.target.value.split("-")[1]);
    setCurrencyValue(e.target.value.split("-")[2]);
    setCoinName(e.target.value.split("-")[3]);
    setConvertCoinName(e.target.value.split("-")[4]);
    console.log(e.target.value);
  };

  // const apikey ={
  //   key:'f836f93b-6ac2-4e0d-8010-ee59b9033da9'
  // }

  // useEffect(() => {
  //   fetch(`https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=${apikey.key}`)
  //   .then((res)=>res.json())
  //   .then((data)=>console.log(data))

  // }, [])

  const data = [
    {
      id:1,
      exchangeSymbol: "CPM-BTC",
      coinName: "CPM Coin",
      convertCoinName: "Bitcoin",
      currencyValue: 1.43587,
    },
    {
      id:2,
      exchangeSymbol: "ETH-CPM",
      coinName: "Ethereum",
      convertCoinName: "American Dollar",
      currencyValue: 50000,
    },
    {
      id:3,
      exchangeSymbol: "BTC-USD",
      coinName: "Bitcoin",
      convertCoinName: "American Dollar",
      currencyValue: 47226.4725,
    },
    {
      id:4,
      exchangeSymbol: "BTC-CPM",
      coinName: "Bitcoin",
      convertCoinName: "CPM Coin",
      currencyValue: 696439.6094,
    },
    {
      id:5,
      exchangeSymbol: "BNB-USD",
      coinName: "Binance",
      convertCoinName: "American Dollar",
      currencyValue: 430.6023,
    },
    {
      id:6,
      exchangeSymbol: "BNB-CPM",
      coinName: "Binance",
      convertCoinName: "CPM Coin",
      currencyValue: 6350.008412,
    },
    {
      id:7,
      exchangeSymbol: "USD-CPM",
      coinName: "American Dollar",
      convertCoinName: "CPM Coin",
      currencyValue: 14.74680561,
    },
  ];
  return (
    <section id="cpm_live_value" style={{maxWidth:'750px',margin:'auto'}}>
      <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <div className="coin_form mb-4 m-auto w-sm-100 ">
              <div style={{ borderRadius: "5px" }}>
                <div
                  className="form_header text-center p-3 text-center"
                  style={{
                    border: "1px solid gray",
                    background: "black",
                    color: "white",
                  }}
                >
                  <h3>CPM Coin Value</h3>
                  <h4>1 CPM COIN = $0.0674103</h4>
                </div>
                <form action="" className="currency-convertor p-5 ">
                  <h5>Currency Convertor</h5>
                  <h6 className="pt-3">Exchange-symbol</h6>
                  <select
                    class="form-select form-select-md mb-3"
                    aria-label=".form-select-lg example"
                    style={{ cursor: "pointer" }}
                    onChange={handleForm}
                  >
                    {data.map(
                      ({
                        exchangeSymbol,
                        currencyValue,
                        coinName,
                        convertCoinName,
                      }) => (
                        <option
                          value={`${exchangeSymbol}-${currencyValue}-${coinName}-${convertCoinName}`}
                        >
                          {exchangeSymbol}
                        </option>
                      )
                    )}
                  </select>
                  <div className="row cpm-description ">
                    <div className="col-md-6">
                      <h5>I have:</h5>
                      <p>
                        {coinName} ({exchangeAmount})
                      </p>
                      <span className="amount">Amount:</span> <br />
                      <input
                        type="number"
                        name=""
                        className='form-control w-75 mt-1'
                        id=""
                        value={formValue.amount}
                        onChange={(e) =>
                          setFormValue({ ...formValue, amount: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <h5>I want:</h5>
                      <p>
                        {convertCoinName} ({convertor}){" "}
                      </p>
                      <span className="amount ">Amount:</span>

                      <h6 class="input_design w-75 mt-1" style={{borderRadius:'2px'}}>
                        {(currencyValue * formValue.amount)}
                      </h6>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="cpm_evolution" className="mb-5 mx-2">
        <div className="container">
          <div className="row ">
            <div className="coin_form mb-5 m-auto w-100 text-center px-5 ">
              <h4 className="pt-3" style={{color:'#757171'}}>CPM Evolution</h4>
              <p>step 1: <span className='main'>Your Current CPM Coin Balnace is :</span></p>
              <div className="row">
                <div className="col-md-6">
                  <h5>CPM Coin (CPM)</h5>
                  <input type="text" name="" id="" value={cpmIncrease} onChange={(e)=>setCpmIncrease(e.target.value)} className='form-control'/>
                </div>
                <div className="col-md-6">
                  <h5>American Dollar (USD)</h5>
                  <h4 className='amount-h'>$ {(cpmIncrease * 0.0678113).toFixed(2)}</h4>
                </div>
              </div>
              <div className="step-2 row mt-5" >
                <p className='mt-2  px-2' >step 2: <span className='main'>Your New CPM Coin value if it increase at:</span></p>
                <div className="row">
                  <div className="col-md-6">
                    <h5>Your CPM Balance</h5>
                    <input type="text" name="" id="" className='form-control  ' value={newCpmIncrease.cpmBlance} onChange={(e)=>setNewCpmIncrease({...newCpmIncrease,cpmBlance: e.target.value})}/>
                  </div>
                  <div className="col-md-6">
                    <h5>CPM Increase at (USD) $:</h5>
                    <input type="text" name="" id=""  className='form-control ' value={newCpmIncrease.usdBlance} onChange={(e)=>setNewCpmIncrease({...newCpmIncrease,usdBlance: e.target.value})}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom text-center mb-3" >
          <div className="first">
            <h5 className='proc'>Progression %</h5>
            <h4 className='usd_cpm' >$ 0.00 %</h4>
          </div>
          <div className="second pt-4 pb-2">
            <h5 className='proc'>New Balance USD</h5>
            <h4 className='usd_cpm' >$ { (newCpmIncrease.cpmBlance * newCpmIncrease.usdBlance).toLocaleString('en-US')}</h4>

          </div>
        </div>
      </div>
    </section>
  );
};

// APP
const App = () => (
  <div className="container mt-4">
    <LiveValue />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
