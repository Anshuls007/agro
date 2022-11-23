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

export async function CropDoc(data){
  var news;

  console.log(data, "data")
  var bodyFormData = new FormData();

  bodyFormData.append("image", data)

  await axios({
      method: 'post',
      url: 'http://uia.centralindia.cloudapp.azure.com/api/detect/',
      bodyFormData,
      headers: { "Content-Type": "multipart/form-data" }
    }).then(function (response) {
      conso
      news = response.data
    })
    .catch(function (error) {
      news = error
    });

    return news
}