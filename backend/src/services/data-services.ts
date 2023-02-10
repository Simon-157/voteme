const fetchSecretNr = async () => {
  try {
    return await fetchSecretNrDb();
  } catch (e) {
    console.error(e);
  }
};

module.exports = { fetchSecretNr };
