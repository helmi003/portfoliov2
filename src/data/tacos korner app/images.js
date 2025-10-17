function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("./", false, /\.(png|jpg|mp4)$/));

export default images;