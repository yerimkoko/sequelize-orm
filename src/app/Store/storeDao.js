async function save(connection, insertStore) {
  const insertStoreQuery = `INSERT INTO (name, number,
    comment, category, min_tip, min_delivery, max_tip,
    max_delivery, user_id)
    VALUES ("${insertStore.name}", 
    "${insertStore.number}", 
    "${insertStore.category}", 
    "${insertStore.min_tip}",
    "${insertStore.min_delivery}",
    "${insertStore.comment}",
    "${insertStore.max_tip}",
    "${insertStore.max_delivery}",
    ${userId}; 
    )`;
}
