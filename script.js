//Construction
const { useState,useEffect } = React;

const LiveValue = () => {
  const [exchangeAmount, setExchangeAmount] = useState("CPM");
  const [convertor, setConvertor] = useState("BTC");
  const [coinName, setCoinName] = useState("CPM Coin");
  const [convertCoinName, setConvertCoinName] = useState("Bitcoin ");
  const [currencyValue, setCurrencyValue] = useState(1.43587);
  const [formValue, setFormValue] = useState({ amount: 50, convertor: null });
console.log('coni',coinName);
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
    { exchangeSymbol: "CPM-BTC",coinName:"CPM Coin",convertCoinName:"Bitcoin", currencyValue: 1.43587 },
    { exchangeSymbol: "ETH-CPM",coinName:"Ethereum",convertCoinName:"American Dollar", currencyValue: 50000 },
    { exchangeSymbol: "BTC-USD", coinName:"Bitcoin",convertCoinName:"American Dollar",currencyValue: 47226.4725 },
    { exchangeSymbol: "BTC-CPM", coinName:"Bitcoin",convertCoinName:"CPM Coin", currencyValue: 696439.6094 },
    { exchangeSymbol: "BNB-USD", coinName:"Binance",convertCoinName:"American Dollar",currencyValue: 430.6023 },
    { exchangeSymbol: "BNB-CPM", coinName:"Binance",convertCoinName:"CPM Coin",currencyValue: 6350.008412 },
    { exchangeSymbol: "USD-CPM", coinName:"American Dollar",convertCoinName:"CPM Coin", currencyValue: 14.74680561 },
  ];
  return (
    <section id="cpm_live_value">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="coin_form mb-5 m-auto w-sm-100 ">
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
                    {data.map(({ exchangeSymbol, currencyValue,coinName,convertCoinName }) => (
                      <option value={`${exchangeSymbol}-${currencyValue}-${coinName}-${convertCoinName}`}>
                        {exchangeSymbol}
                      </option>
                    ))}
                  </select>
                  <div className="row cpm-description ">
                    <div className="col-md-6">
                      <h5>I have:</h5>
                      <p>{coinName} ({exchangeAmount})</p>
                      <span className="amount">Amount:</span> <br />
                      <input
                        type="number"
                        name=""
                        id=""
                        value={formValue.amount}
                        onChange={(e) =>
                          setFormValue({ ...formValue, amount: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <h5>I want:</h5>
                      <p>{convertCoinName} ({convertor}) </p>
                      <span className="amount">Amount:</span>

                      <h6 class="input_design">
                        {currencyValue * formValue.amount}
                      </h6>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
