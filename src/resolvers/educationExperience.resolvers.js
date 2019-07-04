import { loadEducationExperiences } from "../utils/data";

export default {
  Query: {
    educationExperiences: async (parent, args, ctx, info) => {
      return await loadEducationExperiences();
    }
  }
};
