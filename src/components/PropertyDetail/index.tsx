import React from 'react'
import { richTextToPlainText, truncateDescription } from '@/utils'
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

interface DetailPageProps {
  property: Property
}

const DetailPage: React.FC<DetailPageProps> = ({ property }) => {
  const plainDescription = richTextToPlainText(property.description)

  return (
    <div className={styles.detailContainer}>
      {property.image?.url ? (
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={property.image.url}
            alt={property.title || 'Property Image'}
          />
          {property.status === 'Draft' && <div className={styles.badge}>Draft</div>}
        </div>
      ) : (
        <div className={styles.noImageWrapper}>
          <span className={styles.noImageText}>No image available</span>
        </div>
      )}

      <div className={styles.content}>
        <h1 className={styles.title}>{property.title || 'No Title'}</h1>

        {property.location && <div className={styles.location}>Location: {property.location}</div>}

        {property.price !== undefined && (
          <div className={styles.price}>Price: ${property.price.toLocaleString()}</div>
        )}

        <p className={styles.description}>{plainDescription}</p>
      </div>
    </div>
  )
}

export default DetailPage
