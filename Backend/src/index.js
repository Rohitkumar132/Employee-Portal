const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const  createServer = require("./server");

const port = process.env.PORT || 3000;
const server = createServer();

server.listen(port, () => {
  console.log(`✨ Server is running on ${port} ✨`);
});
