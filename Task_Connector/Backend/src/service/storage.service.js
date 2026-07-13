const  Imagekit  = require('@imagekit/nodejs');
require('dotenv').config();


const imagekit = new Imagekit({
    privateKey: process.env.IMAGE_PRIVATE_KEY,
})


async function uploadfile(buffer) {
    
    const result = await imagekit.files.upload({
            file: buffer.toString('base64'),
            fileName: "image.jpg"
    })
    return result
}

module.exports = uploadfile