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
          {data.map((item) => (
            <Link to="/cropdetail" className="w-2/4 ">
            <div className="rounded-lg drop-shadow-lg h-36 bg-white flex flex-col justify-center items-center">
              <img width={120} src="cropsearch.png" />
              <p className="text-center font-medium">Crop recomend data</p>
            </div>
          </Link>))}
        </div>
      </div>
    </div>
  );
}
