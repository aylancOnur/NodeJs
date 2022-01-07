const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  const url = ctx.url;
  if (url === "/") {
    ctx.body = "INDEX PAGE";
  } else if (url === "/about") {
    ctx.body = "ABOUT PAGE";
  } else if (url === "/contact") {
    ctx.body = "CONTACT PAGE";
  } else {
      ctx.body = "404"
  }
});

const PORT = 5000;

app.listen(PORT || 3000, () => {
  console.log(`Server in running on PORT => ${PORT}`);
});
