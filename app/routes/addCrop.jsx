import { Form, Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import Field from "~/components/Field";

export default function AddCrop(){
    const [type, setType] = useState("");
    const [nitrogen, setNitrogen] = useState("");
    const [phosphorous, setPhosphorous] = useState("");
    const [potassium, setPotassium] = useState("");

    useEffect(()=> {
        if(type != "" && nitrogen != "" && phosphorous != "" && potassium != ""){
            const data = {
                type,
                nitrogen,
                phosphorous,
                potassium
            }
            var v = localStorage.getItem("crop");
            if(v){
                var i = JSON.parse(v);
                i.push(data);
                localStorage.setItem("crop", JSON.stringify(i))
            }else{
                localStorage.setItem("crop", JSON.stringify([data]))
            }
        }
    }, [type, nitrogen, phosphorous, potassium])
    return(
        <div className="flex flex-col gap-4">
            <Field
          label="Crop name"
          type="text"
          id="type"
          name="type"
          onChange={(e) => setType(e.currentTarget.value)}
          required
        />
        <Field
          label="current ratio of Nitrogen"
          type="text"
          id="nitrogen"
          name="nitrogen"
          onChange={(e) => setNitrogen(e.currentTarget.value)}
          required
        />
        <Field
          label="current ratio of Phosphorous"
          type="text"
          id="Phosphorous"
          name="phosphorous"
          onChange={(e) => setPhosphorous(e.currentTarget.value)}
          required
        />
        <Field
          label="current ratio of Potassium"
          type="text"
          id="Potassium"
          name="potassium"
          onChange={(e) => setPotassium(e.currentTarget.value)}
          required
        />
        <Button as={Link} to="/" theme="monochrome" className="w-full">
          Submit
        </Button>
        </div>
    )
}