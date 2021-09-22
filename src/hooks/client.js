import {createClient} from 'contentful';

export default createClient({
    space: 'lovqxfyj7slz',
    accessToken: 'ooj87rU6bIG3e9B7_w1i2158EATUqLVELPis1pY3FO8'
})

const client = require('contentful').createClient({
    space: 'lovqxfyj7slz',
    accessToken: 'ooj87rU6bIG3e9B7_w1i2158EATUqLVELPis1pY3FO8'
  })

const getBlogPosts = () => client.getEntries().then(response => response.items)

const getSinglePost = slug =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'artPiece'
    })
    .then(response => response.items)

export { getBlogPosts, getSinglePost }