import { Form, Link } from "@remix-run/react";
import { data } from "node-persist";
import { useState } from "react";
import Button from "~/components/Button";
import Field from "~/components/Field";

export default function CropScan() {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage({
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
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
  return (
    <div>
      {/* <p>Please enter this details</p> */}
      {/* <Form className="flex flex-col gap-4">
        {!image ? (
          <label
            for="dropzone-file"
            className="flex flex-col justify-center items-center w-full h-64 bg-white rounded-lg border-2 border-gray-300 border-dashed cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className=" font-semibold">Product Image</p>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              onChange={onImageChange}
              id="dropzone-file"
              name="image"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        ) : (
          <div
            className="h-64 w-full rounded-lg"
            style={{
              background: `url('${image.image}')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
          </div>
        )}
        <Button theme="monochrome" className="w-full">
          Submit
        </Button>
      </Form>
      <Button
        as={Link}
        to="/cropsearchresult"
        theme="monochrome"
        className="w-full mt-4"
      >
        cropsearchresult
      </Button> */}

      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Link to="/cropsearch" className="w-2/4 ">
            {/* <div className="rounded-lg drop-shadow-2xl h-36 bg-white flex flex-col justify-center items-center"> */}
              <img width={} height={} src={data[0]} className="rounded-xl drop-shadow-lg"/>
              {/* <p className="text-center font-medium">Crop recomend data</p> */}
            {/* </div> */}
          </Link>
          <Link to="/cropsearch" className="w-2/4 ">
            {/* <div className="rounded-lg drop-shadow-2xl h-36 bg-white flex flex-col justify-center items-center"> */}
              <img src={data[1]} className="rounded-xl drop-shadow-lg"/>
              {/* <p className="text-center font-medium">Crop recomend data</p> */}
            {/* </div> */}
          </Link>
        </div>
        <div className="flex gap-2">
          <Link to="/cropsearch" className="w-2/4 ">
            {/* <div className="rounded-lg drop-shadow-2xl h-36 bg-white flex flex-col justify-center items-center"> */}
              <img src={data[2]} className="rounded-xl drop-shadow-lg"/>
              {/* <p className="text-center font-medium">Crop recomend data</p> */}
            {/* </div> */}
          </Link>
          <Link to="/cropsearch" className="w-2/4 ">
            {/* <div className="rounded-lg drop-shadow-2xl h-36 bg-white flex flex-col justify-center items-center"> */}
              <img src={data[3]} className="rounded-xl drop-shadow-lg"/>
              {/* <p className="text-center font-medium">Crop recomend data</p> */}
            {/* </div> */}
          </Link>
        </div>
        <div className="flex gap-2">
          <Link to="/cropsearch" className="w-2/4 ">
            {/* <div className="rounded-lg drop-shadow-2xl h-36 bg-white flex flex-col justify-center items-center"> */}
              <img src={data[4]} className="rounded-xl drop-shadow-lg"/>
              {/* <p className="text-center font-medium">Crop recomend data</p> */}
            {/* </div> */}
          </Link>
          <Link to="/cropsearch" className="w-2/4 ">
            {/* <div className="rounded-lg drop-shadow-2xl h-36 bg-white flex flex-col justify-center items-center"> */}
              <img src={data[5]} className="rounded-xl drop-shadow-lg"/>
              {/* <p className="text-center font-medium">Crop recomend data</p> */}
            {/* </div> */}
          </Link>
        </div>
        <div className="flex gap-2">
          <Link to="/cropsearch" className="w-2/4 ">
            {/* <div className="rounded-lg drop-shadow-2xl h-36 bg-white flex flex-col justify-center items-center"> */}
              <img src={data[6]} className="rounded-xl drop-shadow-lg"/>
              {/* <p className="text-center font-medium">Crop recomend data</p> */}
            {/* </div> */}
          </Link>
          <Link to="/cropsearch" className="w-2/4 ">
            {/* <div className="rounded-lg drop-shadow-2xl h-36 bg-white flex flex-col justify-center items-center"> */}
              <img src={data[7]} className="rounded-xl drop-shadow-lg"/>
              {/* <p className="text-center font-medium">Crop recomend data</p> */}
            {/* </div> */}
          </Link>
        </div>
      </div>
    </div>
  );
}
