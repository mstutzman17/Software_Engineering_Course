//     - Create `blog.mjs` that imports the `Post` class. Create an instance, and call the `publish` method to simulate posting.

import Post from './Post.mjs'

const myFirstPost = new Post('My First Blog Post', 'Today, I walked my dog around the city of Grand Rapids. He enjoyed seeing all the sights and experienced lots of new smells.')

myFirstPost.publish();