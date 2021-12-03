const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const path  = require('path')
const fs = require('fs')

const file = 'C:\\Users\\emman\\OneDrive\\Desktop\\Screenshot 2021-12-02 082912.png'
const fileKey = "test-images/"+path.basename(file)
const fileStream = fs.createReadStream(file)

const client = new S3Client({
    region: "us-west-2"
})

const putCommand = new PutObjectCommand({
    Bucket: 'emmanuel-portfolio-image-bucket',
    Key: fileKey,
    Body: fileStream,
    ContentType: 'image/png',
    ACL: 'public-read'
});

const response = client.send(putCommand).then(r => console.log(r))