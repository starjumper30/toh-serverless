import * as functions from 'firebase-functions';

export const fileUploaded = functions.storage.object().onFinalize((object) => {
  console.log('File name is: ', object.name);
  return true; // Can return a promise here
});
