export const formatDate = (str) => {
  const date = new Date(str);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
