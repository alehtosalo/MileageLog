#Build and run MileageServer at localhost:3000

cd /home/alehtosalo/Documents/MileageLog/
echo "Start building..."
sudo docker build .
echo "Run server..."
sudo docker run -p 0.0.0.0:3000:3000/tcp server
echo "That's all folks..."
