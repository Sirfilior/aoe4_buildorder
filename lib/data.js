import path from "path";
import { promises as fs } from "fs";

async function getBuilds(civ) {
  const postsDirectory = path.join(process.cwd(), `data`);
  let filenames = await fs.readdir(postsDirectory);
  if (!filenames) return [];

  if(civ) {
    filenames = filenames.filter((name) => name.startsWith(civ));
  }

  const builds = filenames
    .map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const data = JSON.parse(fileContents);

      // Generally you would parse/transform the contents
      // For example you can transform markdown to HTML here

      return { filename: filename.replace(".json", ""), ...data };
    });

  return await Promise.all(builds);
}

async function getBuild(filename) {
  const postsDirectory = path.join(process.cwd(), `data`);
  const filePath = path.join(postsDirectory, `${filename}.json`);
  console.log(filePath);
  const fileContents = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(fileContents);

  // Generally you would parse/transform the contents
  // For example you can transform markdown to HTML here

  return data;
}

export { getBuilds, getBuild };
