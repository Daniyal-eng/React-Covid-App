import { useEffect, useState } from "react";
import "./style.css";

const Covid19 = () => {

    const [LiveData,setLiveData] =useState([]);
  const getCovidData = async () => {
    try {
      const responce = await fetch("https://data.covid19india.org/data.json");
      const Data = await responce.json();
    //   console.log(Data);
    //   console.log(responce);
      setLiveData(Data.statewise[0])
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section className="Covid-section mt-5">

        <div className="container">
        <h1 className="text-center text-white">
          <i class="bi bi-dot text-danger "></i>LIVE
        </h1>
        <h3 className="text-center text-white">COVID-19 CORORNA VIRUS</h3>
            
          <div className="row justify-content-around pt-5">
            <div className="col-md-3">
              <div className="card country-card " style={{ width: `19rem` }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="span-text">OUR</span>COUNTRY
                  </h5>
                  <p className="card-text">PAKISTAN</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card  recovered-card" style={{ width: `19rem` }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="span-text">TOTAL</span>RECOVERED
                  </h5>
                  <p className="card-text">{LiveData.recovered}</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card  confirmed-card" style={{ width: `19rem` }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="span-text">TOTAL</span>CONFIRMED
                  </h5>
                  <p className="card-text">{LiveData.confirmed}</p>
                </div>
              </div>
            </div>


          </div>


          <div className="row justify-content-around pt-5">
            <div className="col-md-3">
              <div className="card deaths-card " style={{ width: `19rem` }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="span-text">TOTAL</span>DEATHS
                  </h5>
                  <p className="card-text">{LiveData.deaths}</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card  active-card" style={{ width: `19rem` }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="span-text">TOTAL</span>ACTIVE
                  </h5>
                  <p className="card-text">{LiveData.active}</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card update-card " style={{ width: `19rem` }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="span-text">LAST</span>UPDATE
                  </h5>
                  <p className="card-text">{LiveData.lastupdatedtime}</p>
                </div>
              </div>
            </div>


          </div>


          

          </div>          
      </section>
    </>
  );
};

export default Covid19;
