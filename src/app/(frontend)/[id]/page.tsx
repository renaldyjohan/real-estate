// @ts-nocheck
import React from 'react'
import { getPayload } from 'payload' // or your API fetch helper
import DetailPage from '@/components/PropertyDetail'
import config from '@/payload.config'

export default async function PropertyDetailPage({ params }: any) {
  // Extract id from URL params
  const { id } = params

  // Fetch property by ID filtering published state if needed
  const payload = await getPayload({
    config,
    cron: undefined,
    importMap: undefined,
  })
  const response = await payload.findByID({ collection: 'properties', id })

  const property = response
  if (!property || !property.isPublished) {
    return <div>Property not found or unpublished</div>
  }

  return <DetailPage property={property} />
}
