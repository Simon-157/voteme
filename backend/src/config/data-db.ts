const fetchSecretNrDb = async () => {
  try {
    // Normally we would call the database here
    return 42; // Return the secret nr
  } catch (e) {
    console.error(e);
  }
};

module.exports = { fetchSecretNrDb };
