const nSQL = require("@nano-sql/core").nSQL;

const getAllAlbums = async () => {
  const result = await nSQL("albums").query("select", ["id", "name", "artist"]).exec();
  return result;
};

const getAlbumById = async (id) => {
  const result = await nSQL("albums").query("select", ["id", "name", "artist"]).where(["id", "=", id]).exec();
  return result;
};

const addAlbum = async (payload) => {
  const result = await nSQL("albums").query("upsert", payload).exec();
  return result;
};

const updateAlbum = async (payload) => {
  const result = await nSQL("albums").query("upsert", payload).exec();
  return result;
};

const deleteAlbum = async (id) => {
  const result = await nSQL("albums").query("delete").where(["id", "=", id]).exec();
  return result;
};

module.exports = {
  getAllAlbums,
  getAlbumById,
  addAlbum,
  updateAlbum,
  deleteAlbum
};