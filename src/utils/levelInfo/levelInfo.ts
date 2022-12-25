export const levelInfo = (website: string) => {
  const userData = website.includes("http://localhost:3000/")
    ? website.replace("http://localhost:3000", "")
    : website.replace("https://soulradio.herokuapp.com/", "");

  return userData;
};
