const validatePost = require('../helpers/postValidator');

class post {
    constructor(postData) {
        this.postData = postData;
    }

    async _validatePostCreation() {
        return validatePost(this.postData)
    } 
    async validateEdit() {
        const { error } = await validatePost(this.postData);
        if(error) return error;
        return this;
    }  
    getTitle() {
        return this.postData.title;
    }

    getContent() {
        return this.postData.content;
    }

    getContentImage() {
        if(this.postData.contentImage.lenght < 1) return 'No image';
        return this.postData.contentImage;
    }

    async execute(){
        const {error} = await this._validatePostCreation(); 
        if(error) return  error
        
        Object.freeze(this.postData);

        return this;
    }
}

module.exports = post