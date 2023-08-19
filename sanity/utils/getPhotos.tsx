import { client } from '../config/client'

export default async function ReactServerComponent() {
  const data = await client.fetch<number>(
    `count(*[_type == "page"])`,
    {},
    {
      // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
      cache: 'force-cache',
      next: { tags: ['pages'] },
    }
  )

  return <h1>Number of pages: {data}</h1>
}
