import ExcelJS from 'exceljs';

async function createExcel() {

  const workbook = new ExcelJS.Workbook();

  const worksheet = workbook.addWorksheet('Signup Test Cases');

  worksheet.columns = [
    { header: 'Req ID', key: 'reqId', width: 22 },
    { header: 'Req Description', key: 'reqDescription', width: 45 },
    { header: 'Test Case ID', key: 'testCaseId', width: 18 },
    { header: 'Module', key: 'module', width: 15 },
    { header: 'Title', key: 'title', width: 40 },
    { header: 'Precondition', key: 'precondition', width: 50 },
    { header: 'Test Steps', key: 'testSteps', width: 90 },
    { header: 'Test Data', key: 'testData', width: 90 },
    { header: 'Expected Result', key: 'expectedResult', width: 60 },
    { header: 'Priority', key: 'priority', width: 15 },
    { header: 'Type', key: 'type', width: 18 }
  ];

  // SU001
  worksheet.addRow({
    reqId: 'REQ-SIGNUP-001',
    reqDescription: 'Verify that a new user can register successfully',
    testCaseId: 'SU001',
    module: 'Signup',
    title: 'Register User with valid details',
    precondition: 'User is not already registered with the given email',
    testSteps: 'Launch browser; Navigate to Automation Exercise; Verify home page; Click Signup / Login; Verify New User Signup!; Enter name and email; Click Signup; Verify ENTER ACCOUNT INFORMATION; Enter account information; Select newsletter; Select special offers; Enter address information; Click Create Account; Verify ACCOUNT CREATED!; Click Continue; Verify Logged in as username; Click Delete Account; Verify ACCOUNT DELETED!',
    testData: 'Title: Mrs.; Name: JYOTSNA; Email: dhjy49.83@gmail.com; Password: Jyot@04; DOB: 11 October 2004; Newsletter: Yes; Special Offers: Yes; First Name: JYOTSNA; Last Name: D H; Company: Infomine Software Solutions; Address: B3, Ratnagiri Apts, Block B, 1st Floor, Anna nagar 2nd street; Address 2: Venus colony 1st street, Velachery; Country: India; State: Tamil Nadu; City: Chennai; Zipcode: 600042; Mobile: 9840881384',
    expectedResult: 'Account is created successfully, user is logged in, and account can be deleted successfully',
    priority: 'High',
    type: 'Positive'
  });

  // SU002
  worksheet.addRow({
    reqId: 'REQ-SIGNUP-002',
    reqDescription: 'Verify that registration is rejected for an existing email address',
    testCaseId: 'SU002',
    module: 'Signup',
    title: 'Register User with existing email',
    precondition: 'Email address is already registered',
    testSteps: 'Launch browser; Navigate to Automation Exercise; Click Signup / Login; Verify New User Signup!; Enter name and existing email; Click Signup',
    testData: 'Name: JYOTSNA; Email: dhjy49.83@gmail.com',
    expectedResult: 'Error message "Email Address already exist!" is displayed',
    priority: 'High',
    type: 'Negative'
  });

  // SU003
  worksheet.addRow({
    reqId: 'REQ-SIGNUP-003',
    reqDescription: 'Verify that the Signup / Login link navigates to the authentication page',
    testCaseId: 'SU003',
    module: 'Signup',
    title: 'Verify Signup / Login navigation',
    precondition: 'User is on Automation Exercise home page',
    testSteps: 'Launch browser; Navigate to Automation Exercise; Click Signup / Login',
    testData: 'No additional test data',
    expectedResult: 'User is navigated to the Signup / Login page and New User Signup! section is displayed',
    priority: 'High',
    type: 'Functional'
  });

  // SU004
  worksheet.addRow({
    reqId: 'REQ-SIGNUP-004',
    reqDescription: 'Verify that the account information section is displayed after entering valid signup details',
    testCaseId: 'SU004',
    module: 'Signup',
    title: 'Verify Account Information section',
    precondition: 'User is on New User Signup section and email is unique',
    testSteps: 'Navigate to Signup / Login; Enter valid name; Enter valid unique email; Click Signup',
    testData: 'Name: JYOTSNA; Email: unique valid email',
    expectedResult: 'ENTER ACCOUNT INFORMATION section is displayed',
    priority: 'High',
    type: 'Functional'
  });

  // SU005
  worksheet.addRow({
    reqId: 'REQ-SIGNUP-005',
    reqDescription: 'Verify that the newsletter checkbox can be selected',
    testCaseId: 'SU005',
    module: 'Signup',
    title: 'Verify Newsletter checkbox',
    precondition: 'User has reached the Account Information section',
    testSteps: 'Enter valid account information; Locate Sign up for our newsletter checkbox; Select the checkbox',
    testData: 'Newsletter: Selected',
    expectedResult: 'Newsletter checkbox is selected successfully',
    priority: 'Medium',
    type: 'Functional'
  });

  // SU006
  worksheet.addRow({
    reqId: 'REQ-SIGNUP-006',
    reqDescription: 'Verify that the special offers checkbox can be selected',
    testCaseId: 'SU006',
    module: 'Signup',
    title: 'Verify Special Offers checkbox',
    precondition: 'User has reached the Account Information section',
    testSteps: 'Enter valid account information; Locate Receive special offers from our partners checkbox; Select the checkbox',
    testData: 'Special Offers: Selected',
    expectedResult: 'Special Offers checkbox is selected successfully',
    priority: 'Medium',
    type: 'Functional'
  });

  // SU007
  worksheet.addRow({
    reqId: 'REQ-SIGNUP-007',
    reqDescription: 'Verify that mandatory account information fields are validated',
    testCaseId: 'SU007',
    module: 'Signup',
    title: 'Verify mandatory account fields',
    precondition: 'User has reached the Account Information section',
    testSteps: 'Leave mandatory account information fields blank; Attempt to continue with account creation',
    testData: 'Mandatory fields: Blank',
    expectedResult: 'Mandatory field validation is displayed and registration does not proceed',
    priority: 'High',
    type: 'Negative'
  });

  // SU008
  worksheet.addRow({
    reqId: 'REQ-SIGNUP-008',
    reqDescription: 'Verify that mandatory address fields are validated',
    testCaseId: 'SU008',
    module: 'Signup',
    title: 'Verify mandatory address fields',
    precondition: 'User has completed account information',
    testSteps: 'Leave required address fields blank; Attempt to create the account',
    testData: 'Required address fields: Blank',
    expectedResult: 'Mandatory field validation is displayed and account creation does not proceed',
    priority: 'High',
    type: 'Negative'
  });

  // SU009
  worksheet.addRow({
    reqId: 'REQ-SIGNUP-009',
    reqDescription: 'Verify that successful registration displays the account creation confirmation',
    testCaseId: 'SU009',
    module: 'Signup',
    title: 'Verify Account Created message',
    precondition: 'Valid registration details are entered',
    testSteps: 'Complete the registration form with valid data; Click Create Account',
    testData: 'Use valid registration details',
    expectedResult: 'ACCOUNT CREATED! confirmation message is displayed',
    priority: 'High',
    type: 'Positive'
  });

  // SU010
  worksheet.addRow({
    reqId: 'REQ-SIGNUP-010',
    reqDescription: 'Verify that a registered user can delete the account',
    testCaseId: 'SU010',
    module: 'Signup',
    title: 'Verify Account Deletion',
    precondition: 'User has successfully registered and is logged in',
    testSteps: 'Complete registration; Click Continue; Verify Logged in as username; Click Delete Account',
    testData: 'Use the registered user account',
    expectedResult: 'ACCOUNT DELETED! confirmation message is displayed',
    priority: 'Medium',
    type: 'Functional'
  });

  // Formatting
  worksheet.getRow(1).font = { bold: true };

  worksheet.getRow(1).alignment = {
    vertical: 'middle',
    horizontal: 'center',
    wrapText: true
  };

  worksheet.eachRow((row) => {
    row.alignment = {
      vertical: 'top',
      wrapText: true
    };
  });

  await workbook.xlsx.writeFile(
    'test-data/Signup_Test_Data.xlsx'
  );

  console.log('Signup_Test_Data.xlsx created successfully with 10 test cases!');
}

createExcel();
