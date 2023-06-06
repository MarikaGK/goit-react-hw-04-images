import getImagesByQuery from 'services/api-pixabay';
import { totalHitsInfo, noHitsInfo, responseErrorInfo } from './notifications';

const getImages = async (query, imgs, page, perPage) => {
  try {
    const imgsData = await getImagesByQuery(query, page, perPage);
    const fetchedImgsList = imgsData.response.map(
      ({ id, webformatURL, largeImageURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      })
    );
    const updatedImages = [...imgs, ...fetchedImgsList];
    const totalHits = imgsData.totalHits;
    const totalPages = Math.ceil(totalHits / perPage);
    const response = {
      images: page === 1 ? fetchedImgsList : updatedImages,
      actualPage: page,
      totalPages: totalPages,
    };
    if (page === 1) {
      if (totalHits > 0) {
        totalHitsInfo(totalHits);
      } else {
        noHitsInfo();
      }
    }
    return response;
  } catch (error) {
    return responseErrorInfo(error);
  }
};

export default getImages;
