import { Notify } from 'notiflix';

const emptyQueryNotify = () => {
  Notify.warning(`Search field shouldn't be empty`);
};

const errorOccured = () => {
  Notify.warning(`Error has occured`);
};

const totalHitsInfo = totalHits => {
  if (totalHits === 0) {
    Notify.warning(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  Notify.info(`Hooray! We found ${totalHits} images.`);
  return;
};

const noHitsInfo = () => {
  Notify.warning(
    'Sorry, there are no images matching your search query. Please try again.'
  );
};

const responseErrorInfo = error => {
  Notify.failure(`Looks like Pixabay can't response: ${error}`);
};

export {
  emptyQueryNotify,
  errorOccured,
  totalHitsInfo,
  noHitsInfo,
  responseErrorInfo,
};
