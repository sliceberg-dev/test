const fs = require('fs').promises;

async function loadUserData(userId) {
  try {
    const data = await fs.readFile(`users/${userId}.json`, 'utf8');
    const user = JSON.parse(data);

    if (!user.email) {
      throw new Error('Brak emaila');
    }

    return user;
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Użytkownik nie istnieje');
    }
    throw err;
  } finally {
    console.log(`Przetworzono użytkownika ${userId}`);
  }
}

module.exports = { loadUserData };
