import Button from "~/components/Button";
import Card from "~/components/Card";

export default function FindSolution() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-2xl font-medium">Solutions</p>
      <Card className="h-44 flex gap-3">
        <img src="sun.png" width={120} className="h-full " />
        <div>
          <p className="text-xl">Doc worasasking done</p>
          <p className="font-normal">Doc working done</p>
        </div>
      </Card>
    </div>
  );
}
