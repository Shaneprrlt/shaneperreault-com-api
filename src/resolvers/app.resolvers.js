import { loadApps } from "../utils/data";

export default {
  Query: {
    apps: async (parent, args, ctx, info) => {
      return await loadApps();
    }
  }
};
