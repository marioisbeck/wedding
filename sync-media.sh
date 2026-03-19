#!/bin/bash

echo "Syncing wedding images to Cloudflare R2..."
rclone copy ./0d0b4267be8885ac8aae5358dab94d6da880d184/images r2:wedding/images --progress --s3-no-check-bucket

echo "Syncing PDFs and MP3s..."
rclone copyto ./Edze-Final-DE.pdf r2:wedding/Edze-Final-DE.pdf --s3-no-check-bucket
rclone copyto ./Edze-Final-EN.pdf r2:wedding/Edze-Final-EN.pdf --s3-no-check-bucket
rclone copyto ./Edze-Final-NL.pdf r2:wedding/Edze-Final-NL.pdf --s3-no-check-bucket
rclone copyto ./Last_Love.mp3 r2:wedding/Last_Love.mp3 --s3-no-check-bucket

echo "Done!"
