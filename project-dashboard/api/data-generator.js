const { faker } = require('@faker-js/faker');
const fs = require("fs");

//#region Utilities
const randomIntFromInterval = (min, max) => {  
  return Math.floor(Math.random() * (max - min + 1) + min)
}
//#endregion

//#region Role Generation
const projectRoleTitles = [
  'Technical Lead',
  'Business Analyst',
  'Project Manager',
  'SCRUM Master',
  'Quality Assurance',
  'Developer (Front-End)',
  'Developer (Backend)'
];

const generateRole = () =>  {
  const roleEntities = [];
  projectRoleTitles.forEach(role => {
    roleEntities.push({
      id: faker.datatype.uuid(),
      roleName: role
    })
  });
  return roleEntities;
}

//#endregion

//#region Company
const generateCompany = (number) => {
  const companies = [];
  while(number >= 1) {
    const first = faker.name.firstName();
    const last = faker.name.lastName();
    const companyName1 = faker.random.word().toUpperCase();
    const companyName2 = faker.random.word().toUpperCase();
    const state = faker.address.state();

    companies.push({
      id: faker.datatype.uuid(),
      companyName: `${companyName1} ${companyName2}`,
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: state,
      zip: faker.address.zipCode('#####-####')
    });
    number--;
  }
  return companies;
};
//#endregion

//#region Progject Generation
const generateProject = (number) => {
  const projects = [];
  const overallStatus = ['G', 'Y', 'R'];
  
  while(number >= 0) {
    const companyIndex = randomIntFromInterval(0, companyEntities.length-1);
    const statusIndex = randomIntFromInterval(0, overallStatus.length-1);

    projects.push({
      id: faker.datatype.uuid(),
      projectCodeName: faker.random.word().toUpperCase(),
      overallStatus: overallStatus[statusIndex],
      startDate: faker.date.past(2),
      modifiedDate: faker.date.recent(),
      percentageComplete: faker.random.numeric(2),
      projectedEndDate: faker.date.future(1),
      companyId: companyEntities[companyIndex].id
    });
    number--;
  }
  return projects;
};
//#endregion

//#region Consultant
const generateConsultantData = (number) => {
  const consultants = [];
  while(number >= 0) {

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const roleIndex = randomIntFromInterval(0, projectRoleTitles.length-1);
    const projectIndex = randomIntFromInterval(0, projectEntities.length-1);

    consultants.push({
      id: faker.datatype.uuid(),
      firstName: firstName,
      lastName: lastName,
      email: faker.internet.email(firstName, lastName, 'consultants.com'),
      workPhone: faker.phone.phoneNumber('603669####'),
      profilePhoto: faker.image.avatar(),
      roleId: roleEntities[roleIndex].id,
      projectId: projectEntities[projectIndex].id
    });
    number--;
  }
  return consultants;
};
//#endregion

//#region contacts
const generateCompanyContacts = (number) => {

  const companyContactRoles = [
    'Chief Technology Officer',
    'IT Procurement Manager',
    'Marketing Director',
    'Account Coordinator',
    'Customer Service Manager',
    'Technical Support Representative',
    'Technical Support Manager',
    'Art Director',
    'Product Engineer',
    'Compliance Engineer',
    'Senior Process Engineer',
    'Budget Analyst',
    'Cost Estimator',
    'Financial Auditor',
    'Meeting Planner',
    'Event Manager',
    'Executive Recruiter',
    'Talent Acquisition Coordinator',
    'Human Resources Specialist',
    'Contract Manager', 
    'Labor Relations Specialist',
    'Team Lead',
    'Logistics Coordinator',
    'Collection Agent',
    'Account Executive',
    'Consulting Manager'
  ];

  const companyContacts = [];

  while (number >= 0) {

    const first = faker.name.firstName();
    const last = faker.name.lastName();
    const companyIndex = randomIntFromInterval(0, companyEntities.length-1);
    const companyName = companyEntities[companyIndex].companyName.replace(/\s/g, '').toLowerCase();
    const companyId = companyEntities[companyIndex].id;
    const companyContactRoleIndex = randomIntFromInterval(0, companyContactRoles.length-1);

    companyContacts.push({
      id: faker.datatype.uuid(),
      firstName: first,
      lastName: last,
      jobTitle: companyContactRoles[companyContactRoleIndex],
      workPhone: faker.phone.phoneNumber(`###-###-####`),
      email: faker.internet.email(first, last, `${companyName}.com`),
      companyId: companyId
    });
    number--;
  }
  return companyContacts;
}
//#endregion

const roleEntities = generateRole();
const companyEntities = generateCompany(10);
const projectEntities = generateProject(70);
const consultantEntities = generateConsultantData(200)
const companyContactEntities = generateCompanyContacts(45);
console.log(projectEntities);

fs.writeFileSync(
  "./db.json",
  JSON.stringify({
    roles: roleEntities,
    companies: companyEntities,
    projects: projectEntities,
    consultants: consultantEntities,
    contacts: companyContactEntities
  })
);

