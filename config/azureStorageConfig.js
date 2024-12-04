// const { BlobServiceClient } = require("@azure/storage-blob");

// const { DefaultAzureCredential } = require("@azure/identity");
// require("dotenv").config();

// const azureStore = async (blobName, data) => {
//   try {
//     const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
//     if (!accountName) throw Error("Azure Storage accountName not found");

//     const blobServiceClient = new BlobServiceClient(
//       `https://${accountName}.blob.core.windows.net`,
//       new DefaultAzureCredential()
//     );

//     const containerClient = blobServiceClient.getContainerClient("designs");

//     //use filename as it is

//     const blockBlobClient = containerClient.getBlockBlobClient(blobName);

//     //file
//     const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
//     console.log(
//       `Blob was uploaded successfully. requestId: ${uploadBlobResponse}`
//     );
//     return blockBlobClient.url;
//   } catch (err) {
//     console.log(`Error: ${err.message}`);
//   }
// };

// module.exports = { azureStore };

const AWS = require("aws-sdk");
require("dotenv").config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3Store = async (fileName, fileBuffer, mimeType) => {
  try {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME, // Your S3 bucket name
      Key: `designs/${fileName}`, // Folder and file name
      Body: fileBuffer,
      ContentType: mimeType, // e.g., "image/jpeg"
      //ACL: "public-read", // Optional: Makes the file publicly accessible
    };

    const data = await s3.upload(params).promise();

    console.log(`File uploaded successfully. URL: ${data.Location}`);
    return data.Location; // Returns the URL of the uploaded file
  } catch (err) {
    console.error(`Error uploading to S3: ${err.message}`);
    throw err;
  }
};

module.exports = { s3Store };
