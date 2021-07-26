import Constants from "../Constants";
import Http from "../HttpCalls";
class ExperienceHandler {
  constructor() {
    // to be set variables
    this.data = new Array(5);
    this.emailId = "";
    this.authToken = "";
    // constant data
    this.title = "Add Experience";
    this.fields = [
      { title: "Company Logo", placeholder: "URL", type: "input" },
      { title: "Company Name", placeholder: "Acme Corp.", type: "input" },
      { title: "Position", placeholder: "Software Engineer", type: "input" },
      {
        title: "Timeline",
        child: [
          { placeholder: "From", type: "input" },
          { placeholder: "To", type: "input" },
        ],
      },
      {
        title: "Description",
        tag: "HTML Block",
        placeholder: "Explain what you did here",
        type: "textarea",
      },
    ];
  }
  companyImageUpload = (e) => {
    var image = e.target.files[0];
    var imageURL = URL.createObjectURL(image);
    let data = this.state.data;
    data = { ...data, companyImage: image };
    this.setState({
      companyImage: imageURL,
      companyImageSelected: true,
      data: data,
    });
  };
  saveData() {
    const [logo, name, position, from, to, description] = this.data;
    const bodyData = {
      logo: logo,
      name: name,
      position: position,
      from: from,
      to: to,
      description: description,
    };
    console.log(bodyData);
    Http.POST(Constants.URLS.AddExperience, bodyData, {
      "auth-token": this.authToken,
    })
      .then((res) => {
        const data = res.data;
        const status = parseInt(data.status);
        if (status) {
          console.log("Added Successfully");
        } else {
          console.log("Error");
        }
      })
      .catch((err) => console.log(err));
  }
}

export { ExperienceHandler };
