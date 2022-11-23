import { Link, useLoaderData } from "@remix-run/react"
import { getNews } from "utils/api.server";
import Card from "~/components/Card"

export async function loader(){
    const news = await getNews();
  
    return {news}
  }

export default function News(){
    const {news} = useLoaderData()
    return(
        <div className="flex flex-col gap-4">
            {news.map((item) => (
        <a href={item.url}>
        <Card className="flex flex-col gap-3">
        <p>{item.title}</p>
        <p className="font-normal">{item.description}</p>
        <p className="font-normal text-neutral-500">{item["published date"]}</p>
      </Card></a>
      ))}
        </div>
    )
}