import type { Image } from "$lib/types"

export const load = async () => {

    const response = await fetch('https://api.img.sean.app')

    const images = await response.json() as Image[]

    return {
        images
    }
}