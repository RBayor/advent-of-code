export const readLocalTextFile = async (path: string) => {
  try {
    const content = await Bun.file(path).text();
    const lines = content.split("\n");

    return lines;
  } catch (error) {
    console.error("Error reading file:", error);
  }
};
