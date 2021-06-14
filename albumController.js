const albumService = require('./albumService');
const treatmentService = require('./treatmentService');

const getAllAlbums = async (request, response) => {
  const treatment = treatmentService.calculateTreatment(request);

  const result = treatment === 'on' ? await albumService.getAllRatedAlbums() : await albumService.getAllAlbums();
  response.status(200).json(result);
};

const getAlbumById = async (request, response) => {
  const id = parseInt(request.params.id);
  const treatment = treatmentService.calculateTreatment(request);

  const result = treatment === 'on' ? await albumService.getRatedAlbumById(id) : await albumService.getAlbumById(id);
  response.status(200).json(result);
};

const addAlbum = async (request, response) => {
  const result = await albumService.addAlbum(request.body);
  response.status(200).json(result);
};

const updateAlbum = async (request, response) => {
  const body = {
    ...request.body,
    id: parseInt(request.params.id)
  };
  const result = await albumService.updateAlbum(body);
  response.status(200).json(result);
};

const deleteAlbum = async (request, response) => {
  const id = parseInt(request.params.id);
  const result = await albumService.deleteAlbum(id);
  response.status(200).json(result);
};

module.exports = {
  getAllAlbums,
  getAlbumById,
  addAlbum,
  updateAlbum,
  deleteAlbum
};