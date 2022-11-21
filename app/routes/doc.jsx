import { Link } from "@remix-run/react";
import Button from "~/components/Button";
import Card from "~/components/Card";

export default function CropResult() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-2xl font-medium">Result</p>
      <Card className="h-52" />
      <p>Type:</p>
      <p>Crop name:</p>
      <p>Disease:</p>
      <Button as={Link} to="/findSolution">
        Find solution
      </Button>
      <Button>Seek consultent</Button>
      <Button>Feedback</Button>
    </div>
  );
}
