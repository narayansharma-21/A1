import axios from "axios";
const COURSES_API = "https://kanbas-node-server-app.onrender.com/api/courses";
export const findModulesForCourse = async (courseId: any) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId, module) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/modules`,
      module
    );
    return response.data;
  };

const MODULES_API = "https://kanbas-node-server-app.onrender.com/api/modules";
export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module) => {
    const response = await axios.
      put(`${MODULES_API}/${module._id}`, module);
    return response.data;
  };
  

  