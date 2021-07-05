const server = require("./api/server");

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(
    `\n\n** Welcome Back Sir, we are currently listening on port:${PORT}`
  );
});
