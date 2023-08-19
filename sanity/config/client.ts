import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '2ciw864r',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-08-19',
})
