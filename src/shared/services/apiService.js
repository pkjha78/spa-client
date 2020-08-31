import { instance as axios } from "./baseService";


const requestHandler =(reqDetails, isRetry =true) => {
  console.log(reqDetails);
  return new Promise((resolve, reject) => {
    axios(reqDetails).then(res => {
      console.log(res);
      resolve(res);
    }).catch(err => {
      if(err.response && err.response.status === 401 && isRetry){
        console.log("Unauthorised access");
      } else{
        console.error(err);
        reject(err);
      }
    });
  });
};

const uploadVideo = (file, onUploadProgress) => {
  let formData = new FormData();
  formData.append("file", file);
  return axios.post("/videos", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const uploadAudio = (file, onUploadProgress) => {
  let formData = new FormData();
  formData.append("file", file);
  return axios.post("/audios", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export const getUserById = () => {
  const API_DETAILS = {
    url: `/users/id`,
    method: "get"
  };
  return requestHandler(API_DETAILS);
};

export const getAllUsers = () => {
  const API_DETAILS = {
    url: `/users`,
    method: "get"
  };
  return requestHandler(API_DETAILS);
};

export const putUserBlocked = (id, reqPayload) => {
  const API_DETAILS = {
    url: `/users/${id}`,
    method: "put",
    data: reqPayload
  };
  return requestHandler(API_DETAILS);
};

export const getAllVerifications = () => {
  const API_DETAILS = {
    url: `/verifications`,
    method: "get"
  };
  return requestHandler(API_DETAILS);
};

export const putVerifications = (id, reqPayload) => {
  const API_DETAILS = {
    url: `/verifications/${id}`,
    method: "put",
    data: reqPayload
  };
  return requestHandler(API_DETAILS);
};

export const getSoundSections = () => {
  const API_DETAILS = {
    url: `/sections`,
    method: "get"
  };
  return requestHandler(API_DETAILS);
};

export const putSoundSections = (id, reqPayload) => {
  const API_DETAILS = {
    url: `/sections/${id}`,
    method: "put",
    data: reqPayload
  };
  return requestHandler(API_DETAILS);
};

export const getAllVideos = () => {
  const API_DETAILS = {
    url: `/videos`,
    method: "get"
  };
  return requestHandler(API_DETAILS);
};

export const getAllAudios = () => {
  const API_DETAILS = {
    url: `/audios`,
    method: "get"
  };
  return requestHandler(API_DETAILS);
};

export const getDiscoverySections = () => {
  const API_DETAILS = {
    url: `/discovery`,
    method: "get"
  };
  return requestHandler(API_DETAILS);
};

export const putDiscoverySections = (id, reqPayload) => {
  const API_DETAILS = {
    url: `/discovery/${id}`,
    method: "put",
    data: reqPayload
  };
  return requestHandler(API_DETAILS);
};
export const postDiscoverySections = (reqPayload) => {
  const API_DETAILS = {
    url: `/discovery`,
    method: "post",
    data: reqPayload
  };
  return requestHandler(API_DETAILS);
};
export const getDiscoverySectionsById = (id) => {
  const API_DETAILS = {
    url: `/discovery/${id}`,
    method: "get"
  };
  return requestHandler(API_DETAILS);
};
export const deleteDiscoverySections = (id) => {
  const API_DETAILS = {
    url: `/discovery/${id}`,
    method: "delete"
  };
  return requestHandler(API_DETAILS);
};

export default { uploadVideo, uploadAudio };
