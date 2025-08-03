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
  [key: string]: any
}

interface PropertyCardProps {
  property: Property
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const plainDescription = richTextToPlainText(property.description)

  return (
    <div className={styles.cardContainer}>
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
        <h2 className={styles.title}>{property.title || 'No Title'}</h2>

        {property.location && <div className={styles.location}>{property.location}</div>}

        {property.price && <div className={styles.price}>${property.price.toLocaleString()}</div>}

        <p className={styles.description}>{truncateDescription(plainDescription, 200)}</p>
      </div>
    </div>
  )
}

export default PropertyCard
