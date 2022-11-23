import Card from "~/components/Card";
import React from "react";
import { useState,useEffect } from "react";

export default function CropResult() {
  const crop = localStorage.getItem("crop");
  const [arr, setArr] = useState([]);
  const [num, setNum] = useState(0);
  const [info,setInfo] = useState(null);
  const [nutrients,setNutrients] = useState(null);
  const data = [
    "https://www.croptrust.org/fileadmin/_processed_/f/e/csm_2016_10_14_Getty_E_riz-darker-1_3a3879116d.jpg",
    "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Jute_Field_Bangladesh_%287749587518%29.jpg",
    "https://www.apnikheti.com/upload/crops/4929idea993089idea99cottonplant1.jpg",
    "https://www.agrifarming.in/wp-content/uploads/2015/03/37066178_1588101144652379_7393547614630707200_n.jpg",
    "https://plantix.net/en/library/assets/custom/crop-images/papaya.jpeg",
    "https://www.asiafarming.com/wp-content/uploads/2016/03/Orange-Cultivation.jpg",
    "https://www.agrifarming.in/wp-content/uploads/2020/06/Comp2-17.jpg",
    "https://www.apnikheti.com/upload/crops/6086idea99muskmelons-387466_960_720.jpg",
    "https://5.imimg.com/data5/QH/WS/MY-29907888/watermelon-plants-500x500.png",
    "https://www.apnikheti.com/upload/crops/1850idea99grapes.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
    "https://www.apnikheti.com/upload/crops/724idea99banana.jpg",
    "https://www.apnikheti.com/upload/crops/131idea99pomegrarnate.jpg",
    "https://cdn.britannica.com/14/157214-050-3A82D9CD/kinds-lentils.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Black_gram.jpg/1200px-Black_gram.jpg",
    "https://thumbs.dreamstime.com/b/mung-bean-plant-close-up-fruits-scientific-name-vigna-radiata-195861069.jpg",
    "https://img1.exportersindia.com/product_images/bc-full/2021/8/8205260/moth-beans-1628848149-5940677.jpeg",
    "https://gardenerspath.com/wp-content/uploads/2022/02/How-to-Grow-Pigeon-Peas-Feature.jpg",
    "https://www.apnikheti.com/upload/crops/489idea99Red-kidney-beans-2.jpg",
    "https://www.agrifarming.in/wp-content/uploads/2015/05/Chickpea-Farming.jpg",
    "https://www.researchgate.net/profile/Ulrika-Samnegard/publication/301619692/figure/fig1/AS:354662810177536@1461569611340/Coffee-plants-in-bloom-top-and-ripening-coffee-berries-bottom.png",
  ];
  useEffect(() => {
    // getting crops
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://20.244.2.184/api/crops/',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setArr(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    for(var i = 0; i < arr.length; i++){
      if(arr[i].name == crop){
        setNum(i);
      }
    }

    // nutrients getter
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      'crop': crop 
    });
    var config = {
      method: 'post',
      url: 'http://20.244.2.184/api/nutrecom/',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setNutrients(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });    

    // getting info
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      'search': 'rice' 
    });
    var config = {
      method: 'post',
      url: 'http://20.244.2.184/api/info/',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
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



  },[])
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-2xl font-medium">{crop}</p>
      <image src={data[num]} className="w-1/2 h-1/2 mx-auto" />
      <Card className="h-52" />
      <p>something text</p>
    </div>
  );
}
