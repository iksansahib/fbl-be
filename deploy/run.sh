source /home/ec2-user/.bash_profile
cd /home/ec2-user/fbl/be && npm install
node index.js & 1&2 > /dev/null

# cd /home/ec2-user/fbl/fe && npm install && npm run serve