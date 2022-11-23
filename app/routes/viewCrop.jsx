import { useEffect, useState } from "react"

export default function ViewCrop(){
    const [crop, setCrop] = useState()

    useEffect(() => {
        const i = localStorage.getItem("crop")
        setCrop(JSON.parse(i))
      }, [])

    return(
        <div className="flex flex-col gap-4">
            {crop?.map(crop => (
                <div className="p-4 flex flex-col gap-4 bg-white rounded-lg">
                <p className="text-xl font-bold text-center"> {crop.type}</p>
        <div className="flex justify-evenly items-center">
        <div className="flex flex-col items-center">
        <svg class="transform -rotate-90 w-14 h-14">
                  <circle cx="50%" cy="50%" r="20" stroke="currentColor" stroke-width="8" fill="transparent"
                      class="text-gray-700" />
        
                  <circle cx="50%" cy="50%" r="20" stroke="currentColor" stroke-width="8" fill="transparent"
                      strokeDasharray={125.714285714}
                      strokeDashoffset={125.714285714 - crop?.nitrogen / 100 * 125.714285714}
                      class="text-blue-500 " />
              </svg>
              <p className="text-lg font-bold">{crop?.nitrogen}</p>
              <p >Nitrogen</p>
        </div>
        
              <div className="flex flex-col items-center">
        <svg class="transform -rotate-90 w-14 h-14">
                  <circle cx="50%" cy="50%" r="20" stroke="currentColor" stroke-width="8" fill="transparent"
                      class="text-gray-700" />
        
                  <circle cx="50%" cy="50%" r="20" stroke="currentColor" stroke-width="8" fill="transparent"
                      strokeDasharray={125.714285714}
                      strokeDashoffset={125.714285714 - crop?.phosphorous / 100 * 125.714285714}
                      class="text-blue-500 " />
              </svg>
              <p className="text-lg font-bold">{crop?.phosphorous}</p>
              <p>Phosphorous</p>
        </div>
              <div className="flex flex-col items-center">
        <svg class="transform -rotate-90 w-14 h-14">
                  <circle cx="50%" cy="50%" r="20" stroke="currentColor" stroke-width="8" fill="transparent"
                      class="text-gray-700" />
        
                  <circle cx="50%" cy="50%" r="20" stroke="currentColor" stroke-width="8" fill="transparent"
                      strokeDasharray={125.714285714}
                      strokeDashoffset={125.714285714 - crop?.potassium / 100 * 125.714285714}
                      class="text-blue-500 " />
              </svg>
              <p className="text-lg font-bold">{crop?.potassium}</p>
              <p >Potassium</p>
        </div>
        </div>
        </div>
            ))}
        </div>
    )
}