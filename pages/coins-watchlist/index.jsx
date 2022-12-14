import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
// import Emoji from '../../components/Emoji';
// import axios from 'axios';
import MainAppLayout from '../../components/layout-components/MainAppLayout';
import CoinItem from '../../components/coins-watchlist-page-components/CoinItem';
// import { useSelector } from 'react-redux';

// const axios = require('axios');
// export const coinsData = coinsData;

function WatchPage({ coinsData }) {
  // const { amount } = useSelector((state) => state.cart);

  const exploreNotify = () =>
    toast(
      <div>
        click on any of the coin icons below{' '}
        {/* <Emoji symbol="👇" label="Backhand Index Pointing Down" />, */}
        to explore more about that coin.
      </div>
    );

  useEffect(() => {
    exploreNotify();
  }, []);

  return (
    <MainAppLayout>
      <main className="px-3 sm:px-8 w-full md:w-10/12 mx-auto md:mt-8">
        <div className="coin-search-tab xsm:pt-4">
          <input
            className="custom--input w-full px-4 py-3 rounded"
            type="text"
            placeholder="search a coin"
          />
        </div>
        <section className="coins-list-section pt-4 sm:pt-8 mt-2">
          <div className="list-categories flex pb-3 border-b">
            <div className="w-2/12 flex flex-row-reverse xl:w-[10%]">
              <div className="w-1/2 font-bold montserrat text-center">#</div>
            </div>
            <div className="w-2/12 text-center font-bold montserrat xl:w-[10%]">Coin</div>
            <div className="w-[calc(25%_-_15px)] text-center font-bold montserrat xl:w-[10%]">
              Price
            </div>
            <div className="w-[calc(16.66%_+_15px)] font-bold montserrat xl:w-[10%] text-center">
              24h
            </div>
            <div className="hidden xl:inline-block text-center font-bold montserrat xl:w-[17%]">
              Total vol
            </div>
            <div className="hidden xl:inline-block text-center font-bold montserrat xl:w-[18%]">
              Mkt cap
            </div>
            <div className="w-3/12 text-center font-bold montserrat xl:w-[25%]">Last 7 days</div>
          </div>
          {coinsData.map((coin) => {
            return <CoinItem coin={coin} key={coin.id} />;
          })}
        </section>
      </main>
    </MainAppLayout>
  );
}

export default WatchPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true'
  );
  const coinsData = await response.json();

  // const coinData = axios
  //   .get(
  //     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true'
  //   )
  //   .then((response) => {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error);
  //   });

  // const finalCoinData = JSON.stringify(coinData);

  return {
    props: {
      coinsData
    }
  };
}
