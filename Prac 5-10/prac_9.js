(async () => {
  if (600 % 2 === 0) {
    const { getGitUsers } = await import("./fgithubuser");
    console.log(getGitUsers["ocmodi21"]);
  }
})();
