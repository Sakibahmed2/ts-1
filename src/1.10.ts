{
  //

  //   type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper";
  //   type FullStackDeveloper = "FrontendDeveloper" | "ExpertDeveloper";

  //   type Developer = FrontendDeveloper | FullStackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "FakibazDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "AB+" | "O+" | "A+";
  };
  const newUser: User = {
    name: "sakib",
    gender: "male",
    bloodGroup: "AB+",
  };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const developer: FullStackDeveloper = {
    skills: ["html", "css", "javascript"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
  //
}
