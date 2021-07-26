import Constants from "../Common/Constants";

class WorkExperience {
  constructor() {
    this.image = null;
    this.companyInfo = Constants.companyInfo;
    this.timeline = Constants.timeline;
    this.desc = Constants.desc;
    console.log("company: ", this.companyInfo);
  }
}

export { WorkExperience };
