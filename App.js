import { useState, useEffect } from 'react'
import { StyleSheet, StatusBar, SaveAreaView } from 'react-native';
import { Platform } from 'react-native';

import CurrentPrice from './SRC/components/CurrentPrice';
import HistoryGraphic from './SRC/components/HistoryGraphic';
import QuotationsList from './SRC/components/QuotationsList';

function addZero(number) {
  if (number <= 9) {
    return "0" + number;
  }
  return number
}

function url(qtdDays) {
  const date = new Date();
  const ListLastDay = qtdDays
  const end_date =
    `${date.getFullYear()}.${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
    console.log(end_date)
  date.setDate(date.getDate() - ListLastDay);
  const start_date =
  `${date.getFullYear()}.${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  console.log(start_date)
  date.setDate(date.getDate() - ListLastDay);
  return `api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
  }

  async function getListCoins(url) {
    let response = await fetch(url);
    let returnApi = await response.json()
    let selectListQuotations = returnApi.bpi
    const queryConstList = Object.keys(selectListQuotations).map((key) => {
      return {
        data: key.split("-").reverse().join("/"),
        valor: selectListQuotations[key]
      }
    });
    let data = queryConstList.reverse();
    return data;
  }

    async function getPriceCoinsGraphic(url) {
      let responseG = await fetch(url);
      let returnApiG = await responseG.json()
      let selectListQuotationsG = returnApiG.bpi
      const queryConstListG = Object.keys(selectListQuotationsG).map((key) => {
        return {
          valor: selectListQuotationsG[key]
        }
      })
      let dataG = queryConstListG;
      return dataG;
    }

    export default function App() {
      
      const [coinsList, setCoinsList] = useState();
      const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
      const [days, setDays] = useState(30);
      const [updateData, setUpdateData] = useState(true);
      const [price, setPrice] = useState();

      function updateDay(number) {
        setDays(number);
        setUpdateData(true)
      }

      function princeQuotation(){
        setPrice(coinsGraphicList.pop())
      }

      useEffect(() => {
        getListCoins(url(days)).then((date) => {
          setCoinsList(date)
        });
        getPriceCoinsGraphic(url(days)).then((dateG) => {
          setCoinsGraphicList(dateG)
        });
        princeQuotation()
        if (updateData) {
          setUpdateData(false)
        }
      }, [updateData]);

      return (
        <SaveAreaView style={styles.container}>
          <StatusBar
            backgroundColor='#f50d41'
            barstyle="dark-content"
          />
          <CurrentPrice lastQuotation={price}/>
          <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
          <QuotationsList filterDay={updateDay} listTransaction={coinsList} />
          <mainContent />
        </SaveAreaView>
      )
    }
    const styles = StyleSheet.create({
      container:{
        flex:'1',
        backgroundColor:"#000000",
        alignItems: 'center',
        paddingTop: Platform.OS === "Android" ? 40 : 0 
      }
    });