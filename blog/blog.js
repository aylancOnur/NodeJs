const contents = [
  {
    title: "ReactJS",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nulla.",
  },
  {
    title: "NodeJS",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nulla.",
  },
  {
    title: "Express",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nulla.",
  },
  {
    title: "MongoDB",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nulla.",
  },
];

const listContents = () => {
  contents.map((content) => {
    console.log(content.title);
  });
};

listContents();

const addContent = (newContent) => {
  const promise = new Promise((resolve, reject) => {
    contents.push(newContent);
    resolve(contents);
    reject("BIR HATA OLUSTU");
  });

  return promise;
};

async function showContents() {
  try {
    await addContent({ title: "C#", content: "C#" });
    console.log("<-------- New content added! ------------>");
    listContents();
  } catch (error) {
    console.log(error);
  }
}

showContents();
