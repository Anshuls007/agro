import { Form, Link, useActionData } from "@remix-run/react";
import { getCrop } from "utils/api.server";
import Button from "~/components/Button";
import Field from "~/components/Field";

export async function action({request}){
  const formData = await request.formData();

  const data ={ 
    k: formData.get("potassium"),
    n: formData.get("nitrogen"),
    p: formData.get("phosphorous"),
    humidity: formData.get("humidity"),
    ph: formData.get("ph"),
    temperature: formData.get("temperature"),
    rainfall: formData.get("rainfall")
  }

  const crop = await getCrop({data});

  return {crop}
}

export default function CropSearch() {
  const crop = useActionData()?.crop;

  return (
    <div>
      <p>Please enter this details</p>
      <Form method="post" className="flex flex-col gap-4">
        <Field
          label="ratio of Nitrogen"
          type="text"
          id="nitrogen"
          name="nitrogen"
          required
        />
        <Field
          label="ratio of Phosphorous"
          type="text"
          id="Phosphorous"
          name="phosphorous"
          required
        />
        <Field
          label="ratio of Potassium"
          type="text"
          id="Potassium"
          name="potassium"
          required
        />
        <Field
          label="temperature in degree Celsius"
          type="text"
          id="temperature"
          name="temperature"
          required
        />
        <Field
          label="relative humidity in %"
          type="text"
          id="humidity"
          name="humidity"
          required
        />
        <Field
          label="ph value of the soil"
          type="text"
          id="ph"
          name="ph"
          required
        />
        <Field
          label="rainfall in mm"
          type="text"
          id="rainfall"
          name="rainfall"
          required
        />
        <Button theme="monochrome" className="w-full">
          Submit
        </Button>
      </Form>
      {JSON.stringify(crop)}
    </div>
  );
}
