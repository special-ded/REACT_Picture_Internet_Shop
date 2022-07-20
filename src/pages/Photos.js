import React, { useContext } from "react"
import Image from "../components/Image"
import { Context } from "../Context"
import { getClass } from "../utils"


function Photos() {
    const { allPhotos } = useContext(Context)
    let imageElements = allPhotos.map((e, i) => (
        <Image key={e.id}
            img={e}
            className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos