import { BeforeChangeHook } from 'node_modules/payload/dist/collections/config/types'
import { CollectionConfig } from 'payload'
import slugify from 'slugify'

const beforeChangeHook: BeforeChangeHook = ({ data }) => {
  if (data.title && !data.slug) {
    data.slug = slugify(data.title, { lower: true })
  }
  return data
}

export const Properties: CollectionConfig = {
  slug: 'properties',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'price',
      type: 'number',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  hooks: {
    beforeChange: [beforeChangeHook],
  },
}

export default Properties
