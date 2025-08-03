import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard'

import styles from './index.module.scss'

interface Property {
  id: string
  title?: string
  description?: string
  root?: any
  image?: {
    url: string
  }
  status?: string
  location?: string
  price?: number
  [key: string]: any
}

export default async function HomePage() {
  const payload = await getPayload({
    config,
    cron: undefined,
    importMap: undefined,
  })
  const response = await payload.find({
    collection: 'properties',
    limit: 100,
    where: {
      isPublished: {
        equals: true,
      },
    },
  })

  const properties = response.docs

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Properties</h1>
      <div className={styles.grid}>
        {properties.map((property: Property) => (
          <Link key={property.id} href={`/${property.id}`} passHref>
            <PropertyCard property={property} />
          </Link>
        ))}
      </div>
    </div>
  )
}
