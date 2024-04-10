import type { Image } from "$lib/types"

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface PageState {
			preview: {
				image: Image
			}
		}

	}
}

export { }
