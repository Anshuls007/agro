import axios from "axios";

export async function getNews(){
    var news;

    await axios({
        method: 'post',
        url: 'http://uia.centralindia.cloudapp.azure.com/api/news/',
        data: {
          search: 'agri',
          lang: 'en'
        }
      }).then(function (response) {
        news = response.data
      })
      .catch(function (error) {
        news = error
      });

      return news
}

export async function getCrop({data}){
    var news;

    await axios({
        method: 'post',
        url: 'http://uia.centralindia.cloudapp.azure.com/api/croprecommendor/',
        data
      }).then(function (response) {
        news = response.data
      })
      .catch(function (error) {
        news = error
      });

      return news
}

export async function CropDoc(name){
  var news;

  var axios = require('axios');
  var FormData = require('form-data');
  var fs = require('fs');
  var data = new FormData();
  console.log(name, "name")
  data.append('image', fs.createReadStream(String(name)));

  var config = {
    method: 'post',
    url: 'http://20.244.2.184/api/detect/',
    headers: { 
      ...data.getHeaders()
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  return null;

}