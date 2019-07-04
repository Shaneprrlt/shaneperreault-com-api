import Airtable from "airtable";

export const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_KEY);

export const loadApps = async () => {
  return new Promise((resolve, reject) => {
    const apps = [];

    base("Apps")
      .select({
        maxRecords: 20,
        view: "Grid view"
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => {
            apps.push({
              name: record.get("Name"),
              photoUrl: record.get("Photo").reduce((photoUrl, photo) => {
                if (!photoUrl) {
                  return photo.url;
                } else {
                  return photoUrl;
                }
              }, null),
              description: record.get("Description"),
              url: record.get("URL")
            });
          });

          fetchNextPage();
        },
        err => {
          if (err) {
            reject(err);
          } else {
            resolve(apps);
          }
        }
      );
  });
};

export const loadWorkExperiences = async () => {
  return new Promise((resolve, reject) => {
    const workExperiences = [];

    base("Work")
      .select({
        maxRecords: 20,
        view: "Grid view"
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => {
            workExperiences.push({
              company: record.get("Company"),
              position: record.get("Position"),
              startDate: record.get("Start Date"),
              endDate: record.get("End Date"),
              description: record.get("Description")
            });
          });

          fetchNextPage();
        },
        err => {
          if (err) {
            reject(err);
          } else {
            resolve(workExperiences);
          }
        }
      );
  });
};

export const loadEducationExperiences = async () => {
  return new Promise((resolve, reject) => {
    const educationExperiences = [];

    base("Education")
      .select({
        maxRecords: 20,
        view: "Grid view"
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => {
            educationExperiences.push({
              institution: record.get("Institution"),
              degreeProgram: record.get("Degree Program"),
              startDate: record.get("Start Date"),
              endDate: record.get("End Date"),
              description: record.get("Description")
            });
          });

          fetchNextPage();
        },
        err => {
          if (err) {
            reject(err);
          } else {
            resolve(educationExperiences);
          }
        }
      );
  });
};

export const loadAcademicAwards = async () => {
  return new Promise((resolve, reject) => {
    const academicAwards = [];

    base("Academic Awards")
      .select({
        maxRecords: 20,
        view: "Grid view"
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => {
            academicAwards.push({
              award: record.get("Award"),
              institution: record.get("Institution"),
              year: record.get("Year"),
              description: record.get("Description")
            });
          });

          fetchNextPage();
        },
        err => {
          if (err) {
            reject(err);
          } else {
            resolve(academicAwards);
          }
        }
      );
  });
};
