import fsPromises from "fs/promises";

const filePath = "../backend/starter.txt";

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fileOps();

// fs.readFile(filePath, "utf8", (err, data) => {
//   if (err) {
//     console.error(`Error reading file ${filePath}: ${err.message}`);
//     return;
//   }
//   console.log(data);
// });

// fs.writeFile(filePath, "I'm fine, how was ur night", (err) => {
//   if (err) {
//     console.error(`Error reading file ${filePath}: ${err.message}`);
//     return;
//   }
//   console.log("write complete");
// });
