import type { Image } from '$lib/types'

export const load = ({ params }): {
    image: Image
} => {
    const image = params.image

    console.log(image)

    return {
        image: {
            id: '1',
            title: 'Penny',
            image: 'https://avatars.githubusercontent.com/u/67859044?v=4'
        }
    }
}