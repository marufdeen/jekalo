const postEntity = require('../entities/postEntity');
const postDao = require('../data-access/postDao');

class postService {
    static async create(postData) {
        try {
        // make a new post object with inputed data
        const post = await new postEntity(postData).execute();
        if(post.details) throw new Error(post.details[0].message);
        const newPost = await postDao.create( {
            title: post.getTitle(),
            content: post.getContent(),
            contentImage: post.getContentImage()
        });
        return newPost;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
module.exports = postService;