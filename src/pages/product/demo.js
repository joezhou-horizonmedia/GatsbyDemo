import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {useEffect, useState} from "react";
import axios from "axios";

const IndexPage = () => {
    const [data, setData] = useState({
        completed: null,
        id: null,
        title: null,
        userId: null
    })

    const getData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        setData(response.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Layout>
            <Seo title="Home" description="Content"/>
            <h1 className="text-3xl font-bold underline">
                Title
            </h1>
            <div>
                <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                         src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
                         alt="" width="384" height="512"
                    />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams. It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                Sarah Dayan - {data.title}
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                Staff Engineer, Algolia
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </Layout>
    )
}


export default IndexPage