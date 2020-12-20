export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'from_date',
      title: 'From',
      type: 'date'
    },
    {
      name: 'to_date',
      title: 'To',
      type: 'date'
    },
    {
      name: 'company_name',
      title: 'Company name',
      type: 'string'
    },
    {
      name: 'company_url',
      title: 'Company URL',
      type: 'url'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Descritpion',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    description:
                      'Read https://css-tricks.com/use-target_blank/',
                    type: 'boolean'
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
