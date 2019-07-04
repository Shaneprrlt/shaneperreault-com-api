import { loadWorkExperiences } from "../utils/data";

export default {
  Query: {
    workExperiences: async (parent, args, ctx, info) => {
      return await loadWorkExperiences();
    }
  }
};
