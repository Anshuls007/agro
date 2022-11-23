import { unstable_createFileUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { CropDoc } from "utils/api.server";
import Button from "~/components/Button";
import Field from "~/components/Field";

// export async function action({request}){
//   const formData = await request.formData();

//   v

//   const image = formData.get("image")

//   console.log(image, "imagedata")

//   const crop = await CropDoc(image);

//   console.log(crop, "response")

//   return {crop}
// }


export const action = async ({ request }) => {
  const uploadHandler = unstable_createFileUploadHandler({
    maxFileSize: 10_000_000,
    directory: "public/uploads",
    file: ({ filename }) => filename,
  });

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );

  const file = formData.get("image");
  var data;

  if (file) {
    console.log(`File uploaded to server/public/uploads/${file.name}`);
    data = await CropDoc("public/uploads/"+file.name)
  } else {
    console.log("No file uploaded");
  }

  return {data};
};

export default function CropScan() {
  const [image, setImage] = useState(null);
  // const disease = call;
  const data = useActionData()
  const diseasefetch = () => {
    var formdata = new FormData();
    // console.log(image.image, "image");
  formdata.append("image", image.image, "test.jpeg");

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://20.244.2.184/api/detect/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }

  const onImageChange = (event) => {
    var formdata = new FormData();
    // console.log(image.image, "image");
  formdata.append("image", event.target.files[0], "test.jpeg");

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://20.244.2.184/api/detect/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    // if (event.target.files && event.target.files[0]) {
    //   setImage({
    //     image: URL.createObjectURL(event.target.files[0]),
    //   });
    // }
  };
  return (
    <div>
      <p>Please enter this details</p>
    <Form method="post" className="flex flex-col gap-4" encType="multipart/form-data">
        <input type="hidden" name="yoo" value="dsf"/>
        {true ? (
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
              hidden
              id="dropzone-file"
              name="image"
              type="file"
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
            {/* <img src={image.image} alt="preview" className="rounded-lg" /> */}
          </div>
        )}
        {/* <Link to={"/doc"}> */}
        <Button onClick={(e)=>diseasefetch(e)} type="submit" theme="monochrome" className="w-full">
          Submit
        </Button>
        {/* </Link> */}
        {/* {call} */}
      </Form>

      {data&&JSON.stringify(data)}
      
      {/* <Button as={Link} to="/doc" theme="monochrome" className="w-full mt-4">
        doc
      </Button> */}
    </div>
  );
}
