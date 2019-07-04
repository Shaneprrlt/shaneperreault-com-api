import { loadAcademicAwards } from "../utils/data";

export default {
  Query: {
    academicAwards: async (parent, args, ctx, info) => {
      return await loadAcademicAwards();
    }
  }
};
