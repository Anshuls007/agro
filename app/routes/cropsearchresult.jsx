import Card from "~/components/Card";

export default function CropResult() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-2xl font-medium">Wheat</p>
      <Card className="h-52" />
      <p>something text</p>
    </div>
  );
}
