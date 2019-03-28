source /home/ec2-user/.bash_profile
cd /home/ec2-user/fbl/be && npm install
pm2 start /home/ec2-user/fbl/be/index.js

# cd /home/ec2-user/fbl/fe && npm install && npm run serve