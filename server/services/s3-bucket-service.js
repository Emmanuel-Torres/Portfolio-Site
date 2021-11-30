const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3')

const client = new S3Client({
    region: "us-west-2",
    credentials: ''
})
const command = new GetObjectCommand({
    Bucket: 'arn:aws:s3:us-west-2:332716811927:accesspoint/portfolio-api-access-point',
    ExpectedBucketOwner: 'd520796b3e52b44b6d02c0a5af598d88d89ad71aac417fc58c9c99aa1cc3ff07',
    IfMatch: 'fd5752b807699e8dc94aa6961f8036b4',
    Key: 'test-images/87101707_573975746525423_5740685671887011840_o.png'
});
const response = client.send(command);
console.log(response.Body);