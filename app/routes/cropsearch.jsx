import { Form, Link } from "@remix-run/react";
import Button from "~/components/Button";
import Field from "~/components/Field";

export default function CropSearch() {
  return (
    <div>
      <p>Please enter this details</p>
      <Form className="flex flex-col gap-4">
        <Field
          label="ratio of Nitrogen"
          type="text"
          id="nitrogen"
          name="nitrogen"
          required
        />
        <Field
          label="ratio of Nitrogen"
          type="text"
          id="nitrogen"
          name="nitrogen"
          required
        />
        <Field
          label="ratio of Nitrogen"
          type="text"
          id="nitrogen"
          name="nitrogen"
          required
        />
        <Field
          label="ratio of Nitrogen"
          type="text"
          id="nitrogen"
          name="nitrogen"
          required
        />
        <Field
          label="ratio of Nitrogen"
          type="text"
          id="nitrogen"
          name="nitrogen"
          required
        />
        <Field
          label="ratio of Nitrogen"
          type="text"
          id="nitrogen"
          name="nitrogen"
          required
        />
        <Field
          label="ratio of Nitrogen"
          type="text"
          id="nitrogen"
          name="nitrogen"
          required
        />
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
      </Button>
    </div>
  );
}
