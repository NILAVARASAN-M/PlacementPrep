// We use this data to give short descipt of the company, In Company.tsx we show list of companys in card-format. 
// This gives the descipt about the company, to show the companys in card-format.
export interface CompanyDataForCardDisplay {
    id: number;
    name: string;
    logo: string;
    description: string;
    eligibleDepartments: string[];
    year: number;
    hired: number;
  }

interface Company {
    id: number;
    name: string;
    logo: string;
    description: string;
    eligibleDepartments: string[];
    year: number;
    hired: number;
    highlights: {
      jobsAvailable: number;
      hired: number;
      highestCTC: string;
    };
    isHiring: boolean;
    yearlyStats: {
      [year: string]: YearlyStats;
    };
  }
  
  interface YearlyStats {
    jobTypeCount: number;
    hired: number;
    highestCTC: number;
    avgCTC: number;
    medianCTC: number;
    lowestCTC: number;
    genderPlacement: PlacementData[];
    departmentPlacement: PlacementData[];
    internConversion: PlacementData[];
    yearWisePlacement: PlacementData[];
  }
  
  interface PlacementData {
    name: string;
    value: number;
  }
  

// export const companyDataFull: Company[] = [
//     {
//       id: 1,
//       name: "Google",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
//       description: "Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, and more.",
//       eligibleDepartments: ["CSE", "AI", "CYS"],
//       year: 2025,
//       hired: 20,
//         highlights: {
//             'jobsAvailable': 18,
//             'hired': 45,
//             'highestCTC': '₹50.0 LPA',
//         },
//         isHiring: false,
//         yearlyStats: {
//           '2024': {
//             jobTypeCount: 9,
//             hired: 45,
//             highestCTC: 50.0,
//             avgCTC: 38.5,
//             medianCTC: 36.0,
//             lowestCTC: 24.0,
//             genderPlacement: [
//               { name: 'Male', value: 62 },
//               { name: 'Female', value: 38 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 45 },
//                 { name: 'AI', value: 32 },
//                 { name: 'CYS', value: 11 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 78 },
//               { name: 'Not Converted', value: 22 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 9 },
//               { name: 'Feb', value: 7 },
//               { name: 'Mar', value: 11 },
//               { name: 'Apr', value: 5 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 4 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2023': {
//             jobTypeCount: 8,
//             hired: 40,
//             highestCTC: 48.0,
//             avgCTC: 36.5,
//             medianCTC: 34.0,
//             lowestCTC: 22.0,
//             genderPlacement: [
//               { name: 'Male', value: 65 },
//               { name: 'Female', value: 35 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 47 },
//                 { name: 'AI', value: 30 },
//                 { name: 'CYS', value: 9 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 75 },
//               { name: 'Not Converted', value: 25 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 8 },
//               { name: 'Feb', value: 6 },
//               { name: 'Mar', value: 10 },
//               { name: 'Apr', value: 4 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2022': {
//             jobTypeCount: 7,
//             hired: 38,
//             highestCTC: 45.0,
//             avgCTC: 34.0,
//             medianCTC: 32.0,
//             lowestCTC: 20.0,
//             genderPlacement: [
//               { name: 'Male', value: 67 },
//               { name: 'Female', value: 33 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 50 },
//                 { name: 'AI', value: 27 },
//                 { name: 'CYS', value: 8 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 72 },
//               { name: 'Not Converted', value: 28 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 7 },
//               { name: 'Feb', value: 6 },
//               { name: 'Mar', value: 9 },
//               { name: 'Apr', value: 4 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2021': {
//             jobTypeCount: 6,
//             hired: 35,
//             highestCTC: 42.0,
//             avgCTC: 32.0,
//             medianCTC: 30.0,
//             lowestCTC: 18.0,
//             genderPlacement: [
//               { name: 'Male', value: 70 },
//               { name: 'Female', value: 30 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 52 },
//                 { name: 'AI', value: 25 },
//                 { name: 'CYS', value: 8 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 68 },
//               { name: 'Not Converted', value: 32 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 6 },
//               { name: 'Feb', value: 5 },
//               { name: 'Mar', value: 8 },
//               { name: 'Apr', value: 4 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           }
//         }
//     },
//     {
//       id: 2,
//       name: "Microsoft",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
//       description: "Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, and related services.",
//       eligibleDepartments: ["CSE", "AI", "CYS"],
//       year: 2025,
//       hired: 18,
//         highlights: {
//             'jobsAvailable': 20,
//             'hired': 40,
//             'highestCTC': '₹47.0 LPA',
//         },
//         isHiring: true,
//         yearlyStats: {
//             '2024': {
//             jobTypeCount: 10,
//             hired: 40,
//             highestCTC: 47.0,
//             avgCTC: 36.0,
//             medianCTC: 34.0,
//             lowestCTC: 23.0,
//             genderPlacement: [
//                 { name: 'Male', value: 58 },
//                 { name: 'Female', value: 42 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 42 },
//                 { name: 'AI', value: 30 },
//                 { name: 'CYS', value: 13 }
//                 ],
//             internConversion: [
//                 { name: 'Converted', value: 80 },
//                 { name: 'Not Converted', value: 20 }
//             ],
//             yearWisePlacement: [
//                 { name: 'Jan', value: 8 },
//                 { name: 'Feb', value: 6 },
//                 { name: 'Mar', value: 10 },
//                 { name: 'Apr', value: 4 },
//                 { name: 'May', value: 3 },
//                 { name: 'Jun', value: 2 },
//                 { name: 'Jul', value: 4 },
//                 { name: 'Aug', value: 1 },
//                 { name: 'Sep', value: 0 },
//                 { name: 'Oct', value: 1 },
//                 { name: 'Nov', value: 1 },
//                 { name: 'Dec', value: 0 }
//             ]
//             },
//             '2023': {
//             jobTypeCount: 8,
//             hired: 38,
//             highestCTC: 45.0,
//             avgCTC: 34.0,
//             medianCTC: 32.0,
//             lowestCTC: 21.0,
//             genderPlacement: [
//                 { name: 'Male', value: 60 },
//                 { name: 'Female', value: 40 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 44 },
//                 { name: 'AI', value: 25 },
//                 { name: 'CYS', value: 11 }
//                 ],
//             internConversion: [
//                 { name: 'Converted', value: 75 },
//                 { name: 'Not Converted', value: 25 }
//             ],
//             yearWisePlacement: [
//                 { name: 'Jan', value: 7 },
//                 { name: 'Feb', value: 6 },
//                 { name: 'Mar', value: 9 },
//                 { name: 'Apr', value: 4 },
//                 { name: 'May', value: 3 },
//                 { name: 'Jun', value: 2 },
//                 { name: 'Jul', value: 3 },
//                 { name: 'Aug', value: 2 },
//                 { name: 'Sep', value: 0 },
//                 { name: 'Oct', value: 1 },
//                 { name: 'Nov', value: 1 },
//                 { name: 'Dec', value: 0 }
//             ]
//             },
//             '2022': {
//             jobTypeCount: 7,
//             hired: 35,
//             highestCTC: 42.0,
//             avgCTC: 32.0,
//             medianCTC: 30.0,
//             lowestCTC: 19.0,
//             genderPlacement: [
//                 { name: 'Male', value: 62 },
//                 { name: 'Female', value: 38 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 46 },
//                 { name: 'AI', value: 22 },
//                 { name: 'CYS', value: 10 }
//                 ],
//             internConversion: [
//                 { name: 'Converted', value: 70 },
//                 { name: 'Not Converted', value: 30 }
//             ],
//             yearWisePlacement: [
//                 { name: 'Jan', value: 6 },
//                 { name: 'Feb', value: 5 },
//                 { name: 'Mar', value: 8 },
//                 { name: 'Apr', value: 4 },
//                 { name: 'May', value: 3 },
//                 { name: 'Jun', value: 2 },
//                 { name: 'Jul', value: 3 },
//                 { name: 'Aug', value: 2 },
//                 { name: 'Sep', value: 0 },
//                 { name: 'Oct', value: 1 },
//                 { name: 'Nov', value: 1 },
//                 { name: 'Dec', value: 0 }
//             ]
//             },
//             '2021': {
//             jobTypeCount: 6,
//             hired: 32,
//             highestCTC: 40.0,
//             avgCTC: 30.0,
//             medianCTC: 28.0,
//             lowestCTC: 17.0,
//             genderPlacement: [
//                 { name: 'Male', value: 65 },
//                 { name: 'Female', value: 35 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 48 },
//                 { name: 'AI', value: 20 },
//                 { name: 'CYS', value: 9 }
//                 ],
//             internConversion: [
//                 { name: 'Converted', value: 65 },
//                 { name: 'Not Converted', value: 35 }
//             ],
//             yearWisePlacement: [
//                 { name: 'Jan', value: 5 },
//                 { name: 'Feb', value: 5 },
//                 { name: 'Mar', value: 7 },
//                 { name: 'Apr', value: 4 },
//                 { name: 'May', value: 2 },
//                 { name: 'Jun', value: 2 },
//                 { name: 'Jul', value: 3 },
//                 { name: 'Aug', value: 1 },
//                 { name: 'Sep', value: 1 },
//                 { name: 'Oct', value: 1 },
//                 { name: 'Nov', value: 1 },
//                 { name: 'Dec', value: 0 }
//             ]
//             }
//         }
//     },
//     {
//       id: 3,
//       name: "Amazon",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
//       description: "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//       eligibleDepartments: ["CSE", "AI", "CYS", "EC"],
//       year: 2025,
//       hired: 25,
//       highlights: {
//         'jobsAvailable': 25,
//         'hired': 38,
//         'highestCTC': '₹44.2 LPA',
//       },
//       isHiring: true,
//       yearlyStats: {
//         '2024': {
//           jobTypeCount: 12,
//           hired: 38,
//           highestCTC: 44.2,
//           avgCTC: 34.5,
//           medianCTC: 32.0,
//           lowestCTC: 21.0,
//           genderPlacement: [
//             { name: 'Male', value: 63 },
//             { name: 'Female', value: 37 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 35 },
//               { name: 'AI', value: 25 },
//               { name: 'CYS', value: 10 },
//               { name: 'EC', value: 15 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 72 },
//             { name: 'Not Converted', value: 28 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 7 },
//             { name: 'Feb', value: 6 },
//             { name: 'Mar', value: 9 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 2 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2023': {
//           jobTypeCount: 10,
//           hired: 35,
//           highestCTC: 42.0,
//           avgCTC: 32.0,
//           medianCTC: 30.0,
//           lowestCTC: 19.0,
//           genderPlacement: [
//             { name: 'Male', value: 66 },
//             { name: 'Female', value: 34 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 38 },
//               { name: 'AI', value: 22 },
//               { name: 'CYS', value: 8 },
//               { name: 'EC', value: 14 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 68 },
//             { name: 'Not Converted', value: 32 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 6 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 8 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 2 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2022': {
//           jobTypeCount: 8,
//           hired: 32,
//           highestCTC: 40.0,
//           avgCTC: 30.0,
//           medianCTC: 28.0,
//           lowestCTC: 17.0,
//           genderPlacement: [
//             { name: 'Male', value: 68 },
//             { name: 'Female', value: 32 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 40 },
//               { name: 'AI', value: 20 },
//               { name: 'CYS', value: 6 },
//               { name: 'EC', value: 14 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 65 },
//             { name: 'Not Converted', value: 35 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 6 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 7 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2021': {
//           jobTypeCount: 7,
//           hired: 28,
//           highestCTC: 37.0,
//           avgCTC: 28.0,
//           medianCTC: 26.0,
//           lowestCTC: 15.0,
//           genderPlacement: [
//             { name: 'Male', value: 72 },
//             { name: 'Female', value: 28 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 42 },
//               { name: 'AI', value: 18 },
//               { name: 'CYS', value: 5 },
//               { name: 'EC', value: 15 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 60 },
//             { name: 'Not Converted', value: 40 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 5 },
//             { name: 'Feb', value: 4 },
//             { name: 'Mar', value: 6 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         }
//       }
//     },
//     {
//       id: 4,
//       name: "Apple",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
//       description: "Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services.",
//       eligibleDepartments: ["CSE", "AI", "CYS", "EC", "EEE"],
//       year: 2025,
//       hired: 22,
//       highlights: {
//         'jobsAvailable': 12,
//         'hired': 35,
//         'highestCTC': '₹48.2 LPA',
//       },
//       isHiring: false,
//       yearlyStats: {
//         '2024': {
//           jobTypeCount: 7,
//           hired: 35,
//           highestCTC: 48.2,
//           avgCTC: 35.4,
//           medianCTC: 32.5,
//           lowestCTC: 22.0,
//           genderPlacement: [
//             { name: 'Male', value: 60 },
//             { name: 'Female', value: 40 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 40 },
//               { name: 'AI', value: 25 },
//               { name: 'CYS', value: 10 },
//               { name: 'EC', value: 15 },
//               { name: 'EEE', value: 10 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 75 },
//             { name: 'Not Converted', value: 25 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 7 },
//             { name: 'Feb', value: 6 },
//             { name: 'Mar', value: 9 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 1 },
//             { name: 'Jul', value: 4 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2023': {
//           jobTypeCount: 6,
//           hired: 32,
//           highestCTC: 45.0,
//           avgCTC: 33.2,
//           medianCTC: 30.5,
//           lowestCTC: 20.0,
//           genderPlacement: [
//             { name: 'Male', value: 65 },
//             { name: 'Female', value: 35 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 45 },
//               { name: 'AI', value: 20 },
//               { name: 'CYS', value: 8 },
//               { name: 'EC', value: 17 },
//               { name: 'EEE', value: 10 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 70 },
//             { name: 'Not Converted', value: 30 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 6 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 8 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 1 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2022': {
//           jobTypeCount: 5,
//           hired: 30,
//           highestCTC: 42.0,
//           avgCTC: 30.5,
//           medianCTC: 28.0,
//           lowestCTC: 18.0,
//           genderPlacement: [
//             { name: 'Male', value: 68 },
//             { name: 'Female', value: 32 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 50 },
//               { name: 'AI', value: 18 },
//               { name: 'CYS', value: 5 },
//               { name: 'EC', value: 17 },
//               { name: 'EEE', value: 10 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 65 },
//             { name: 'Not Converted', value: 35 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 5 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 7 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2021': {
//           jobTypeCount: 4,
//           hired: 25,
//           highestCTC: 40.0,
//           avgCTC: 28.0,
//           medianCTC: 26.0,
//           lowestCTC: 16.0,
//           genderPlacement: [
//             { name: 'Male', value: 70 },
//             { name: 'Female', value: 30 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 55 },
//               { name: 'AI', value: 15 },
//               { name: 'CYS', value: 5 },
//               { name: 'EC', value: 17 },
//               { name: 'EEE', value: 8 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 60 },
//             { name: 'Not Converted', value: 40 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 4 },
//             { name: 'Feb', value: 4 },
//             { name: 'Mar', value: 6 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 1 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         }
//       }
//     },
//     {
//       id: 5,
//       name: "Meta",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",
//       description: "Meta Platforms, Inc., doing business as Meta, is an American multinational technology conglomerate that owns Facebook, Instagram, and WhatsApp, among other products and services.",
//       eligibleDepartments:  ["CSE", "AI", "CYS"],
//       year: 2025,
//       hired: 15,
//         highlights: {
//           'jobsAvailable': 15,
//           'hired': 42,
//           'highestCTC': '₹45.5 LPA',
//         },
//         isHiring: true,
//         yearlyStats: {
//           '2024': {
//             jobTypeCount: 8,
//             hired: 42,
//             highestCTC: 45.5,
//             avgCTC: 32.4,
//             medianCTC: 30.5,
//             lowestCTC: 20.0,
//             genderPlacement: [
//               { name: 'Male', value: 65 },
//               { name: 'Female', value: 35 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 50 },
//                 { name: 'AI', value: 30 },
//                 { name: 'CYS', value: 20 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 70 },
//               { name: 'Not Converted', value: 30 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 8 },
//               { name: 'Feb', value: 5 },
//               { name: 'Mar', value: 10 },
//               { name: 'Apr', value: 4 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 5 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 2 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2023': {
//             jobTypeCount: 6,
//             hired: 38,
//             highestCTC: 42.0,
//             avgCTC: 30.2,
//             medianCTC: 28.5,
//             lowestCTC: 18.0,
//             genderPlacement: [
//               { name: 'Male', value: 70 },
//               { name: 'Female', value: 30 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 55 },
//                 { name: 'AI', value: 30 },
//                 { name: 'CYS', value: 15 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 65 },
//               { name: 'Not Converted', value: 35 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 7 },
//               { name: 'Feb', value: 6 },
//               { name: 'Mar', value: 8 },
//               { name: 'Apr', value: 5 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 3 },
//               { name: 'Jul', value: 4 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 0 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2022': {
//             jobTypeCount: 5,
//             hired: 35,
//             highestCTC: 40.0,
//             avgCTC: 28.5,
//             medianCTC: 27.0,
//             lowestCTC: 16.5,
//             genderPlacement: [
//               { name: 'Male', value: 68 },
//               { name: 'Female', value: 32 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 60 },
//                 { name: 'AI', value: 25 },
//                 { name: 'CYS', value: 15 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 60 },
//               { name: 'Not Converted', value: 40 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 6 },
//               { name: 'Feb', value: 5 },
//               { name: 'Mar', value: 7 },
//               { name: 'Apr', value: 4 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2021': {
//             jobTypeCount: 4,
//             hired: 30,
//             highestCTC: 38.0,
//             avgCTC: 26.0,
//             medianCTC: 25.0,
//             lowestCTC: 15.0,
//             genderPlacement: [
//               { name: 'Male', value: 75 },
//               { name: 'Female', value: 25 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 65 },
//                 { name: 'AI', value: 20 },
//                 { name: 'CYS', value: 15 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 55 },
//               { name: 'Not Converted', value: 45 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 5 },
//               { name: 'Feb', value: 4 },
//               { name: 'Mar', value: 6 },
//               { name: 'Apr', value: 3 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 2 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           }
//         }
//     },
//     {
//         id: 6,
//       name: "Netflix",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
//       description: "Netflix, Inc. is an American subscription streaming service and production company that offers a library of films and television series.",
//       eligibleDepartments: ["CSE", "AI"],
//       year: 2024,
//       hired: 10,
//       highlights: {
//         'jobsAvailable': 10,
//         'hired': 22,
//         'highestCTC': '₹43.8 LPA',
//       },
//       isHiring: true,
//       yearlyStats: {
//         '2024': {
//           jobTypeCount: 8,
//           hired: 22,
//           highestCTC: 43.8,
//           avgCTC: 35.2,
//           medianCTC: 33.0,
//           lowestCTC: 24.0,
//           genderPlacement: [
//             { name: 'Male', value: 58 },
//             { name: 'Female', value: 42 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 60 },
//               { name: 'AI', value: 40 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 75 },
//             { name: 'Not Converted', value: 25 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 4 },
//             { name: 'Feb', value: 3 },
//             { name: 'Mar', value: 6 },
//             { name: 'Apr', value: 2 },
//             { name: 'May', value: 1 },
//             { name: 'Jun', value: 1 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2023': {
//           jobTypeCount: 7,
//           hired: 20,
//           highestCTC: 42.0,
//           avgCTC: 33.5,
//           medianCTC: 31.0,
//           lowestCTC: 22.0,
//           genderPlacement: [
//             { name: 'Male', value: 60 },
//             { name: 'Female', value: 40 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 62 },
//               { name: 'AI', value: 38 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 72 },
//             { name: 'Not Converted', value: 28 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 4 },
//             { name: 'Feb', value: 3 },
//             { name: 'Mar', value: 5 },
//             { name: 'Apr', value: 2 },
//             { name: 'May', value: 1 },
//             { name: 'Jun', value: 1 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 0 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2022': {
//           jobTypeCount: 6,
//           hired: 18,
//           highestCTC: 40.0,
//           avgCTC: 31.0,
//           medianCTC: 29.0,
//           lowestCTC: 20.0,
//           genderPlacement: [
//             { name: 'Male', value: 62 },
//             { name: 'Female', value: 38 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 65 },
//               { name: 'AI', value: 35 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 68 },
//             { name: 'Not Converted', value: 32 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 3 },
//             { name: 'Feb', value: 3 },
//             { name: 'Mar', value: 4 },
//             { name: 'Apr', value: 2 },
//             { name: 'May', value: 1 },
//             { name: 'Jun', value: 1 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 0 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2021': {
//           jobTypeCount: 5,
//           hired: 15,
//           highestCTC: 38.0,
//           avgCTC: 29.0,
//           medianCTC: 27.0,
//           lowestCTC: 18.0,
//           genderPlacement: [
//             { name: 'Male', value: 65 },
//             { name: 'Female', value: 35 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 67 },
//               { name: 'AI', value: 33 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 65 },
//             { name: 'Not Converted', value: 35 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 3 },
//             { name: 'Feb', value: 2 },
//             { name: 'Mar', value: 4 },
//             { name: 'Apr', value: 1 },
//             { name: 'May', value: 1 },
//             { name: 'Jun', value: 1 },
//             { name: 'Jul', value: 1 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 0 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         }
//       }
//     },
//     {
//         id: 7,
//       name: "Intel",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1200px-Intel_logo_%282006-2020%29.svg.png",
//       description: "Intel Corporation is an American multinational corporation and technology company that is the world's largest semiconductor chip manufacturer by revenue.",
//       eligibleDepartments: ["CSE", "AI", "EC", "EEE"],
//       year: 2024,
//       hired: 17,
//         highlights: {
//           'jobsAvailable': 18,
//           'hired': 39,
//           'highestCTC': '₹40.8 LPA',
//         },
//         isHiring: true,
//         yearlyStats: {
//           '2024': {
//             jobTypeCount: 7,
//             hired: 39,
//             highestCTC: 40.8,
//             avgCTC: 29.6,
//             medianCTC: 28.2,
//             lowestCTC: 18.5,
//             genderPlacement: [
//               { name: 'Male', value: 62 },
//               { name: 'Female', value: 38 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 40 },
//                 { name: 'EC', value: 30 },
//                 { name: 'AI', value: 20 },
//                 { name: 'EEE', value: 10 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 65 },
//               { name: 'Not Converted', value: 35 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 7 },
//               { name: 'Feb', value: 6 },
//               { name: 'Mar', value: 8 },
//               { name: 'Apr', value: 5 },
//               { name: 'May', value: 4 },
//               { name: 'Jun', value: 3 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 0 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2023': {
//             jobTypeCount: 6,
//             hired: 35,
//             highestCTC: 38.5,
//             avgCTC: 27.8,
//             medianCTC: 26.5,
//             lowestCTC: 17.0,
//             genderPlacement: [
//               { name: 'Male', value: 65 },
//               { name: 'Female', value: 35 }
//             ],
//             departmentPlacement:[
//                 { name: 'CSE', value: 45 },
//                 { name: 'EC', value: 28 },
//                 { name: 'AI', value: 17 },
//                 { name: 'EEE', value: 10 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 62 },
//               { name: 'Not Converted', value: 38 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 6 },
//               { name: 'Feb', value: 5 },
//               { name: 'Mar', value: 7 },
//               { name: 'Apr', value: 4 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 4 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 0 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2022': {
//             jobTypeCount: 5,
//             hired: 32,
//             highestCTC: 36.0,
//             avgCTC: 26.2,
//             medianCTC: 25.0,
//             lowestCTC: 16.0,
//             genderPlacement: [
//               { name: 'Male', value: 68 },
//               { name: 'Female', value: 32 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 48 },
//                 { name: 'EC', value: 30 },
//                 { name: 'AI', value: 12 },
//                 { name: 'EEE', value: 10 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 58 },
//               { name: 'Not Converted', value: 42 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 5 },
//               { name: 'Feb', value: 4 },
//               { name: 'Mar', value: 6 },
//               { name: 'Apr', value: 5 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2021': {
//             jobTypeCount: 4,
//             hired: 28,
//             highestCTC: 34.0,
//             avgCTC: 24.5,
//             medianCTC: 23.5,
//             lowestCTC: 14.5,
//             genderPlacement: [
//               { name: 'Male', value: 70 },
//               { name: 'Female', value: 30 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 50 },
//                 { name: 'EC', value: 32 },
//                 { name: 'AI', value: 10 },
//                 { name: 'EEE', value: 8 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 52 },
//               { name: 'Not Converted', value: 48 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 4 },
//               { name: 'Feb', value: 5 },
//               { name: 'Mar', value: 6 },
//               { name: 'Apr', value: 3 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           }
//         }
//     },
//     {
//       id: 8,
//       name: "IBM",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
//       description: "International Business Machines Corporation is an American multinational technology corporation that offers cloud computing, artificial intelligence, and computer hardware, software, and consulting services.",
//       eligibleDepartments: ["CSE", "AI", "CYS", "EC"],
//       year: 2024,
//       hired: 12,
//       highlights: {
//         'jobsAvailable': 22,
//         'hired': 45,
//         'highestCTC': '₹43.2 LPA',
//     },
//     isHiring: true,
//     yearlyStats: {
//         '2024': {
//         jobTypeCount: 9,
//         hired: 45,
//         highestCTC: 43.2,
//         avgCTC: 31.5,
//         medianCTC: 29.8,
//         lowestCTC: 19.8,
//         genderPlacement: [
//             { name: 'Male', value: 60 },
//             { name: 'Female', value: 40 }
//         ],
//         departmentPlacement: [
//             { name: 'CSE', value: 35 },
//             { name: 'AI', value: 30 },
//             { name: 'CYS', value: 20 },
//             { name: 'EC', value: 15 }
//           ],
//         internConversion: [
//             { name: 'Converted', value: 72 },
//             { name: 'Not Converted', value: 28 }
//         ],
//         yearWisePlacement: [
//             { name: 'Jan', value: 8 },
//             { name: 'Feb', value: 7 },
//             { name: 'Mar', value: 9 },
//             { name: 'Apr', value: 5 },
//             { name: 'May', value: 4 },
//             { name: 'Jun', value: 3 },
//             { name: 'Jul', value: 4 },
//             { name: 'Aug', value: 2 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//         ]
//         },
//         '2023': {
//         jobTypeCount: 7,
//         hired: 40,
//         highestCTC: 41.0,
//         avgCTC: 29.8,
//         medianCTC: 28.0,
//         lowestCTC: 18.5,
//         genderPlacement: [
//             { name: 'Male', value: 62 },
//             { name: 'Female', value: 38 }
//         ],
//         departmentPlacement: [
//             { name: 'CSE', value: 38 },
//             { name: 'AI', value: 28 },
//             { name: 'CYS', value: 20 },
//             { name: 'EC', value: 14 }
//           ],
//         internConversion: [
//             { name: 'Converted', value: 68 },
//             { name: 'Not Converted', value: 32 }
//         ],
//         yearWisePlacement: [
//             { name: 'Jan', value: 7 },
//             { name: 'Feb', value: 6 },
//             { name: 'Mar', value: 8 },
//             { name: 'Apr', value: 5 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 3 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 2 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//         ]
//         },
//         '2022': {
//         jobTypeCount: 6,
//         hired: 36,
//         highestCTC: 38.5,
//         avgCTC: 28.0,
//         medianCTC: 26.5,
//         lowestCTC: 17.2,
//         genderPlacement: [
//             { name: 'Male', value: 65 },
//             { name: 'Female', value: 35 }
//         ],
//         departmentPlacement: [
//             { name: 'CSE', value: 42 },
//             { name: 'AI', value: 25 },
//             { name: 'CYS', value: 18 },
//             { name: 'EC', value: 15 }
//           ],
//         internConversion: [
//             { name: 'Converted', value: 65 },
//             { name: 'Not Converted', value: 35 }
//         ],
//         yearWisePlacement: [
//             { name: 'Jan', value: 6 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 7 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 3 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 2 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//         ]
//         },
//         '2021': {
//         jobTypeCount: 5,
//         hired: 32,
//         highestCTC: 36.0,
//         avgCTC: 26.5,
//         medianCTC: 25.0,
//         lowestCTC: 16.0,
//         genderPlacement: [
//             { name: 'Male', value: 68 },
//             { name: 'Female', value: 32 }
//         ],
//         departmentPlacement: [
//             { name: 'CSE', value: 45 },
//             { name: 'AI', value: 22 },
//             { name: 'CYS', value: 18 },
//             { name: 'EC', value: 15 }
//           ],
//         internConversion: [
//             { name: 'Converted', value: 60 },
//             { name: 'Not Converted', value: 40 }
//         ],
//         yearWisePlacement: [
//             { name: 'Jan', value: 5 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 6 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//         ]
//         }
//     }
//     },
//     {
//      id: 9,
//       name: "Adobe",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1200px-Adobe_Corporate_Logo.png",
//       description: "Adobe Inc. is an American multinational computer software company that focuses on multimedia and creativity software products.",
//       eligibleDepartments: ["CSE", "AI"],
//       year: 2023,
//       hired: 8,
//         highlights: {
//           'jobsAvailable': 16,
//           'hired': 28,
//           'highestCTC': '₹41.5 LPA',
//         },
//         isHiring: true,
//         yearlyStats: {
//           '2024': {
//             jobTypeCount: 10,
//             hired: 28,
//             highestCTC: 41.5,
//             avgCTC: 31.8,
//             medianCTC: 29.5,
//             lowestCTC: 20.5,
//             genderPlacement: [
//               { name: 'Male', value: 55 },
//               { name: 'Female', value: 45 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 62 },
//                 { name: 'AI', value: 38 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 75 },
//               { name: 'Not Converted', value: 25 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 5 },
//               { name: 'Feb', value: 4 },
//               { name: 'Mar', value: 7 },
//               { name: 'Apr', value: 3 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 1 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2023': {
//             jobTypeCount: 8,
//             hired: 25,
//             highestCTC: 39.0,
//             avgCTC: 30.0,
//             medianCTC: 28.0,
//             lowestCTC: 19.0,
//             genderPlacement: [
//               { name: 'Male', value: 58 },
//               { name: 'Female', value: 42 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 65 },
//                 { name: 'AI', value: 35 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 72 },
//               { name: 'Not Converted', value: 28 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 5 },
//               { name: 'Feb', value: 3 },
//               { name: 'Mar', value: 6 },
//               { name: 'Apr', value: 3 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 1 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2022': {
//             jobTypeCount: 7,
//             hired: 23,
//             highestCTC: 37.0,
//             avgCTC: 28.5,
//             medianCTC: 26.0,
//             lowestCTC: 17.5,
//             genderPlacement: [
//               { name: 'Male', value: 60 },
//               { name: 'Female', value: 40 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 69 },
//                 { name: 'AI', value: 31 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 70 },
//               { name: 'Not Converted', value: 30 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 4 },
//               { name: 'Feb', value: 3 },
//               { name: 'Mar', value: 5 },
//               { name: 'Apr', value: 3 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 1 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2021': {
//             jobTypeCount: 6,
//             hired: 20,
//             highestCTC: 35.0,
//             avgCTC: 26.0,
//             medianCTC: 24.0,
//             lowestCTC: 16.0,
//             genderPlacement: [
//               { name: 'Male', value: 62 },
//               { name: 'Female', value: 38 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 72 },
//                 { name: 'AI', value: 28 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 68 },
//               { name: 'Not Converted', value: 32 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 4 },
//               { name: 'Feb', value: 3 },
//               { name: 'Mar', value: 5 },
//               { name: 'Apr', value: 2 },
//               { name: 'May', value: 1 },
//               { name: 'Jun', value: 1 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 0 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           }
//         }
//     },
//     {
//       id: 10,
//       name: "Oracle",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1200px-Oracle_logo.svg.png",
//       description: "Oracle Corporation is an American multinational computer technology corporation that sells database software and technology, cloud engineered systems, and enterprise software products.",
//       eligibleDepartments: ["CSE", "AI"],
//       year: 2023,
//       hired: 10,
//       highlights: {
//         'jobsAvailable': 20,
//         'hired': 38,
//         'highestCTC': '₹42.0 LPA',
//     },
//     isHiring: true,
//     yearlyStats: {
//         '2024': {
//         jobTypeCount: 8,
//         hired: 38,
//         highestCTC: 42.0,
//         avgCTC: 30.8,
//         medianCTC: 29.0,
//         lowestCTC: 19.0,
//         genderPlacement: [
//             { name: 'Male', value: 64 },
//             { name: 'Female', value: 36 }
//         ],
//         departmentPlacement: [
//             { name: 'CSE', value: 55 },
//             { name: 'AI', value: 45 }
//           ],
//         internConversion: [
//             { name: 'Converted', value: 68 },
//             { name: 'Not Converted', value: 32 }
//         ],
//         yearWisePlacement: [
//             { name: 'Jan', value: 7 },
//             { name: 'Feb', value: 6 },
//             { name: 'Mar', value: 8 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 3 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//         ]
//         },
//         '2023': {
//         jobTypeCount: 6,
//         hired: 34,
//         highestCTC: 40.0,
//         avgCTC: 29.0,
//         medianCTC: 27.5,
//         lowestCTC: 18.0,
//         genderPlacement: [
//             { name: 'Male', value: 66 },
//             { name: 'Female', value: 34 }
//         ],
//         departmentPlacement: [
//             { name: 'CSE', value: 56 },
//             { name: 'AI', value: 44 }
//           ],
//         internConversion: [
//             { name: 'Converted', value: 64 },
//             { name: 'Not Converted', value: 36 }
//         ],
//         yearWisePlacement: [
//             { name: 'Jan', value: 6 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 7 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//         ]
//         },
//         '2022': {
//         jobTypeCount: 5,
//         hired: 31,
//         highestCTC: 38.0,
//         avgCTC: 27.5,
//         medianCTC: 26.0,
//         lowestCTC: 17.0,
//         genderPlacement: [
//             { name: 'Male', value: 68 },
//             { name: 'Female', value: 32 }
//         ],
//         departmentPlacement: [
//             { name: 'CSE', value: 58 },
//             { name: 'AI', value: 42 }
//           ],
//         internConversion: [
//             { name: 'Converted', value: 60 },
//             { name: 'Not Converted', value: 40 }
//         ],
//         yearWisePlacement: [
//             { name: 'Jan', value: 5 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 7 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//         ]
//         },
//         '2021': {
//         jobTypeCount: 4,
//         hired: 28,
//         highestCTC: 35.0,
//         avgCTC: 25.8,
//         medianCTC: 24.5,
//         lowestCTC: 16.0,
//         genderPlacement: [
//             { name: 'Male', value: 70 },
//             { name: 'Female', value: 30 }
//         ],
//         departmentPlacement: [
//             { name: 'CSE', value: 60 },
//             { name: 'AI', value: 40 }
//           ],
//         internConversion: [
//             { name: 'Converted', value: 58 },
//             { name: 'Not Converted', value: 42 }
//         ],
//         yearWisePlacement: [
//             { name: 'Jan', value: 5 },
//             { name: 'Feb', value: 4 },
//             { name: 'Mar', value: 6 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//         ]
//         }
//     }
//     },
//     {
//         id: 11,
//       name: "Tesla",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png",
//       description: "Tesla, Inc. is an American electric vehicle and clean energy company that designs and manufactures electric cars, battery energy storage, solar panels and solar roof tiles, and related products and services.",
//       eligibleDepartments: ["CSE", "AI", "EC", "EEE", "MECH", "AERO", "ROBO", "CHEM"],
//       year: 2023,
//       hired: 30,
//       highlights: {
//           'jobsAvailable': 25,
//           'hired': 35,
//           'highestCTC': '₹48.0 LPA',
//       },
//       isHiring: true,
//       yearlyStats: {
//           '2024': {
//           jobTypeCount: 10,
//           hired: 35,
//           highestCTC: 48.0,
//           avgCTC: 34.5,
//           medianCTC: 32.0,
//           lowestCTC: 22.0,
//           genderPlacement: [
//               { name: 'Male', value: 68 },
//               { name: 'Female', value: 32 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 25 },
//               { name: 'AI', value: 15 },
//               { name: 'EC', value: 20 },
//               { name: 'EEE', value: 10 },
//               { name: 'MECH', value: 10 },
//               { name: 'AERO', value: 8 },
//               { name: 'ROBO', value: 7 },
//               { name: 'CHEM', value: 5 }
//             ],
//           internConversion: [
//               { name: 'Converted', value: 75 },
//               { name: 'Not Converted', value: 25 }
//           ],
//           yearWisePlacement: [
//               { name: 'Jan', value: 6 },
//               { name: 'Feb', value: 5 },
//               { name: 'Mar', value: 8 },
//               { name: 'Apr', value: 4 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//           ]
//           },
//           '2023': {
//           jobTypeCount: 8,
//           hired: 32,
//           highestCTC: 45.0,
//           avgCTC: 32.0,
//           medianCTC: 30.0,
//           lowestCTC: 20.0,
//           genderPlacement: [
//               { name: 'Male', value: 70 },
//               { name: 'Female', value: 30 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 26 },
//               { name: 'AI', value: 14 },
//               { name: 'EC', value: 19 },
//               { name: 'EEE', value: 10 },
//               { name: 'MECH', value: 10 },
//               { name: 'AERO', value: 7 },
//               { name: 'ROBO', value: 6 },
//               { name: 'CHEM', value: 5 }
//             ],
//           internConversion: [
//               { name: 'Converted', value: 72 },
//               { name: 'Not Converted', value: 28 }
//           ],
//           yearWisePlacement: [
//               { name: 'Jan', value: 5 },
//               { name: 'Feb', value: 5 },
//               { name: 'Mar', value: 7 },
//               { name: 'Apr', value: 4 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//           ]
//           },
//           '2022': {
//           jobTypeCount: 7,
//           hired: 28,
//           highestCTC: 42.0,
//           avgCTC: 30.0,
//           medianCTC: 28.0,
//           lowestCTC: 18.5,
//           genderPlacement: [
//               { name: 'Male', value: 72 },
//               { name: 'Female', value: 28 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 28 },
//               { name: 'AI', value: 12 },
//               { name: 'EC', value: 18 },
//               { name: 'EEE', value: 10 },
//               { name: 'MECH', value: 9 },
//               { name: 'AERO', value: 6 },
//               { name: 'ROBO', value: 6 },
//               { name: 'CHEM', value: 5 }
//             ],
//           internConversion: [
//               { name: 'Converted', value: 68 },
//               { name: 'Not Converted', value: 32 }
//           ],
//           yearWisePlacement: [
//               { name: 'Jan', value: 5 },
//               { name: 'Feb', value: 4 },
//               { name: 'Mar', value: 6 },
//               { name: 'Apr', value: 3 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//           ]
//           },
//           '2021': {
//           jobTypeCount: 5,
//           hired: 25,
//           highestCTC: 40.0,
//           avgCTC: 28.0,
//           medianCTC: 26.0,
//           lowestCTC: 17.0,
//           genderPlacement: [
//               { name: 'Male', value: 75 },
//               { name: 'Female', value: 25 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 30 },
//               { name: 'AI', value: 10 },
//               { name: 'EC', value: 17 },
//               { name: 'EEE', value: 9 },
//               { name: 'MECH', value: 9 },
//               { name: 'AERO', value: 6 },
//               { name: 'ROBO', value: 5 },
//               { name: 'CHEM', value: 4 }
//             ]
//           ,
//           internConversion: [
//               { name: 'Converted', value: 65 },
//               { name: 'Not Converted', value: 35 }
//           ],
//           yearWisePlacement: [
//               { name: 'Jan', value: 4 },
//               { name: 'Feb', value: 3 },
//               { name: 'Mar', value: 5 },
//               { name: 'Apr', value: 3 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//           ]
//           }
//       }
//     },
//     {
//         id: 12,
//       name: "Nvidia",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png",
//       description: "Nvidia Corporation is an American multinational technology company that designs graphics processing units (GPUs), application programming interfaces (APIs) for data science and high-performance computing.",
//       eligibleDepartments: ["CSE", "AI", "EC", "EEE"],
//       year: 2023,
//       hired: 18,
//         highlights: {
//           'jobsAvailable': 30,
//           'hired': 48,
//           'highestCTC': '₹52.5 LPA',
//         },
//         isHiring: true,
//         yearlyStats: {
//           '2024': {
//             jobTypeCount: 12,
//             hired: 48,
//             highestCTC: 52.5,
//             avgCTC: 38.2,
//             medianCTC: 36.5,
//             lowestCTC: 24.0,
//             genderPlacement: [
//               { name: 'Male', value: 65 },
//               { name: 'Female', value: 35 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 20 },
//                 { name: 'AI', value: 15 },
//                 { name: 'EC', value: 8 },
//                 { name: 'EEE', value: 5 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 78 },
//               { name: 'Not Converted', value: 22 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 10 },
//               { name: 'Feb', value: 8 },
//               { name: 'Mar', value: 12 },
//               { name: 'Apr', value: 5 },
//               { name: 'May', value: 4 },
//               { name: 'Jun', value: 3 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2023': {
//             jobTypeCount: 10,
//             hired: 42,
//             highestCTC: 48.0,
//             avgCTC: 35.6,
//             medianCTC: 33.5,
//             lowestCTC: 22.0,
//             genderPlacement: [
//               { name: 'Male', value: 68 },
//               { name: 'Female', value: 32 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 22 },
//                 { name: 'AI', value: 12 },
//                 { name: 'EC', value: 6 },
//                 { name: 'EEE', value: 5 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 75 },
//               { name: 'Not Converted', value: 25 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 8 },
//               { name: 'Feb', value: 7 },
//               { name: 'Mar', value: 10 },
//               { name: 'Apr', value: 4 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 3 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2022': {
//             jobTypeCount: 8,
//             hired: 36,
//             highestCTC: 45.0,
//             avgCTC: 33.0,
//             medianCTC: 31.0,
//             lowestCTC: 20.5,
//             genderPlacement: [
//               { name: 'Male', value: 70 },
//               { name: 'Female', value: 30 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 24 },
//                 { name: 'AI', value: 10 },
//                 { name: 'EC', value: 6 },
//                 { name: 'EEE', value: 4 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 70 },
//               { name: 'Not Converted', value: 30 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 7 },
//               { name: 'Feb', value: 6 },
//               { name: 'Mar', value: 8 },
//               { name: 'Apr', value: 4 },
//               { name: 'May', value: 3 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 1 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2021': {
//             jobTypeCount: 6,
//             hired: 30,
//             highestCTC: 42.0,
//             avgCTC: 30.5,
//             medianCTC: 28.5,
//             lowestCTC: 19.0,
//             genderPlacement: [
//               { name: 'Male', value: 72 },
//               { name: 'Female', value: 28 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 26 },
//                 { name: 'AI', value: 9 },
//                 { name: 'EC', value: 5 },
//                 { name: 'EEE', value: 3 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 65 },
//               { name: 'Not Converted', value: 35 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 6 },
//               { name: 'Feb', value: 5 },
//               { name: 'Mar', value: 7 },
//               { name: 'Apr', value: 3 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 2 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 1 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           }
//         }
//     },
//     {
//         id: 13,
//       name: "Samsung",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png",
//       description: "Samsung Electronics Co., Ltd. is a South Korean multinational electronics company that manufactures consumer electronics, information technology, and mobile communications equipment.",
//       eligibleDepartments: ["CSE", "AI", "EC", "EEE", "MECH"],
//       year: 2022,
//       hired: 22,
//       highlights: {
//         'jobsAvailable': 22,
//         'hired': 44,
//         'highestCTC': '₹44.0 LPA',
//       },
//       isHiring: true,
//       yearlyStats: {
//         '2024': {
//           jobTypeCount: 9,
//           hired: 44,
//           highestCTC: 44.0,
//           avgCTC: 33.2,
//           medianCTC: 31.5,
//           lowestCTC: 21.0,
//           genderPlacement: [
//             { name: 'Male', value: 62 },
//             { name: 'Female', value: 38 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 18 },
//               { name: 'AI', value: 10 },
//               { name: 'EC', value: 8 },
//               { name: 'EEE', value: 5 },
//               { name: 'MECH', value: 3 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 72 },
//             { name: 'Not Converted', value: 28 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 9 },
//             { name: 'Feb', value: 7 },
//             { name: 'Mar', value: 10 },
//             { name: 'Apr', value: 5 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 4 },
//             { name: 'Aug', value: 2 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2023': {
//           jobTypeCount: 8,
//           hired: 40,
//           highestCTC: 41.5,
//           avgCTC: 31.0,
//           medianCTC: 29.5,
//           lowestCTC: 19.5,
//           genderPlacement: [
//             { name: 'Male', value: 65 },
//             { name: 'Female', value: 35 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 20 },
//               { name: 'AI', value: 8 },
//               { name: 'EC', value: 7 },
//               { name: 'EEE', value: 3 },
//               { name: 'MECH', value: 2 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 68 },
//             { name: 'Not Converted', value: 32 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 8 },
//             { name: 'Feb', value: 6 },
//             { name: 'Mar', value: 9 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 2 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2022': {
//           jobTypeCount: 7,
//           hired: 36,
//           highestCTC: 39.0,
//           avgCTC: 29.0,
//           medianCTC: 27.5,
//           lowestCTC: 18.0,
//           genderPlacement: [
//             { name: 'Male', value: 68 },
//             { name: 'Female', value: 32 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 22 },
//               { name: 'AI', value: 6 },
//               { name: 'EC', value: 5 },
//               { name: 'EEE', value: 2 },
//               { name: 'MECH', value: 1 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 65 },
//             { name: 'Not Converted', value: 35 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 7 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 8 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2021': {
//           jobTypeCount: 6,
//           hired: 32,
//           highestCTC: 36.5,
//           avgCTC: 27.0,
//           medianCTC: 25.5,
//           lowestCTC: 17.0,
//           genderPlacement: [
//             { name: 'Male', value: 70 },
//             { name: 'Female', value: 30 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 24 },
//               { name: 'AI', value: 5 },
//               { name: 'EC', value: 4 },
//               { name: 'EEE', value: 2 },
//               { name: 'MECH', value: 1 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 60 },
//             { name: 'Not Converted', value: 40 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 6 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 7 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         }
//       }
//     },
//     {
//         id: 14,
//       name: "Sony",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/512px-Sony_logo.svg.png",
//       description: "Sony Group Corporation is a Japanese multinational conglomerate corporation that focuses on electronics, gaming, entertainment, and financial services.",
//       eligibleDepartments: ["CSE", "AI", "EC", "EEE", "MECH"],
//       year: 2022,
//       hired: 16,
//       highlights: {
//         'jobsAvailable': 18,
//         'hired': 36,
//         'highestCTC': '₹41.0 LPA',
//       },
//       isHiring: true,
//       yearlyStats: {
//         '2024': {
//           jobTypeCount: 8,
//           hired: 36,
//           highestCTC: 41.0,
//           avgCTC: 30.5,
//           medianCTC: 28.5,
//           lowestCTC: 19.0,
//           genderPlacement: [
//             { name: 'Male', value: 64 },
//             { name: 'Female', value: 36 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 16 },
//               { name: 'AI', value: 8 },
//               { name: 'EC', value: 6 },
//               { name: 'EEE', value: 4 },
//               { name: 'MECH', value: 2 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 68 },
//             { name: 'Not Converted', value: 32 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 7 },
//             { name: 'Feb', value: 6 },
//             { name: 'Mar', value: 8 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2023': {
//           jobTypeCount: 7,
//           hired: 32,
//           highestCTC: 38.5,
//           avgCTC: 28.5,
//           medianCTC: 27.0,
//           lowestCTC: 18.0,
//           genderPlacement: [
//             { name: 'Male', value: 66 },
//             { name: 'Female', value: 34 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 18 },
//               { name: 'AI', value: 6 },
//               { name: 'EC', value: 4 },
//               { name: 'EEE', value: 3 },
//               { name: 'MECH', value: 1 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 65 },
//             { name: 'Not Converted', value: 35 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 6 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 7 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2022': {
//           jobTypeCount: 6,
//           hired: 28,
//           highestCTC: 36.0,
//           avgCTC: 26.5,
//           medianCTC: 25.0,
//           lowestCTC: 17.0,
//           genderPlacement: [
//             { name: 'Male', value: 68 },
//             { name: 'Female', value: 32 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 20 },
//               { name: 'AI', value: 4 },
//               { name: 'EC', value: 3 },
//               { name: 'EEE', value: 2 },
//               { name: 'MECH', value: 1 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 62 },
//             { name: 'Not Converted', value: 38 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 5 },
//             { name: 'Feb', value: 4 },
//             { name: 'Mar', value: 6 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2021': {
//           jobTypeCount: 5,
//           hired: 25,
//           highestCTC: 33.5,
//           avgCTC: 24.5,
//           medianCTC: 23.0,
//           lowestCTC: 16.0,
//           genderPlacement: [
//             { name: 'Male', value: 70 },
//             { name: 'Female', value: 30 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 22 },
//               { name: 'AI', value: 3 },
//               { name: 'EC', value: 2 },
//               { name: 'EEE', value: 2 },
//               { name: 'MECH', value: 1 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 58 },
//             { name: 'Not Converted', value: 42 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 4 },
//             { name: 'Feb', value: 4 },
//             { name: 'Mar', value: 5 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 0 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         }
//       }
//     },
//     {
//       id: 15,
//       name: "PayPal",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png",
//       description: "PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system that supports online money transfers.",
//       eligibleDepartments: ["CSE", "AI", "CYS"],
//       year: 2022,
//       hired: 14,
//       highlights: {
//         'jobsAvailable': 20,
//         'hired': 40,
//         'highestCTC': '₹42.5 LPA',
//       },
//       isHiring: true,
//       yearlyStats: {
//         '2024': {
//           jobTypeCount: 9,
//           hired: 40,
//           highestCTC: 42.5,
//           avgCTC: 32.0,
//           medianCTC: 30.0,
//           lowestCTC: 20.0,
//           genderPlacement: [
//             { name: 'Male', value: 60 },
//             { name: 'Female', value: 40 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 22 },
//               { name: 'AI', value: 10 },
//               { name: 'CYS', value: 8 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 75 },
//             { name: 'Not Converted', value: 25 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 8 },
//             { name: 'Feb', value: 6 },
//             { name: 'Mar', value: 9 },
//             { name: 'Apr', value: 5 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2023': {
//           jobTypeCount: 8,
//           hired: 36,
//           highestCTC: 40.0,
//           avgCTC: 30.0,
//           medianCTC: 28.5,
//           lowestCTC: 18.5,
//           genderPlacement: [
//             { name: 'Male', value: 62 },
//             { name: 'Female', value: 38 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 20 },
//               { name: 'AI', value: 9 },
//               { name: 'CYS', value: 7 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 70 },
//             { name: 'Not Converted', value: 30 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 7 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 8 },
//             { name: 'Apr', value: 4 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 3 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2022': {
//           jobTypeCount: 7,
//           hired: 32,
//           highestCTC: 38.0,
//           avgCTC: 28.0,
//           medianCTC: 26.5,
//           lowestCTC: 17.5,
//           genderPlacement: [
//             { name: 'Male', value: 65 },
//             { name: 'Female', value: 35 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 18 },
//               { name: 'AI', value: 8 },
//               { name: 'CYS', value: 6 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 65 },
//             { name: 'Not Converted', value: 35 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 6 },
//             { name: 'Feb', value: 5 },
//             { name: 'Mar', value: 7 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 3 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         },
//         '2021': {
//           jobTypeCount: 5,
//           hired: 28,
//           highestCTC: 35.0,
//           avgCTC: 26.0,
//           medianCTC: 24.5,
//           lowestCTC: 16.0,
//           genderPlacement: [
//             { name: 'Male', value: 68 },
//             { name: 'Female', value: 32 }
//           ],
//           departmentPlacement: [
//               { name: 'CSE', value: 16 },
//               { name: 'AI', value: 7 },
//               { name: 'CYS', value: 5 }
//             ],
//           internConversion: [
//             { name: 'Converted', value: 60 },
//             { name: 'Not Converted', value: 40 }
//           ],
//           yearWisePlacement: [
//             { name: 'Jan', value: 5 },
//             { name: 'Feb', value: 4 },
//             { name: 'Mar', value: 6 },
//             { name: 'Apr', value: 3 },
//             { name: 'May', value: 2 },
//             { name: 'Jun', value: 2 },
//             { name: 'Jul', value: 2 },
//             { name: 'Aug', value: 1 },
//             { name: 'Sep', value: 1 },
//             { name: 'Oct', value: 1 },
//             { name: 'Nov', value: 1 },
//             { name: 'Dec', value: 0 }
//           ]
//         }
//       }
//     },
//     {
//       id: 16,
//       name: "Salesforce",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
//       description: "Salesforce, Inc. is an American cloud-based software company that provides customer relationship management (CRM) service and also provides a complementary suite of enterprise applications.",
//       eligibleDepartments: ["CSE", "AI", "CYS"],
//       year: 2022,
//       hired: 12,
//         highlights: {
//           'jobsAvailable': 14,
//           'hired': 30,
//           'highestCTC': '₹42.5 LPA',
//         },
//         isHiring: true,
//         yearlyStats: {
//           '2024': {
//             jobTypeCount: 9,
//             hired: 30,
//             highestCTC: 42.5,
//             avgCTC: 32.8,
//             medianCTC: 30.0,
//             lowestCTC: 21.0,
//             genderPlacement: [
//               { name: 'Male', value: 60 },
//               { name: 'Female', value: 40 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 50 },
//                 { name: 'AI', value: 30 },
//                 { name: 'CYS', value: 20 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 72 },
//               { name: 'Not Converted', value: 28 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 6 },
//               { name: 'Feb', value: 4 },
//               { name: 'Mar', value: 7 },
//               { name: 'Apr', value: 3 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 1 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2023': {
//             jobTypeCount: 8,
//             hired: 28,
//             highestCTC: 40.0,
//             avgCTC: 31.0,
//             medianCTC: 28.5,
//             lowestCTC: 19.0,
//             genderPlacement: [
//               { name: 'Male', value: 62 },
//               { name: 'Female', value: 38 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 52 },
//                 { name: 'AI', value: 28 },
//                 { name: 'CYS', value: 20 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 70 },
//               { name: 'Not Converted', value: 30 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 5 },
//               { name: 'Feb', value: 4 },
//               { name: 'Mar', value: 6 },
//               { name: 'Apr', value: 3 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 1 },
//               { name: 'Jul', value: 3 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2022': {
//             jobTypeCount: 7,
//             hired: 25,
//             highestCTC: 38.0,
//             avgCTC: 29.0,
//             medianCTC: 27.0,
//             lowestCTC: 17.0,
//             genderPlacement: [
//               { name: 'Male', value: 65 },
//               { name: 'Female', value: 35 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 55 },
//                 { name: 'AI', value: 25 },
//                 { name: 'CYS', value: 20 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 68 },
//               { name: 'Not Converted', value: 32 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 5 },
//               { name: 'Feb', value: 3 },
//               { name: 'Mar', value: 6 },
//               { name: 'Apr', value: 2 },
//               { name: 'May', value: 2 },
//               { name: 'Jun', value: 1 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           },
//           '2021': {
//             jobTypeCount: 6,
//             hired: 22,
//             highestCTC: 36.0,
//             avgCTC: 27.0,
//             medianCTC: 25.0,
//             lowestCTC: 16.0,
//             genderPlacement: [
//               { name: 'Male', value: 68 },
//               { name: 'Female', value: 32 }
//             ],
//             departmentPlacement: [
//                 { name: 'CSE', value: 58 },
//                 { name: 'AI', value: 22 },
//                 { name: 'CYS', value: 20 }
//               ],
//             internConversion: [
//               { name: 'Converted', value: 65 },
//               { name: 'Not Converted', value: 35 }
//             ],
//             yearWisePlacement: [
//               { name: 'Jan', value: 4 },
//               { name: 'Feb', value: 3 },
//               { name: 'Mar', value: 5 },
//               { name: 'Apr', value: 2 },
//               { name: 'May', value: 1 },
//               { name: 'Jun', value: 1 },
//               { name: 'Jul', value: 2 },
//               { name: 'Aug', value: 2 },
//               { name: 'Sep', value: 0 },
//               { name: 'Oct', value: 1 },
//               { name: 'Nov', value: 1 },
//               { name: 'Dec', value: 0 }
//             ]
//           }
//         }
//     }
// ]


// Sample job postings data - In a real application, you would fetch this data


export const jobPostings = [
  {
    name: "Netflix",
    jobs: [
      {
        id: 1,
        companyName: "Netflix",
        jobRole: "Frontend Developer Intern",
        postedDate: "26 March 2025, 00:24",
        closingDate: "15 April 2025, 23:59",
        eligible_departments: ["EC", "MECH", "AI", "CSE"],
        minimum_cgpa: 8.0,
        description: "Join our team to develop and maintain responsive web applications using React. You'll collaborate with UX designers and backend developers to create seamless user experiences.",
        job_type: "Full Time",
        aboutPosting: ""
      },
      {
        id: 2,
        companyName: "Netflix",
        jobRole: "Data Science Intern",
        postedDate: "25 March 2025, 15:30",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.5,
        description: "Work on recommendation algorithms and user behavior analysis to enhance content delivery. Experience with Python, SQL, and machine learning frameworks preferred.",
        job_type: "Part Time"
      },
      {
        id: 3,
        companyName: "Netflix",
        jobRole: "Cloud Infrastructure Engineer",
        postedDate: "24 March 2025, 09:15",
        closingDate: "20 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "CLOUD"],
        minimum_cgpa: 7.5,
        description: "Help maintain and optimize our cloud infrastructure. You'll work with AWS, Docker, and Kubernetes to ensure scalable and reliable systems.",
        job_type: "Full Time"
      },
      {
        id: 4,
        companyName: "Netflix",
        jobRole: "Software Engineer Intern",
        postedDate: "27 March 2025, 10:00",
        closingDate: "17 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "ECE"],
        minimum_cgpa: 8.2,
        description: "Join Netflix's engineering team to develop cutting-edge applications and tools. Experience with JavaScript, Python, and cloud platforms is a plus.",
        job_type: "Full Time"
      },
      {
        id: 5,
        companyName: "Netflix",
        jobRole: "Machine Learning Engineer",
        postedDate: "26 March 2025, 14:45",
        closingDate: "22 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA", "IT"],
        minimum_cgpa: 8.7,
        description: "Develop AI-powered solutions for Netflix services. Work with deep learning models, TensorFlow, and large-scale datasets.",
        job_type: "Full Time"
      },
      {
        id: 6,
        companyName: "Netflix",
        jobRole: "Backend Developer Intern",
        postedDate: "28 March 2025, 12:30",
        closingDate: "19 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.3,
        description: "Build and maintain scalable backend services using Node.js, Express, and cloud technologies.",
        job_type: "Part Time"
      },
      {
        id: 7,
        companyName: "Netflix",
        jobRole: "Embedded Systems Engineer",
        postedDate: "25 March 2025, 08:45",
        closingDate: "21 April 2025, 23:59",
        eligible_departments: ["ECE", "MECH", "AI"],
        minimum_cgpa: 7.8,
        description: "Work on cutting-edge embedded systems for Netflix streaming devices. Experience with C/C++, RTOS, and microcontroller programming is preferred.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Google",
    jobs: [
      {
        id: 8,
        companyName: "Google",
        jobRole: "Software Engineer Intern",
        postedDate: "26 March 2025, 11:00",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "ECE"],
        minimum_cgpa: 8.5,
        description: "Join Google’s engineering team to work on high-impact projects in cloud computing, AI, and large-scale distributed systems. Experience with Python, Java, or Go is a plus.",
        job_type: "Full Time"
      },
      {
        id: 9,
        companyName: "Google",
        jobRole: "Data Analyst Intern",
        postedDate: "25 March 2025, 14:20",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA", "IT"],
        minimum_cgpa: 8.3,
        description: "Analyze data trends and user behavior to support data-driven decision-making. Proficiency in SQL, Python, and data visualization tools is preferred.",
        job_type: "Part Time"
      },
      {
        id: 10,
        companyName: "Google",
        jobRole: "Cloud Engineer",
        postedDate: "24 March 2025, 10:45",
        closingDate: "20 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "CLOUD"],
        minimum_cgpa: 7.9,
        description: "Help develop and manage scalable cloud solutions on Google Cloud Platform (GCP). Experience with Kubernetes, Docker, and Terraform is recommended.",
        job_type: "Full Time"
      },
      {
        id: 11,
        companyName: "Google",
        jobRole: "UX/UI Designer Intern",
        postedDate: "27 March 2025, 09:30",
        closingDate: "17 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "DESIGN"],
        minimum_cgpa: 7.5,
        description: "Work with product and engineering teams to create intuitive user interfaces. Experience with Figma, Sketch, and front-end technologies is a plus.",
        job_type: "Part Time"
      },
      {
        id: 12,
        companyName: "Google",
        jobRole: "Machine Learning Engineer",
        postedDate: "26 March 2025, 15:10",
        closingDate: "22 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.8,
        description: "Develop and deploy machine learning models for Google's AI-driven products. Proficiency in TensorFlow, PyTorch, and cloud-based ML solutions is essential.",
        job_type: "Full Time"
      },
      {
        id: 13,
        companyName: "Google",
        jobRole: "Backend Developer Intern",
        postedDate: "28 March 2025, 13:40",
        closingDate: "19 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.4,
        description: "Work on scalable backend solutions using Node.js, Golang, and cloud services. Strong understanding of REST APIs and microservices architecture is required.",
        job_type: "Full Time"
      },
      {
        id: 14,
        companyName: "Google",
        jobRole: "Cybersecurity Analyst",
        postedDate: "25 March 2025, 07:50",
        closingDate: "21 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "CYBER"],
        minimum_cgpa: 8.2,
        description: "Protect Google’s infrastructure by identifying and mitigating security threats. Knowledge of ethical hacking, network security, and penetration testing is recommended.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Microsoft",
    jobs: [
      {
        id: 15,
        companyName: "Microsoft",
        jobRole: "Software Engineer Intern",
        postedDate: "26 March 2025, 10:30",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "ECE"],
        minimum_cgpa: 8.4,
        description: "Join Microsoft's engineering team to develop high-performance applications. Work with C#, .NET, and cloud services to build scalable solutions.",
        job_type: "Full Time"
      },
      {
        id: 16,
        companyName: "Microsoft",
        jobRole: "Data Scientist Intern",
        postedDate: "25 March 2025, 12:15",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.6,
        description: "Analyze large datasets to extract insights and improve Microsoft's AI-driven products. Experience with Python, R, and machine learning libraries is a plus.",
        job_type: "Part Time"
      },
      {
        id: 17,
        companyName: "Microsoft",
        jobRole: "Cloud Solutions Engineer",
        postedDate: "24 March 2025, 11:00",
        closingDate: "20 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "CLOUD"],
        minimum_cgpa: 7.8,
        description: "Help design and manage cloud-based solutions on Azure. Knowledge of Kubernetes, Docker, and DevOps practices is recommended.",
        job_type: "Full Time"
      },
      {
        id: 18,
        companyName: "Microsoft",
        jobRole: "Product Designer Intern",
        postedDate: "27 March 2025, 14:00",
        closingDate: "17 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "DESIGN"],
        minimum_cgpa: 7.5,
        description: "Work closely with UX designers and engineers to create intuitive interfaces. Experience with Adobe XD, Figma, and user research is a plus.",
        job_type: "Part Time"
      },
      {
        id: 19,
        companyName: "Microsoft",
        jobRole: "AI Research Engineer",
        postedDate: "26 March 2025, 16:45",
        closingDate: "22 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.9,
        description: "Work on cutting-edge AI research projects in collaboration with Microsoft Research. Expertise in deep learning, TensorFlow, and NLP is required.",
        job_type: "Full Time"
      },
      {
        id: 20,
        companyName: "Microsoft",
        jobRole: "Backend Developer Intern",
        postedDate: "28 March 2025, 13:20",
        closingDate: "19 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.3,
        description: "Develop scalable backend services using .NET, ASP.NET, and cloud technologies. Strong knowledge of API development and SQL databases is preferred.",
        job_type: "Full Time"
      },
      {
        id: 21,
        companyName: "Microsoft",
        jobRole: "Cybersecurity Analyst",
        postedDate: "25 March 2025, 09:10",
        closingDate: "21 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "CYBER"],
        minimum_cgpa: 8.1,
        description: "Monitor and secure Microsoft's infrastructure against cyber threats. Knowledge of ethical hacking, penetration testing, and threat analysis is a plus.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Apple",
    jobs: [
      {
        id: 22,
        companyName: "Apple",
        jobRole: "iOS Developer Intern",
        postedDate: "26 March 2025, 11:30",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "ECE"],
        minimum_cgpa: 8.5,
        description: "Develop and optimize iOS applications for Apple devices. Experience with Swift, Xcode, and UIKit is preferred.",
        job_type: "Full Time"
      },
      {
        id: 23,
        companyName: "Apple",
        jobRole: "Machine Learning Engineer",
        postedDate: "25 March 2025, 12:45",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.8,
        description: "Work on AI-powered features for Apple products. Proficiency in TensorFlow, CoreML, and Python is essential.",
        job_type: "Full Time"
      },
      {
        id: 24,
        companyName: "Apple",
        jobRole: "Cloud Security Engineer",
        postedDate: "24 March 2025, 14:10",
        closingDate: "20 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "CYBER"],
        minimum_cgpa: 8.2,
        description: "Enhance security and reliability of Apple's cloud infrastructure. Knowledge of encryption, AWS security, and compliance is recommended.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Meta",
    jobs: [
      {
        id: 25,
        companyName: "Meta",
        jobRole: "Frontend Developer Intern",
        postedDate: "27 March 2025, 09:30",
        closingDate: "17 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "ECE"],
        minimum_cgpa: 8.3,
        description: "Develop user-friendly interfaces for Meta's platforms using React.js, Redux, and modern UI frameworks.",
        job_type: "Full Time"
      },
      {
        id: 26,
        companyName: "Meta",
        jobRole: "AR/VR Developer",
        postedDate: "26 March 2025, 16:00",
        closingDate: "22 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DESIGN"],
        minimum_cgpa: 8.7,
        description: "Build immersive AR/VR experiences for Meta platforms. Experience with Unity, Unreal Engine, and C# is required.",
        job_type: "Full Time"
      },
      {
        id: 27,
        companyName: "Meta",
        jobRole: "Backend Developer Intern",
        postedDate: "28 March 2025, 14:20",
        closingDate: "19 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.4,
        description: "Design scalable backend systems for Meta applications using Node.js, GraphQL, and microservices.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Amazon",
    jobs: [
      {
        id: 28,
        companyName: "Amazon",
        jobRole: "Software Engineer Intern",
        postedDate: "26 March 2025, 10:00",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "ECE"],
        minimum_cgpa: 8.4,
        description: "Contribute to Amazon's cloud and retail applications using Java, Python, and AWS services.",
        job_type: "Full Time"
      },
      {
        id: 29,
        companyName: "Amazon",
        jobRole: "Data Engineer",
        postedDate: "25 March 2025, 12:20",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.6,
        description: "Build scalable data pipelines to support Amazon’s analytics infrastructure. Experience with SQL, Spark, and AWS Redshift is preferred.",
        job_type: "Full Time"
      },
      {
        id: 30,
        companyName: "Amazon",
        jobRole: "DevOps Engineer",
        postedDate: "24 March 2025, 13:45",
        closingDate: "20 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "CLOUD"],
        minimum_cgpa: 8.0,
        description: "Optimize deployment pipelines and ensure system reliability. Experience with CI/CD, Kubernetes, and Terraform is essential.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Intel",
    jobs: [
      {
        id: 31,
        companyName: "Intel",
        jobRole: "Embedded Systems Engineer",
        postedDate: "26 March 2025, 10:45",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["ECE", "MECH", "AI"],
        minimum_cgpa: 7.8,
        description: "Develop and optimize embedded solutions for Intel's hardware platforms. Experience with C/C++, microcontrollers, and FPGA programming is preferred.",
        job_type: "Full Time"
      },
      {
        id: 32,
        companyName: "Intel",
        jobRole: "AI Research Engineer",
        postedDate: "25 March 2025, 14:10",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.6,
        description: "Work on AI-driven chip designs and neural network accelerators. Experience with TensorFlow, PyTorch, and deep learning algorithms is a plus.",
        job_type: "Full Time"
      },
      {
        id: 33,
        companyName: "Intel",
        jobRole: "Hardware Verification Engineer",
        postedDate: "24 March 2025, 12:30",
        closingDate: "20 April 2025, 23:59",
        eligible_departments: ["ECE", "CSE"],
        minimum_cgpa: 8.2,
        description: "Perform testing and verification of Intel’s next-gen processors. Proficiency in Verilog, VHDL, and simulation tools like ModelSim is recommended.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "IBM",
    jobs: [
      {
        id: 34,
        companyName: "IBM",
        jobRole: "Cloud Engineer Intern",
        postedDate: "27 March 2025, 11:15",
        closingDate: "17 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "CLOUD"],
        minimum_cgpa: 8.0,
        description: "Assist in building and optimizing cloud solutions on IBM Cloud. Experience with Kubernetes, OpenShift, and microservices is a plus.",
        job_type: "Full Time"
      },
      {
        id: 35,
        companyName: "IBM",
        jobRole: "Blockchain Developer",
        postedDate: "26 March 2025, 15:30",
        closingDate: "22 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.5,
        description: "Develop blockchain-based applications using Hyperledger Fabric and smart contracts. Knowledge of cryptographic security principles is essential.",
        job_type: "Full Time"
      },
      {
        id: 36,
        companyName: "IBM",
        jobRole: "Data Scientist Intern",
        postedDate: "28 March 2025, 13:40",
        closingDate: "19 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.3,
        description: "Analyze big data to drive business insights using IBM Watson and Python. Experience with SQL and data visualization tools is preferred.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Adobe",
    jobs: [
      {
        id: 37,
        companyName: "Adobe",
        jobRole: "UI/UX Designer Intern",
        postedDate: "26 March 2025, 10:00",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "DESIGN"],
        minimum_cgpa: 7.5,
        description: "Work with the Adobe Creative Cloud team to design intuitive user experiences. Experience with Figma, Adobe XD, and Sketch is a plus.",
        job_type: "Part Time"
      },
      {
        id: 38,
        companyName: "Adobe",
        jobRole: "Software Engineer Intern",
        postedDate: "25 March 2025, 12:20",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.4,
        description: "Develop high-performance applications for Adobe Creative Suite using JavaScript, TypeScript, and React.",
        job_type: "Full Time"
      },
      {
        id: 39,
        companyName: "Adobe",
        jobRole: "AI Engineer",
        postedDate: "24 March 2025, 13:45",
        closingDate: "20 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.8,
        description: "Work on AI-powered image and video processing tools. Experience with TensorFlow, deep learning, and computer vision is required.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Oracle",
    jobs: [
      {
        id: 40,
        companyName: "Oracle",
        jobRole: "Database Administrator Intern",
        postedDate: "26 March 2025, 09:45",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.2,
        description: "Assist in managing large-scale databases using Oracle DBMS. Experience with SQL, PL/SQL, and performance tuning is preferred.",
        job_type: "Full Time"
      },
      {
        id: 41,
        companyName: "Oracle",
        jobRole: "Cloud Security Engineer",
        postedDate: "25 March 2025, 14:30",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "CYBER"],
        minimum_cgpa: 8.6,
        description: "Secure Oracle’s cloud services by implementing strong security protocols. Experience with encryption, IAM, and DevSecOps is recommended.",
        job_type: "Full Time"
      },
      {
        id: 42,
        companyName: "Oracle",
        jobRole: "Software Developer Intern",
        postedDate: "24 March 2025, 12:10",
        closingDate: "20 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.3,
        description: "Develop enterprise-grade software solutions for Oracle clients. Proficiency in Java, Spring Boot, and cloud-native architectures is a plus.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Tesla",
    jobs: [
      {
        id: 43,
        companyName: "Tesla",
        jobRole: "Autonomous Driving Engineer",
        postedDate: "26 March 2025, 10:30",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "MECH", "ECE"],
        minimum_cgpa: 8.7,
        description: "Develop AI-powered autonomous vehicle systems. Experience with computer vision, deep learning, and robotics is required.",
        job_type: "Full Time"
      },
      {
        id: 44,
        companyName: "Tesla",
        jobRole: "Battery Systems Engineer",
        postedDate: "25 March 2025, 12:50",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["MECH", "ECE", "CHEM"],
        minimum_cgpa: 8.5,
        description: "Optimize Tesla’s battery technology for improved performance and safety. Experience with lithium-ion chemistry and thermal modeling is a plus.",
        job_type: "Full Time"
      },
      {
        id: 45,
        companyName: "Tesla",
        jobRole: "Embedded Software Developer",
        postedDate: "24 March 2025, 13:20",
        closingDate: "20 April 2025, 23:59",
        eligible_departments: ["ECE", "CSE"],
        minimum_cgpa: 8.3,
        description: "Work on Tesla’s vehicle control systems. Proficiency in C++, RTOS, and microcontrollers is required.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Nvidia",
    jobs: [
      {
        id: 46,
        companyName: "Nvidia",
        jobRole: "GPU Software Engineer",
        postedDate: "27 March 2025, 11:15",
        closingDate: "17 April 2025, 23:59",
        eligible_departments: ["CSE", "ECE", "AI"],
        minimum_cgpa: 8.6,
        description: "Optimize and develop graphics rendering technologies using CUDA and OpenGL.",
        job_type: "Full Time"
      },
      {
        id: 47,
        companyName: "Nvidia",
        jobRole: "AI Research Intern",
        postedDate: "26 March 2025, 15:40",
        closingDate: "22 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.9,
        description: "Work on AI-driven graphics enhancements and deep learning models. Experience with TensorFlow and GANs is a plus.",
        job_type: "Full Time"
      },
      {
        id: 48,
        companyName: "Nvidia",
        jobRole: "Embedded Graphics Engineer",
        postedDate: "28 March 2025, 14:10",
        closingDate: "19 April 2025, 23:59",
        eligible_departments: ["ECE", "CSE"],
        minimum_cgpa: 8.4,
        description: "Enhance GPU performance in embedded systems. Knowledge of low-level programming and optimization techniques is required.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Samsung",
    jobs: [
      {
        id: 49,
        companyName: "Samsung",
        jobRole: "Android Developer Intern",
        postedDate: "26 March 2025, 09:40",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.3,
        description: "Work on Samsung’s Android-based applications and system software. Experience with Kotlin and Jetpack Compose is preferred.",
        job_type: "Full Time"
      },
      {
        id: 50,
        companyName: "Samsung",
        jobRole: "IoT Engineer",
        postedDate: "25 March 2025, 14:20",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["ECE", "CSE", "MECH"],
        minimum_cgpa: 8.2,
        description: "Develop IoT solutions for Samsung SmartThings platform. Experience with MQTT, embedded systems, and cloud integration is a plus.",
        job_type: "Full Time"
      },
      {
        id: 51,
        companyName: "Samsung",
        jobRole: "AI Camera Engineer",
        postedDate: "24 March 2025, 12:30",
        closingDate: "20 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "ECE"],
        minimum_cgpa: 8.7,
        description: "Develop AI-enhanced camera features for Samsung devices. Experience with computer vision, OpenCV, and neural networks is required.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Sony",
    jobs: [
      {
        id: 52,
        companyName: "Sony",
        jobRole: "Game Developer Intern",
        postedDate: "27 March 2025, 11:10",
        closingDate: "17 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "DESIGN"],
        minimum_cgpa: 8.3,
        description: "Develop immersive gaming experiences for PlayStation. Experience with Unity, Unreal Engine, and C# is preferred.",
        job_type: "Full Time"
      },
      {
        id: 53,
        companyName: "Sony",
        jobRole: "Audio Processing Engineer",
        postedDate: "26 March 2025, 15:50",
        closingDate: "22 April 2025, 23:59",
        eligible_departments: ["ECE", "AI"],
        minimum_cgpa: 8.5,
        description: "Work on AI-driven audio enhancements for Sony’s sound systems. Experience with DSP, Python, and MATLAB is a plus.",
        job_type: "Full Time"
      },
      {
        id: 54,
        companyName: "Sony",
        jobRole: "Cybersecurity Analyst",
        postedDate: "28 March 2025, 14:00",
        closingDate: "19 April 2025, 23:59",
        eligible_departments: ["CSE", "IT", "CYBER"],
        minimum_cgpa: 8.4,
        description: "Enhance Sony’s digital security infrastructure. Experience with penetration testing, threat analysis, and security frameworks is required.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "PayPal",
    jobs: [
      {
        id: 55,
        companyName: "PayPal",
        jobRole: "Payment Systems Engineer",
        postedDate: "26 March 2025, 10:20",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.6,
        description: "Develop secure and scalable payment processing systems. Experience with Java, Spring Boot, and cloud computing is preferred.",
        job_type: "Full Time"
      },
      {
        id: 56,
        companyName: "PayPal",
        jobRole: "Fraud Detection Analyst",
        postedDate: "25 March 2025, 13:40",
        closingDate: "18 April 2025, 23:59",
        eligible_departments: ["AI", "CSE", "DATA"],
        minimum_cgpa: 8.8,
        description: "Analyze transaction data to detect and prevent fraud. Proficiency in Python, machine learning, and anomaly detection is required.",
        job_type: "Full Time"
      }
    ]
  },
  {
    name: "Salesforce",
    jobs: [
      {
        id: 57,
        companyName: "Salesforce",
        jobRole: "CRM Software Developer",
        postedDate: "26 March 2025, 11:00",
        closingDate: "16 April 2025, 23:59",
        eligible_departments: ["CSE", "IT"],
        minimum_cgpa: 8.4,
        description: "Build custom Salesforce applications and integrations. Experience with Apex, Lightning, and REST APIs is preferred.",
        job_type: "Full Time"
      }
    ]
  }
];
// ABOVE IS the Job that we are going to Apply. 

export interface Problem {
  id: number;
  name: string;
  companys: string[];
  difficulty: string;
  tags: string[];
  postedDate: string;
  solution: string;
  platforms: {
    name: string;
    url: string;
  }[];
  youtubeLinks: {
    title: string;
    url: string;
  }[];
}


export const problem_based_on_company_new: Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    companys:   ["Google", "Amazon", "Meta", "Microsoft", "Apple", "Netflix", "Tesla", "IBM"],
    difficulty: "Easy",
    tags: ["Arrays", "Hash Table"],
    postedDate: "",
    solution: `
# 🧩 Two Sum  
**LeetCode #1**  
🔗 [Problem Link](https://leetcode.com/problems/two-sum/)

---

### ✅ Problem Summary
> Given an array of integers \`nums\` and an integer \`target\`, return *indices* of the two numbers such that they add up to \`target\`.

---

### 🧠 Approach
Use a **hash map** to store the difference (\`target - num\`) as key and its index as value.

---

### 💡 Key Insight
Instead of checking all pairs (O(n²)), keep track of what you *need* to reach the target as you iterate.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: nums = [2, 7, 11, 15], target = 9  
Output: [0, 1]  // because 2 + 7 = 9
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)
- **Space:** O(n)
    `,
    platforms: [
      { name: "LeetCode", url: "https://leetcode.com/problems/two-sum/" },
      { name: "HackerRank", url: "https://www.hackerrank.com/challenges/two-sum/" },
    ],
    youtubeLinks: [
      { title: "Two Sum - Optimal Solution", url: "https://www.youtube.com/watch?v=KLlXCFG5TnA" },
      { title: "Two Sum for Beginners", url: "https://www.youtube.com/watch?v=U8B984M1VcU" },
    ],
  },  

    {
      "id": 2,
      "companys":   ["IBM", "Oracle", "Adobe", "Nvidia", "Samsung", "Sony", "PayPal", "Salesforce"],
      "name": "Reverse Linked List",
      "difficulty": "Easy",
      "tags": ["Linked List", "Recursion"],
      postedDate: "",
      solution: `
# 🔁 Reverse Linked List  
**LeetCode #206**  
🔗 [Problem Link](https://leetcode.com/problems/reverse-linked-list/)

---

### ✅ Problem Summary
> Reverse a singly linked list. Return the reversed list’s head.

---

### 🧠 Approach
Use a **three-pointer technique**: \`prev\`, \`curr\`, and \`next\`.

---

### 💡 Key Insight
Reversal happens by rewiring the 
\`next\` pointer of each node to point to the previous node.

---

### 🧮 Code (TypeScript)

\`\`\`ts
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: 1 → 2 → 3 → 4 → 5 → null  
Output: 5 → 4 → 3 → 2 → 1 → null
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)
- **Space:** O(1)
`,
      "platforms": [
        { "name": "LeetCode", "url": "https://leetcode.com/problems/reverse-linked-list/" },
        { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/reverse-a-linked-list/" }
      ],
      "youtubeLinks": [
        { "title": "Reverse Linked List - Iterative & Recursive", "url": "https://www.youtube.com/watch?v=G0_I-ZF0S38" },
        { "title": "Reverse a Linked List Explained", "url": "https://www.youtube.com/watch?v=O0By4Zq0OFc" }
      ]
    },
    {
      "id": 3,
      "name": "Binary Search",
      "companys":   ["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Salesforce", "Tesla", "Samsung", "Sony"],
      "difficulty": "Easy",
      "tags": ["Binary Search", "Divide and Conquer"],
      postedDate: "",
      solution: `
# 🔍 Binary Search  
**LeetCode #704**  
🔗 [Problem Link](https://leetcode.com/problems/binary-search/)

---

### ✅ Problem Summary
> Given a sorted array of integers \`nums\` and a target value, return the index if the target is found. If not, return -1.

---

### 🧠 Approach
Use the classic **binary search** by narrowing down the range between \`left\` and \`right\` pointers.

---

### 💡 Key Insight
Binary search is efficient on **sorted** arrays, cutting the search space in half at each step.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: nums = [-1,0,3,5,9,12], target = 9  
Output: 4  // nums[4] = 9
\`\`\`

---

### ⏱ Complexity

- **Time:** O(log n)
- **Space:** O(1)

      `,
      "platforms": [
        { "name": "LeetCode", "url": "https://leetcode.com/problems/binary-search/" },
        { "name": "HackerRank", "url": "https://www.hackerrank.com/challenges/binary-search/" }
      ],
      "youtubeLinks": [
        { "title": "Binary Search Algorithm Explained", "url": "https://www.youtube.com/watch?v=KcT0HLmk5Zo" },
        { "title": "Binary Search in Depth", "url": "https://www.youtube.com/watch?v=GU7DpgHINWQ" }
      ]
    },
    {
      "id": 4,
      "name": "Merge Intervals",
      "companys":   ["Apple", "IBM", "Oracle", "Adobe", "Samsung", "Sony", "Nvidia", "Tesla", "Salesforce"],
      "difficulty": "Medium",
      "tags": ["Sorting", "Greedy", "Intervals"],
      postedDate: "",
      solution: `
# 🧩 Merge Intervals  
**LeetCode #56**  
🔗 [Problem Link](https://leetcode.com/problems/merge-intervals/)

---

### ✅ Problem Summary
> Given an array of intervals where \`intervals[i] = [start, end]\`, merge all overlapping intervals and return an array of the non-overlapping intervals.

---

### 🧠 Approach
1. **Sort** intervals by the start time.
2. Iterate and **merge overlapping** intervals into the last one in the result list.

---

### 💡 Key Insight
After sorting, only the current and previous intervals need to be compared for merging.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    const merged: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const last = merged[merged.length - 1];

        if (start <= last[1]) {
            last[1] = Math.max(last[1], end);
        } else {
            merged.push([start, end]);
        }
    }

    return merged;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: [[1,3],[2,6],[8,10],[15,18]]  
Output: [[1,6],[8,10],[15,18]]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n log n) — due to sorting  
- **Space:** O(n)
      `,
      "platforms": [
        { "name": "LeetCode", "url": "https://leetcode.com/problems/merge-intervals/" },
        { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/merging-intervals/" }
      ],
      "youtubeLinks": [
        { "title": "Merge Intervals - Optimal Approach", "url": "https://www.youtube.com/watch?v=2JzRBPFYbKE" },
        { "title": "Merging Intervals Made Easy", "url": "https://www.youtube.com/watch?v=44H3cEC2fFM" }
      ]
    },
    {
      "id": 5,
      "name": "Find Median from Data Stream",
      "companys":   ["Google", "Meta", "Netflix", "Tesla", "Nvidia", "PayPal", "Salesforce", "Amazon", "Microsoft"],
      "difficulty": "Hard",
      "tags": ["Heap", "Priority Queue", "Data Stream"],
      postedDate: "",
      solution: `
# 📊 Find Median from Data Stream  
**LeetCode #295**  
🔗 [Problem Link](https://leetcode.com/problems/find-median-from-data-stream/)

---

### ✅ Problem Summary
> Design a data structure that supports adding numbers and finding the median efficiently.

---

### 🧠 Approach
Use two heaps:
- A **max-heap** (\`left\`) for the lower half
- A **min-heap** (\`right\`) for the upper half

Balance them to maintain the median at the top.

---

### 💡 Key Insight
- Keep the sizes of the heaps either equal or left has one more.
- Median is the average of tops (if even) or top of max-heap (if odd).

---

### 🧮 Code (TypeScript)

\`\`\`ts
class MinHeap {
    private data: number[] = [];
    push(val: number) {
        this.data.push(val);
        this.data.sort((a, b) => a - b);
    }
    pop(): number | undefined {
        return this.data.shift();
    }
    peek(): number {
        return this.data[0];
    }
    size(): number {
        return this.data.length;
    }
}

class MaxHeap {
    private data: number[] = [];
    push(val: number) {
        this.data.push(val);
        this.data.sort((a, b) => b - a);
    }
    pop(): number | undefined {
        return this.data.shift();
    }
    peek(): number {
        return this.data[0];
    }
    size(): number {
        return this.data.length;
    }
}

class MedianFinder {
    private left = new MaxHeap();  // lower half
    private right = new MinHeap(); // upper half

    addNum(num: number): void {
        this.left.push(num);

        // balance to maintain ordering
        this.right.push(this.left.pop()!);

        if (this.right.size() > this.left.size()) {
            this.left.push(this.right.pop()!);
        }
    }

    findMedian(): number {
        if (this.left.size() > this.right.size()) {
            return this.left.peek();
        }
        return (this.left.peek() + this.right.peek()) / 2;
    }
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input:
addNum(1)
addNum(2)
findMedian() → 1.5
addNum(3)
findMedian() → 2
\`\`\`

---

### ⏱ Complexity

- **Time:** O(log n) for insertion, O(1) for median  
- **Space:** O(n)
      `,
      "platforms": [
        { "name": "LeetCode", "url": "https://leetcode.com/problems/find-median-from-data-stream/" },
        { "name": "HackerRank", "url": "https://www.hackerrank.com/challenges/find-the-median/" }
      ],
      "youtubeLinks": [
        { "title": "Median of Data Stream | Heap", "url": "https://www.youtube.com/watch?v=itmhHWaHupI" },
        { "title": "Efficient Median Finding Algorithm", "url": "https://www.youtube.com/watch?v=1LkOrc-Le-Y" }
      ]
    },
    {
      "id": 6,
      "name": "Word Ladder",
      "difficulty": "Hard",
      "tags": ["Graph", "BFS", "Queue"],
      "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Samsung", "Oracle", "Adobe", "Sony", "Nvidia"],
      postedDate: "",
      solution: `
# 🪜 Word Ladder  
**LeetCode #127**  
🔗 [Problem Link](https://leetcode.com/problems/word-ladder/)

---

### ✅ Problem Summary
> Given two words \`beginWord\` and \`endWord\`, and a word list, return the length of the shortest transformation sequence from \`beginWord\` to \`endWord\`, such that:
> - Only one letter can be changed at a time
> - Each transformed word must exist in the word list

---

### 🧠 Approach
Use **Breadth-First Search (BFS)** to explore all possible one-letter transformations level by level.

---

### 💡 Key Insight
Each word is a node in a graph, and edges exist between words differing by one letter. BFS guarantees the shortest path.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue: [string, number][] = [[beginWord, 1]];

    while (queue.length > 0) {
        const [word, length] = queue.shift()!;

        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5  
// "hit" → "hot" → "dot" → "dog" → "cog"
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n * 26 * m) where n = wordList size, m = word length  
- **Space:** O(n)

      `,
      "platforms": [
        { "name": "LeetCode", "url": "https://leetcode.com/problems/word-ladder/" },
        { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/word-ladder-length/" }
      ],
      "youtubeLinks": [
        { "title": "Word Ladder - BFS Approach", "url": "https://www.youtube.com/watch?v=M9cVl4d0v04" },
        { "title": "Word Ladder | Shortest Transformation Sequence", "url": "https://www.youtube.com/watch?v=ZVJ3asMoZ18" }
      ]
    },
      {
        "id": 7,
        "name": "Longest Substring Without Repeating Characters",
        "companys":   ["Google", "Apple", "Meta", "Tesla", "IBM", "Oracle", "Adobe", "Salesforce", "Samsung", "PayPal"],
        "difficulty": "Medium",
        "tags": ["Sliding Window", "Hash Table", "Two Pointers"],
        postedDate: "",
        solution: `
# 🔡 Longest Substring Without Repeating Characters  
**LeetCode #3**  
🔗 [Problem Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

---

### ✅ Problem Summary
> Given a string \`s\`, find the length of the longest substring without repeating characters.

---

### 🧠 Approach
Use the **sliding window** technique with a set to track seen characters as you expand and shrink the window.

---

### 💡 Key Insight
Move the \`left\` pointer forward only when duplicates are found, and update the max length along the way.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: "abcabcbb"  
Output: 3  // "abc"

Input: "bbbbb"  
Output: 1  // "b"

Input: "pwwkew"  
Output: 3  // "wke"
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(min(n, k)) where k is the charset size
        `,
        "platforms": [
          { "name": "LeetCode", "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
          { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/" }
        ],
        "youtubeLinks": [
          { "title": "Sliding Window Approach for Longest Substring", "url": "https://www.youtube.com/watch?v=wiGpQwVHdE0" },
          { "title": "Optimized Longest Substring Solution", "url": "https://www.youtube.com/watch?v=3IETreEybaA" }
        ]
      },
      {
        "id": 8,
        "name": "Kth Largest Element in an Array",
        "companys":   ["Microsoft", "Netflix", "Amazon", "Nvidia", "Samsung", "Sony", "PayPal", "Tesla"],
        "difficulty": "Medium",
        "tags": ["Heap", "Sorting", "Quickselect"],
        postedDate: "",
        solution: `
# 🔢 Kth Largest Element in an Array  
**LeetCode #215**  
🔗 [Problem Link](https://leetcode.com/problems/kth-largest-element-in-an-array/)

---

### ✅ Problem Summary
> Given an integer array \`nums\` and an integer \`k\`, return the \`k\`th largest element in the array.

---

### 🧠 Approach
Use a **min-heap of size k**. Keep only the k largest elements in the heap.

---

### 💡 Key Insight
A min-heap ensures the smallest of the k largest elements is on top. That top is the \`k\`th largest overall.

---

### 🧮 Code (TypeScript)

\`\`\`ts
class MinHeap {
    private heap: number[] = [];

    push(val: number) {
        this.heap.push(val);
        this.heap.sort((a, b) => a - b);
    }

    pop(): number | undefined {
        return this.heap.shift();
    }

    peek(): number {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }
}

function findKthLargest(nums: number[], k: number): number {
    const heap = new MinHeap();

    for (const num of nums) {
        heap.push(num);
        if (heap.size() > k) {
            heap.pop();
        }
    }

    return heap.peek();
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: nums = [3,2,1,5,6,4], k = 2  
Output: 5

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4  
Output: 4
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n log k)  
- **Space:** O(k)
        `,
        "platforms": [
          { "name": "LeetCode", "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
          { "name": "HackerRank", "url": "https://www.hackerrank.com/challenges/find-the-kth-largest-element/" }
        ],
        "youtubeLinks": [
          { "title": "Kth Largest Element Using Heap", "url": "https://www.youtube.com/watch?v=XEmy13g1Qxc" },
          { "title": "Quickselect Algorithm for Kth Largest", "url": "https://www.youtube.com/watch?v=FrWq2rznPLQ" }
        ]
      },
      {
        "id": 9,
        "name": "Minimum Window Substring",
        "difficulty": "Hard",
        "companys":   ["Google", "Amazon", "Meta", "Netflix", "Apple", "Salesforce", "Tesla", "IBM", "Adobe"],
        "tags": ["Sliding Window", "Hash Table", "Two Pointers"],
        postedDate: "",
        solution: `
# 🔍 Minimum Window Substring  
**LeetCode #76**  
🔗 [Problem Link](https://leetcode.com/problems/minimum-window-substring/)

---

### ✅ Problem Summary
> Given two strings \`s\` and \`t\`, return the minimum window in \`s\` which contains all characters of \`t\` (including duplicates). If no such window exists, return "".

---

### 🧠 Approach
Use a **sliding window** with character frequency maps. Expand right to include characters, and contract left to optimize the window.

---

### 💡 Key Insight
Track how many required characters are fully matched using a \`formed\` counter and match it against \`required\`.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function minWindow(s: string, t: string): string {
    if (s.length < t.length) return "";

    const tMap = new Map<string, number>();
    for (const c of t) {
        tMap.set(c, (tMap.get(c) || 0) + 1);
    }

    let left = 0, right = 0;
    let required = tMap.size;
    let formed = 0;

    const windowCounts = new Map<string, number>();
    let minLen = Infinity;
    let minWindow = [0, 0];

    while (right < s.length) {
        const c = s[right];
        windowCounts.set(c, (windowCounts.get(c) || 0) + 1);

        if (tMap.has(c) && windowCounts.get(c) === tMap.get(c)) {
            formed++;
        }

        while (formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minWindow = [left, right];
            }

            const charLeft = s[left];
            windowCounts.set(charLeft, windowCounts.get(charLeft)! - 1);
            if (tMap.has(charLeft) && windowCounts.get(charLeft)! < tMap.get(charLeft)!) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLen === Infinity ? "" : s.slice(minWindow[0], minWindow[1] + 1);
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: s = "ADOBECODEBANC", t = "ABC"  
Output: "BANC"

Input: s = "a", t = "a"  
Output: "a"

Input: s = "a", t = "aa"  
Output: ""
\`\`\`

---

### ⏱ Complexity

- **Time:** O(s + t)  
- **Space:** O(s + t)

        `,
        "platforms": [
          { "name": "LeetCode", "url": "https://leetcode.com/problems/minimum-window-substring/" },
          { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/minimum-window-substring/" }
        ],
        "youtubeLinks": [
          { "title": "Minimum Window Substring - Sliding Window", "url": "https://www.youtube.com/watch?v=jSto0O4AJbM" },
          { "title": "Optimal Solution for Minimum Window Substring", "url": "https://www.youtube.com/watch?v=eS6PZLjoaq8" }
        ]
      },
      {
        "id": 10,
        "name": "Trapping Rain Water",
        "companys":   ["Microsoft", "Oracle", "Adobe", "Nvidia", "Samsung", "Sony", "PayPal", "Tesla", "Meta"],
        "difficulty": "Hard",
        "tags": ["Two Pointers", "Stack", "Dynamic Programming"],
        postedDate: "",
        solution: `
# 🌧️ Trapping Rain Water  
**LeetCode #42**  
🔗 [Problem Link](https://leetcode.com/problems/trapping-rain-water/)

---

### ✅ Problem Summary
> Given \`n\\) non-negative integers representing elevation map where the width of each bar is 1, compute how much water it can trap after raining.

---

### 🧠 Approach
Use **two pointers** with left/right max tracking to calculate trapped water as we traverse inward.

---

### 💡 Key Insight
At any point, the water trapped depends on the **min of leftMax and rightMax**, minus the current height.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function trap(height: number[]): number {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: [0,1,0,2,1,0,1,3,2,1,2,1]  
Output: 6
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(1)
        `,
        "platforms": [
          { "name": "LeetCode", "url": "https://leetcode.com/problems/trapping-rain-water/" },
          { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/trapping-rain-water/" }
        ],
        "youtubeLinks": [
          { "title": "Trapping Rain Water - Explained", "url": "https://www.youtube.com/watch?v=ZI2z5pq0TqA" },
          { "title": "Trapping Rain Water - Efficient Approach", "url": "https://www.youtube.com/watch?v=EdR3V3UHUZ4" }
        ]
      },
      {
        "id": 11,
        "name": "LRU Cache",
        "companys":   ["Google", "Meta", "Netflix", "Tesla", "Nvidia", "Apple", "Adobe", "Salesforce", "Amazon"],
        "difficulty": "Medium",
        "tags": ["Linked List", "Hash Table", "Design"],
        postedDate: "",
        solution: `
# 🧠 LRU Cache  
**LeetCode #146**  
🔗 [Problem Link](https://leetcode.com/problems/lru-cache/)

---

### 🧠 Approach
Use a **Map** + ordering strategy or built-in **OrderedDict** (in Python). In TypeScript, we simulate it using \`Map\`.

---

### 🧮 Code (TypeScript)

\`\`\`ts
class LRUCache {
    private cache = new Map<number, number>();

    constructor(private capacity: number) {}

    get(key: number): number {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}
\`\`\`

        `,
        "platforms": [
          { "name": "LeetCode", "url": "https://leetcode.com/problems/lru-cache/" },
          { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/lru-cache-implementation/" }
        ],
        "youtubeLinks": [
          { "title": "LRU Cache Design | HashMap + Doubly Linked List", "url": "https://www.youtube.com/watch?v=7ABFKPK2hD4" },
          { "title": "How to Implement LRU Cache", "url": "https://www.youtube.com/watch?v=xDEuM5qa0zg" }
        ]
      },
        {
          "id": 12,
          "name": "Subset Sum",
          "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Oracle"],
          "difficulty": "Medium",
          "tags": ["Dynamic Programming", "Backtracking"],
          postedDate: "",
          solution: `
# 🧩 Subset Sum  
**LeetCode #416**  
🔗 [Problem Link](https://leetcode.com/problems/partition-equal-subset-sum/)

---

### 🧠 Approach
Classic **0/1 Knapsack DP**: Can we form subset with sum = total/2?

---

### 🧮 Code (TypeScript)

\`\`\`ts
function canPartition(nums: number[]): boolean {
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;
    const target = total / 2;

    const dp = new Set<number>();
    dp.add(0);

    for (const num of nums) {
        const nextDP = new Set(dp);
        for (const t of dp) {
            nextDP.add(t + num);
        }
        dp.clear();
        for (const val of nextDP) dp.add(val);
    }

    return dp.has(target);
}
          `,
          "platforms": [
            { "name": "LeetCode", "url": "https://leetcode.com/problems/subsets/" },
            { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/subset-sum-problem-dp-25/" }
          ],
          "youtubeLinks": [
            { "title": "Subset Sum Problem - DP Approach", "url": "https://www.youtube.com/watch?v=s6FhG--P7z0" },
            { "title": "Subset Sum Explained", "url": "https://www.youtube.com/watch?v=34l1kTIQCIA" }
          ]
        },
        {
          "id": 13,
          "name": "Coin Change",
          "companys":   ["Google", "Amazon", "Meta", "Netflix", "Tesla", "IBM", "Oracle", "Adobe", "Samsung", "Sony"],
          "difficulty": "Medium",
          "tags": ["Dynamic Programming", "Greedy"],
          postedDate: "",
          solution: `
# 🪙 Coin Change  
**LeetCode #322**  
🔗 [Problem Link](https://leetcode.com/problems/coin-change/)

---

### 🧠 Approach
Use bottom-up **DP** to find min number of coins to make up each amount.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function coinChange(coins: number[], amount: number): number {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (const coin of coins) {
        for (let a = coin; a <= amount; a++) {
            dp[a] = Math.min(dp[a], dp[a - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}


          `,
          "platforms": [
            { "name": "LeetCode", "url": "https://leetcode.com/problems/coin-change/" },
            { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/coin-change-dp-7/" }
          ],
          "youtubeLinks": [
            { "title": "Coin Change | DP Approach", "url": "https://www.youtube.com/watch?v=H9bfqozjoqs" },
            { "title": "Coin Change - Recursive vs DP", "url": "https://www.youtube.com/watch?v=Y0ZqKpToTic" }
          ]
        },
        {
          "id": 14,
          "name": "Maximum Subarray",
          "companys":   ["Microsoft", "Apple", "Netflix", "Salesforce", "PayPal", "Sony", "Tesla", "Nvidia", "Samsung", "IBM"],
          "difficulty": "Medium",
          "tags": ["Dynamic Programming", "Kadane’s Algorithm"],
          postedDate: "",
          solution: `
# ➕ Maximum Subarray  
**LeetCode #53**  
🔗 [Problem Link](https://leetcode.com/problems/maximum-subarray/)

---

### ✅ Problem Summary
> Given an integer array \`nums\`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

---

### 🧠 Approach
Use **Kadane's Algorithm** — track current sum and global max as you iterate.

---

### 💡 Key Insight
If current sum becomes negative, restart from next element.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function maxSubArray(nums: number[]): number {
    let currSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: [-2,1,-3,4,-1,2,1,-5,4]  
Output: 6  // [4,-1,2,1]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(1)
          `,
          "platforms": [
            { "name": "LeetCode", "url": "https://leetcode.com/problems/maximum-subarray/" },
            { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/" }
          ],
          "youtubeLinks": [
            { "title": "Kadane's Algorithm for Maximum Subarray", "url": "https://www.youtube.com/watch?v=86CQq3pKSUw" },
            { "title": "Max Subarray Sum | DP", "url": "https://www.youtube.com/watch?v=2MmGzdiKR9Y" }
          ]
        },
        {
          "id": 15,
          "name": "Graph Valid Tree",
          "companys":   ["Google", "Meta", "Amazon", "Nvidia", "Apple", "IBM", "Oracle", "Adobe", "Tesla", "Sony"],
          "difficulty": "Medium",
          "tags": ["Graph", "DFS", "Union-Find"],
          postedDate: "",
          solution: `
# 🌳 Graph Valid Tree  
**LeetCode #261**  
🔗 [Problem Link](https://leetcode.com/problems/graph-valid-tree/)

---

### ✅ Problem Summary
> Given \`n\` nodes labeled from 0 to n - 1 and a list of \`edges\`, determine if the graph is a valid **tree**.

---

### 🧠 Approach
A graph is a tree **iff**:
1. It has **n - 1 edges**
2. It is **fully connected**

Use **DFS or Union-Find** to check for cycles and connectivity.

---

### 💡 Key Insight
If we connect all nodes without cycles and end up with exactly one component → it's a tree.

---

### 🧮 Code (TypeScript using DFS)

\`\`\`ts
function validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) return false;

    const adj: Map<number, number[]> = new Map();
    for (let i = 0; i < n; i++) adj.set(i, []);
    for (const [u, v] of edges) {
        adj.get(u)!.push(v);
        adj.get(v)!.push(u);
    }

    const visited = new Set<number>();

    const dfs = (node: number, parent: number): boolean => {
        if (visited.has(node)) return false;
        visited.add(node);

        for (const neighbor of adj.get(node)!) {
            if (neighbor === parent) continue;
            if (!dfs(neighbor, node)) return false;
        }

        return true;
    };

    return dfs(0, -1) && visited.size === n;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]  
Output: true

Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]  
Output: false // has cycle
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(n)
          `,
          "platforms": [
            { "name": "LeetCode", "url": "https://leetcode.com/problems/graph-valid-tree/" },
            { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/check-given-graph-tree/" }
          ],
          "youtubeLinks": [
            { "title": "Graph Valid Tree | Union-Find", "url": "https://www.youtube.com/watch?v=bXsUuownnoQ" },
            { "title": "Check if Graph is a Tree", "url": "https://www.youtube.com/watch?v=FafO7ihQHuA" }
          ]
        },
        {
          "id": 16,
          "name": "Serialize and Deserialize Binary Tree",
          "companys":   ["Microsoft", "Netflix", "Samsung", "Sony", "Salesforce", "PayPal", "Apple", "Amazon", "Tesla"],
          "difficulty": "Hard",
          "tags": ["Tree", "BFS", "Design"],
          postedDate: "",
          solution: `
# 🌲 Serialize and Deserialize Binary Tree  
**LeetCode #297**  
🔗 [Problem Link](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

---

### ✅ Problem Summary
> Design an algorithm to serialize and deserialize a binary tree. Serialization converts a tree to a string, and deserialization converts it back to the same tree.

---

### 🧠 Approach
Use **BFS (Level Order Traversal)** to serialize and deserialize.

---

### 💡 Key Insight
Represent null nodes as \`"null"\`. During deserialization, use a queue to rebuild the tree level by level.

---

### 🧮 Code (TypeScript)

\`\`\`ts
class TreeNode {
    val: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    constructor(val: number) {
        this.val = val;
    }
}

class Codec {
    serialize(root: TreeNode | null): string {
        if (!root) return "[]";
        const queue: (TreeNode | null)[] = [root];
        const result: string[] = [];

        while (queue.length) {
            const node = queue.shift();
            if (node) {
                result.push(node.val.toString());
                queue.push(node.left);
                queue.push(node.right);
            } else {
                result.push("null");
            }
        }

        // Remove trailing nulls
        while (result[result.length - 1] === "null") result.pop();

        return "[" + result.join(",") + "]";
    }

    deserialize(data: string): TreeNode | null {
        if (data === "[]") return null;
        const nodes = data.slice(1, -1).split(",");
        const root = new TreeNode(Number(nodes[0]));
        const queue: TreeNode[] = [root];
        let i = 1;

        while (queue.length && i < nodes.length) {
            const curr = queue.shift()!;
            const leftVal = nodes[i++];
            if (leftVal !== "null") {
                curr.left = new TreeNode(Number(leftVal));
                queue.push(curr.left);
            }
            if (i < nodes.length) {
                const rightVal = nodes[i++];
                if (rightVal !== "null") {
                    curr.right = new TreeNode(Number(rightVal));
                    queue.push(curr.right);
                }
            }
        }

        return root;
    }
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input Tree:     1
              /   \\
             2     3
                  / \\
                 4   5

Serialized: "[1,2,3,null,null,4,5]"
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(n)
          `,
          "platforms": [
            { "name": "LeetCode", "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
            { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/" }
          ],
          "youtubeLinks": [
            { "title": "Serialize & Deserialize Binary Tree | BFS", "url": "https://www.youtube.com/watch?v=suj1ro8TIVY" },
            { "title": "Binary Tree Serialization Explained", "url": "https://www.youtube.com/watch?v=-YbXySKJsX8" }
          ]
        },
        {
          "id": 17,
          "name": "Word Break",
          "companys":   ["Google", "Meta", "Netflix", "Tesla", "Nvidia", "IBM", "Samsung", "Oracle", "Adobe", "PayPal"],
          "difficulty": "Medium",
          "tags": ["Dynamic Programming", "Trie"],
          postedDate: "",
          solution: `
# 🧱 Word Break  
**LeetCode #139**  
🔗 [Problem Link](https://leetcode.com/problems/word-break/)

---

### ✅ Problem Summary
> Given a string \`s\` and a dictionary of strings \`wordDict\`, return true if \`s\` can be segmented into space-separated sequence of one or more dictionary words.

---

### 🧠 Approach
Use **Dynamic Programming** to check if prefixes of the string can be broken using the dictionary.

---

### 💡 Key Insight
Let \`dp[i]\` be true if \`s[0...i)\` can be segmented. For every \`j < i\`, check if \`dp[j]\` is true and \`s[j...i]\` is in \`wordDict\`.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function wordBreak(s: string, wordDict: string[]): boolean {
    const wordSet = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: s = "leetcode", wordDict = ["leet", "code"]  
Output: true

Input: s = "applepenapple", wordDict = ["apple", "pen"]  
Output: true

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]  
Output: false
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n²)  
- **Space:** O(n)
          `,
          "platforms": [
            { "name": "LeetCode", "url": "https://leetcode.com/problems/word-break/" },
            { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/word-break-problem-dp-32/" }
          ],
          "youtubeLinks": [
            { "title": "Word Break | DP Solution", "url": "https://www.youtube.com/watch?v=th4OnoGasMU" },
            { "title": "Word Break | Trie Implementation", "url": "https://www.youtube.com/watch?v=LR2qMLTvuJw" }
          ]
        },
        {
          "id": 18,
          "name": "Lowest Common Ancestor of a Binary Tree",
          "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Samsung"],
          "difficulty": "Medium",
          "tags": ["Tree", "Recursion", "DFS"],
          postedDate: "",
          solution: `
# 🌳 Lowest Common Ancestor of a Binary Tree  
**LeetCode #236**  
🔗 [Problem Link](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

---

### ✅ Problem Summary
> Given a binary tree, find the lowest common ancestor (LCA) of two given nodes \`p\` and \`q\`.

---

### 🧠 Approach
Use **DFS** to recursively search for \`p\` and \`q\`.  
- If current node is \`null\`, return \`null\`.  
- If it matches either \`p\` or \`q\`, return that node.  
- Recursively search left and right.  
- If both sides return non-null, current node is the LCA.

---

### 💡 Key Insight
The first node where both left and right subtrees contain one of the target nodes is the LCA.

---

### 🧮 Code (TypeScript)

\`\`\`ts
class TreeNode {
    val: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    constructor(val: number) {
        this.val = val;
    }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;
    return left || right;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1  
Output: 3

Input: p = 5, q = 4  
Output: 5
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(h) — where \`h\` is tree height
          `,
          "platforms": [
            { "name": "LeetCode", "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
            { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/" }
          ],
          "youtubeLinks": [
            { "title": "Lowest Common Ancestor | Tree", "url": "https://www.youtube.com/watch?v=13m9ZCB8gjw" },
            { "title": "LCA in Binary Tree Explained", "url": "https://www.youtube.com/watch?v=KobQcxdaZKY" }
          ]
        },
        {
          "id": 19,
          "name": "3Sum",
          "companys":   ["Google", "Amazon", "Meta", "Netflix", "Tesla", "Apple", "IBM", "Adobe", "Salesforce", "Nvidia", "Samsung"],
          "difficulty": "Medium",
          "tags": ["Two Pointers", "Sorting"],
          postedDate: "",
          solution: `
# ➕➖ 3Sum  
**LeetCode #15**  
🔗 [Problem Link](https://leetcode.com/problems/3sum/)

---

### ✅ Problem Summary
> Given an integer array \`nums\`, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i ≠ j ≠ k\`, and their sum is 0.

---

### 🧠 Approach
1. **Sort** the array.  
2. Fix one number, then use **two-pointer** approach for the other two.  
3. Skip duplicates to avoid repeating triplets.

---

### 💡 Key Insight
Sorting enables us to use two pointers efficiently and skip duplicates cleanly.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: [-1,0,1,2,-1,-4]  
Output: [[-1,-1,2], [-1,0,1]]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n²)  
- **Space:** O(1) (excluding output)
          `,
          "platforms": [
            { "name": "LeetCode", "url": "https://leetcode.com/problems/3sum/" },
            { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/" }
          ],
          "youtubeLinks": [
            { "title": "3Sum Problem - Optimal Approach", "url": "https://www.youtube.com/watch?v=jzZsG8n2R9A" },
            { "title": "3Sum Solution | Sorting + Two Pointers", "url": "https://www.youtube.com/watch?v=onLoX6Nhvmg" }
          ]
        },
        {
          "id": 20,
          "name": "Find the Duplicate Number",
          "companys":   ["Microsoft", "Oracle", "Adobe", "Nvidia", "Samsung", "Sony", "Salesforce", "PayPal", "Tesla", "Netflix", "Meta"],
          "difficulty": "Medium",
          "tags": ["Two Pointers", "Binary Search", "Cycle Detection"],
          postedDate: "",
          solution: `
# 🔁 Find the Duplicate Number  
**LeetCode #287**  
🔗 [Problem Link](https://leetcode.com/problems/find-the-duplicate-number/)

---

### ✅ Problem Summary
> Given an array \`nums\` of \`n + 1\` integers where each integer is in the range \`[1, n]\`, return the duplicate number.  
**You must not** modify the array, and must use **O(1) space** and **< O(n²)** time.

---

### 🧠 Approach
Use **Floyd's Tortoise and Hare (Cycle Detection)** algorithm.  
Think of the array as a **linked list** where index → next number.

---

### 💡 Key Insight
Duplicate causes a cycle in the "pointer chain".

---

### 🧮 Code (TypeScript)

\`\`\`ts
function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[0];

    // Detect cycle
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Find entrance to cycle
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: [1,3,4,2,2]  
Output: 2

Input: [3,1,3,4,2]  
Output: 3
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(1)
          `,
          "platforms": [
            { "name": "LeetCode", "url": "https://leetcode.com/problems/find-the-duplicate-number/" },
            { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/find-duplicate-element-limited-range-array/" }
          ],
          "youtubeLinks": [
            { "title": "Find Duplicate Number | Floyd’s Algorithm", "url": "https://www.youtube.com/watch?v=wjYnzkAhcNk" },
            { "title": "Find Duplicates in Array | Optimal", "url": "https://www.youtube.com/watch?v=C8XHk3c3hds" }
          ]
        },
        {
          "id": 21,
          "name": "Palindrome Partitioning",
          "companys":   ["Google", "Meta", "Amazon", "Netflix", "Tesla", "Nvidia", "Apple", "IBM", "Oracle", "Adobe", "Salesforce", "Sony"],
          "difficulty": "Hard",
          "tags": ["Backtracking", "Dynamic Programming"],
          postedDate: "",
          solution: `
# 🔪 Palindrome Partitioning  
**LeetCode #131**  
🔗 [Problem Link](https://leetcode.com/problems/palindrome-partitioning/)

---

### ✅ Problem Summary
> Given a string \`s\`, partition \`s\` such that every substring of the partition is a **palindrome**. Return all possible palindrome partitioning of \`s\`.

---

### 🧠 Approach
Use **backtracking**:
- Try every prefix that's a palindrome.
- Recurse on the remainder.
- Backtrack to explore all options.

---

### 💡 Key Insight
Check palindrome on the fly using two pointers, or precompute with DP for optimization.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function partition(s: string): string[][] {
    const res: string[][] = [];

    const isPalindrome = (str: string, l: number, r: number): boolean => {
        while (l < r) {
            if (str[l++] !== str[r--]) return false;
        }
        return true;
    };

    const backtrack = (start: number, path: string[]) => {
        if (start === s.length) {
            res.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                path.push(s.substring(start, end + 1));
                backtrack(end + 1, path);
                path.pop();
            }
        }
    };

    backtrack(0, []);
    return res;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: "aab"  
Output: [["a","a","b"],["aa","b"]]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(2ⁿ \\* n)  
- **Space:** O(n) (for recursion stack)

          `,
          "platforms": [
            { "name": "LeetCode", "url": "https://leetcode.com/problems/palindrome-partitioning/" },
            { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/palindrome-partitioning-dp-17/" }
          ],
          "youtubeLinks": [
            { "title": "Palindrome Partitioning - Backtracking", "url": "https://www.youtube.com/watch?v=lDYIvtBVmgo" },
            { "title": "DP Solution for Palindrome Partitioning", "url": "https://www.youtube.com/watch?v=hbTaCmQGqLg" }
          ]
        },
          {
            "id": 22,
            "name": "Merge k Sorted Lists",
            "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Samsung", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Meta", "Google"],
            "difficulty": "Hard",
            "tags": ["Heap", "Linked List", "Divide and Conquer"],
            postedDate: "",
            solution: `
# 🧩 Merge k Sorted Lists  
**LeetCode #23**  
🔗 [Problem Link](https://leetcode.com/problems/merge-k-sorted-lists/)

---

### ✅ Problem Summary
> You are given an array of \`k\` linked-lists, each linked-list is sorted. Merge all the linked-lists into one sorted linked-list and return it.

---

### 🧠 Approach
Use a **Min Heap (Priority Queue)** to always get the smallest node among all the heads.

---

### 💡 Key Insight
Heap allows us to efficiently retrieve the next smallest element across k lists.

---

### 🧮 Code (TypeScript)

\`\`\`ts
class ListNode {
    val: number;
    next: ListNode | null = null;
    constructor(val: number, next?: ListNode | null) {
        this.val = val;
        this.next = next ?? null;
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap: ListNode[] = [];

    const push = (node: ListNode | null) => {
        if (node) {
            heap.push(node);
            heap.sort((a, b) => a.val - b.val); // simple sort as priority queue
        }
    };

    for (const node of lists) push(node);

    const dummy = new ListNode(0);
    let curr = dummy;

    while (heap.length > 0) {
        const node = heap.shift()!;
        curr.next = node;
        curr = curr.next;
        push(node.next);
    }

    return dummy.next;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: [[1,4,5],[1,3,4],[2,6]]  
Output: [1,1,2,3,4,4,5,6]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(N log k) — N = total nodes, k = number of lists  
- **Space:** O(k) — for the heap
            `,
            "platforms": [
              { "name": "LeetCode", "url": "https://leetcode.com/problems/merge-k-sorted-lists/" },
              { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/" }
            ],
            "youtubeLinks": [
              { "title": "Merge k Sorted Lists | Heap", "url": "https://www.youtube.com/watch?v=ptYUCjfNhJY" },
              { "title": "Efficient Merge k Sorted Lists", "url": "https://www.youtube.com/watch?v=ryx3MhP-2nM" }
            ]
          },
          {
            "id": 23,
            "name": "Count Inversions",
            "companys":   ["Google", "Meta", "Netflix", "Tesla", "Nvidia", "Samsung", "IBM", "Oracle", "Adobe", "PayPal", "Amazon"],
            "difficulty": "Hard",
            "tags": ["Divide and Conquer", "Sorting"],
            postedDate: "",
            solution: `
# 🔄 Count Inversions  
**Classic Problem**  
📌 Not on LeetCode but often asked in interviews.

---

### ✅ Problem Summary
> Given an array of integers, count the number of **inversions** — pairs \`(i, j)\` such that \`i < j\` and \`arr[i] > arr[j]\`.

---

### 🧠 Approach
Use a **modified Merge Sort** to count inversions during the merge step.

---

### 💡 Key Insight
If \`left[i] > right[j]\`, all remaining elements in \`left\` (from i onwards) form an inversion with \`right[j]\`.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function countInversions(arr: number[]): number {
    let count = 0;

    const mergeSort = (nums: number[]): number[] => {
        if (nums.length <= 1) return nums;

        const mid = Math.floor(nums.length / 2);
        const left = mergeSort(nums.slice(0, mid));
        const right = mergeSort(nums.slice(mid));
        return merge(left, right);
    };

    const merge = (left: number[], right: number[]): number[] => {
        const merged: number[] = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                merged.push(left[i++]);
            } else {
                merged.push(right[j++]);
                count += left.length - i; // All remaining elements in left are > right[j]
            }
        }

        return [...merged, ...left.slice(i), ...right.slice(j)];
    };

    mergeSort(arr);
    return count;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: [2, 4, 1, 3, 5]  
Output: 3  
// Inversions: (2,1), (4,1), (4,3)
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n log n)  
- **Space:** O(n)
            `,
            "platforms": [
              { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/counting-inversions/" }
            ],
            "youtubeLinks": [
              { "title": "Count Inversions Using Merge Sort", "url": "https://www.youtube.com/watch?v=kQ1mJlwW-c0" },
              { "title": "Count Inversions Explained", "url": "https://www.youtube.com/watch?v=0ZrUVvcc1Vg" }
            ]
          },
          {
            "id": 24,
            "name": "Rotten Oranges",
            "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia"],
            "difficulty": "Medium",
            "tags": ["Graph", "BFS", "Matrix"],
            postedDate: "",
            solution: `
# 🍊 Rotten Oranges  
**LeetCode #994**  
🔗 [Problem Link](https://leetcode.com/problems/rotting-oranges/)

---

### ✅ Problem Summary
> Given a 2D grid, each cell can be:  
> - \`0\`: empty  
> - \`1\`: fresh orange  
> - \`2\`: rotten orange  
> Each minute, fresh oranges next to rotten ones become rotten.  
> Return the minimum minutes until no fresh orange remains, or \`-1\` if impossible.

---

### 🧠 Approach
Use **Breadth-First Search (BFS)** from all initial rotten oranges (multi-source BFS).

---

### 💡 Key Insight
Track fresh orange count and perform BFS level-by-level to simulate time passing.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function orangesRotting(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue: [number, number][] = [];
    let fresh = 0;

    // Initialize queue with rotten oranges and count fresh ones
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) queue.push([r, c]);
            if (grid[r][c] === 1) fresh++;
        }
    }

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    let minutes = 0;

    while (queue.length && fresh > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift()!;
            for (const [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;
                if (
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2;
                    queue.push([nr, nc]);
                    fresh--;
                }
            }
        }

        minutes++;
    }

    return fresh === 0 ? minutes : -1;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: [[2,1,1],[1,1,0],[0,1,1]]  
Output: 4
\`\`\`

---

### ⏱ Complexity

- **Time:** O(m × n)  
- **Space:** O(m × n)
            `,
            "platforms": [
              { "name": "LeetCode", "url": "https://leetcode.com/problems/rotting-oranges/" },
              { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/minimum-time-required-so-that-all-oranges-become-rotten/" }
            ],
            "youtubeLinks": [
              { "title": "Rotten Oranges - BFS Approach", "url": "https://www.youtube.com/watch?v=yf3oUhkvqA0" },
              { "title": "Rotten Oranges Problem Explained", "url": "https://www.youtube.com/watch?v=pUAPcVlHLKA" }
            ]
          },
          {
            "id": 25,
            "name": "Kruskal's Algorithm",
            "companys":   ["Google", "Amazon", "Meta", "Netflix", "Tesla", "Apple", "IBM", "Adobe", "Salesforce", "Nvidia", "Samsung", "Sony"],
            "difficulty": "Medium",
            "tags": ["Graph", "Greedy", "Minimum Spanning Tree"],
            postedDate: "",
            solution: `
# 🏗️ Kruskal's Algorithm – Minimum Spanning Tree (MST)  
**Graph Algorithm – Greedy Approach**

---

### ✅ Problem Summary
> Given a connected, undirected and weighted graph, find a **Minimum Spanning Tree (MST)** with the minimum total edge weight using **Kruskal's Algorithm**.

---

### 🧠 Approach
1. Sort all edges by weight.  
2. Use **Disjoint Set Union (DSU)** to avoid cycles.  
3. Add smallest edge that doesn’t form a cycle, until you have \`V - 1\` edges.

---

### 💡 Key Insight
Kruskal is **edge-based** and ensures MST by picking globally minimal edges without forming cycles.

---

### 🧮 Code (TypeScript)

\`\`\`ts
type Edge = [number, number, number]; // [u, v, weight]

class UnionFind {
    parent: number[];
    rank: number[];

    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) return false;

        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        return true;
    }
}

function kruskalMST(n: number, edges: Edge[]): number {
    edges.sort((a, b) => a[2] - b[2]); // Sort by weight
    const uf = new UnionFind(n);
    let mstWeight = 0;
    let count = 0;

    for (const [u, v, weight] of edges) {
        if (uf.union(u, v)) {
            mstWeight += weight;
            count++;
            if (count === n - 1) break;
        }
    }

    return count === n - 1 ? mstWeight : -1; // -1 if MST not possible
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: n = 4, edges = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4]
]

Output: 19
Explanation: MST edges → (2-3), (0-3), (0-1)
\`\`\`

---

### ⏱ Complexity

- **Time:** O(E log E) — sorting edges  
- **Space:** O(V) — DSU structures
            `,
            "platforms": [
              { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/kruskals-algorithm-simple-implementation-for-adjacency-matrix/" }
            ],
            "youtubeLinks": [
              { "title": "Kruskal's Algorithm Explained", "url": "https://www.youtube.com/watch?v=0ZJgIjIuY4Y" },
              { "title": "Minimum Spanning Tree using Kruskal", "url": "https://www.youtube.com/watch?v=I6NnXFnKgS8" }
            ]
          },
          {
            "id": 26,
            "name": "Dijkstra’s Algorithm",
            "companys":   ["Microsoft", "Oracle", "Adobe", "Nvidia", "Samsung", "Sony", "Salesforce", "PayPal", "Tesla", "Netflix", "Meta", "Google"],
            "difficulty": "Medium",
            "tags": ["Graph", "Greedy", "Shortest Path"],
            postedDate: "",
            solution: `
# 🛣️ Dijkstra’s Algorithm – Shortest Path  
**Graph Algorithm – Greedy Approach**  
🔗 Common in weighted graphs with **non-negative** edge weights.

---

### ✅ Problem Summary
> Given a graph and a source node, find the **shortest path** from the source to all other nodes using **Dijkstra’s Algorithm**.

---

### 🧠 Approach
Use a **Min Heap (Priority Queue)** to always process the nearest unvisited node first.

---

### 💡 Key Insight
Only update a node’s distance if the new path is shorter. Greedy ensures we always finalize the shortest path correctly.

---

### 🧮 Code (TypeScript)

\`\`\`ts
type Edge = [number, number]; // [neighbor, weight]

function dijkstra(n: number, adj: Edge[][], start: number): number[] {
    const dist = new Array(n).fill(Infinity);
    dist[start] = 0;

    const minHeap: [number, number][] = [[0, start]]; // [distance, node]

    while (minHeap.length > 0) {
        minHeap.sort((a, b) => a[0] - b[0]);
        const [d, node] = minHeap.shift()!;

        if (d > dist[node]) continue;

        for (const [neighbor, weight] of adj[node]) {
            const newDist = d + weight;
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                minHeap.push([newDist, neighbor]);
            }
        }
    }

    return dist;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input:  
n = 5, start = 0  
adj = [
  [[1, 2], [2, 4]],   // 0 → 1 (2), 2 (4)
  [[2, 1], [3, 7]],   // 1 → 2 (1), 3 (7)
  [[4, 3]],           // 2 → 4 (3)
  [[4, 1]],           // 3 → 4 (1)
  []                  // 4 → []
]

Output: [0, 2, 3, 9, 6]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(E log V) with a priority queue  
- **Space:** O(V)
            `,
            "platforms": [
              { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-using-priority_queue-stl/" }
            ],
            "youtubeLinks": [
              { "title": "Dijkstra’s Algorithm | Priority Queue", "url": "https://www.youtube.com/watch?v=XB4MIexjvY0" },
              { "title": "Shortest Path using Dijkstra", "url": "https://www.youtube.com/watch?v=FSm1zwzuKXo" }
            ]
          },
          {
            "id": 27,
            "name": "Topological Sorting",
            "companys":   ["Google", "Meta", "Amazon", "Netflix", "Tesla", "Nvidia", "Apple", "IBM", "Oracle", "Adobe", "Salesforce", "Sony", "Samsung"],
            "difficulty": "Medium",
            "tags": ["Graph", "DFS", "Sorting"],
            postedDate: "",
            solution: `
# 📚 Topological Sorting – DAG Order  
**Graph Algorithm – DFS or Kahn's Algorithm**  
🔗 Only works on **Directed Acyclic Graphs (DAGs)**

---

### ✅ Problem Summary
> Given a DAG, return a valid topological ordering of its nodes — where for every edge \`u → v\`, \`u\` comes before \`v\` in the ordering.

---

### 🧠 Approach
Use **Kahn’s Algorithm (BFS-based)**:
1. Count indegrees of all nodes.  
2. Add all nodes with indegree 0 to a queue.  
3. Process the queue: reduce indegrees of neighbors, and enqueue if they hit 0.

---

### 💡 Key Insight
Kahn's ensures nodes are placed after all their prerequisites.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function topologicalSort(n: number, edges: number[][]): number[] {
    const adj: number[][] = Array.from({ length: n }, () => []);
    const indegree = new Array(n).fill(0);

    for (const [u, v] of edges) {
        adj[u].push(v);
        indegree[v]++;
    }

    const queue: number[] = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    const result: number[] = [];

    while (queue.length > 0) {
        const node = queue.shift()!;
        result.push(node);

        for (const neighbor of adj[node]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return result.length === n ? result : []; // Return [] if cycle exists
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input:
n = 6  
edges = [
  [5, 2], [5, 0], [4, 0], [4, 1], [2, 3], [3, 1]
]

Output: [4, 5, 2, 3, 1, 0] // One valid ordering
\`\`\`

---

### ⏱ Complexity

- **Time:** O(V + E)  
- **Space:** O(V + E)
            `,
            "platforms": [
              { "name": "LeetCode", "url": "https://leetcode.com/problems/course-schedule/" },
              { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/topological-sorting/" }
            ],
            "youtubeLinks": [
              { "title": "Topological Sorting | DFS", "url": "https://www.youtube.com/watch?v=ddTC4Zovtbc" },
              { "title": "Kahn’s Algorithm for Topological Sort", "url": "https://www.youtube.com/watch?v=cIBFEhD77b4" }
            ]
          },
          {
            "id": 28,
            "name": "N-Queens Problem",
            "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Samsung", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Meta", "Google", "Nvidia"],
            "difficulty": "Hard",
            "tags": ["Backtracking", "Recursion"],
            postedDate: "",
            solution: `
# 👑 N-Queens Problem  
**LeetCode #51**  
🔗 [Problem Link](https://leetcode.com/problems/n-queens/)

---

### ✅ Problem Summary
> Place \`n\` queens on an \`n x n\` chessboard such that no two queens threaten each other. Return all distinct solutions.

---

### 🧠 Approach
Use **Backtracking**:
1. Place one queen per row.  
2. Track column, diagonal, and anti-diagonal attacks.  
3. Backtrack if conflict is detected.

---

### 💡 Key Insight
Use sets to track:
- Columns (\`col\`)
- Major diagonals (\`diag1 = row - col\`)
- Minor diagonals (\`diag2 = row + col\`)

---

### 🧮 Code (TypeScript)

\`\`\`ts
function solveNQueens(n: number): string[][] {
    const res: string[][] = [];
    const board = Array.from({ length: n }, () => ".".repeat(n));
    const cols = new Set<number>();
    const diag1 = new Set<number>(); // row - col
    const diag2 = new Set<number>(); // row + col

    const backtrack = (row: number) => {
        if (row === n) {
            res.push([...board]);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

            const rowStr = board[row].split("");
            rowStr[col] = "Q";
            board[row] = rowStr.join("");

            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);

            rowStr[col] = ".";
            board[row] = rowStr.join("");
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    };

    backtrack(0);
    return res;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: n = 4  
Output:  
[
  [".Q..", "...Q", "Q...", "..Q."],
  ["..Q.", "Q...", "...Q", ".Q.."]
]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n!)  
- **Space:** O(n²) for board + O(n) for sets
            `,
            "platforms": [
              { "name": "LeetCode", "url": "https://leetcode.com/problems/n-queens/" },
              { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/" }
            ],
            "youtubeLinks": [
              { "title": "N-Queens | Backtracking", "url": "https://www.youtube.com/watch?v=i05Ju7AftcM" },
              { "title": "N-Queens Problem Explained", "url": "https://www.youtube.com/watch?v=Ph95IHmRp5M" }
            ]
          },
          {
            "id": 29,
            "name": "Sudoku Solver",
            "companys":   ["Google", "Meta", "Netflix", "Tesla", "Nvidia", "Samsung", "IBM", "Oracle", "Adobe", "PayPal", "Amazon", "Microsoft", "Sony", "Apple"],
            "difficulty": "Hard",
            "tags": ["Backtracking", "Recursion"],
            postedDate: "",
            solution: `
# 🔢 Sudoku Solver  
**LeetCode #37**  
🔗 [Problem Link](https://leetcode.com/problems/sudoku-solver/)

---

### ✅ Problem Summary
> Fill a partially completed \`9x9\` Sudoku board.  
> Each row, column, and \`3x3\` sub-box must contain digits \`1-9\` exactly once.

---

### 🧠 Approach
Use **Backtracking**:
1. Try placing digits \`1-9\` in empty cells.  
2. Check validity at each step (row, column, box).  
3. Backtrack on invalid placements.

---

### 💡 Key Insight
Prune invalid options early by validating rows, cols, and sub-boxes before proceeding.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function solveSudoku(board: string[][]): void {
    const isValid = (r: number, c: number, ch: string): boolean => {
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === ch || board[i][c] === ch) return false;

            const boxRow = 3 * Math.floor(r / 3) + Math.floor(i / 3);
            const boxCol = 3 * Math.floor(c / 3) + (i % 3);
            if (board[boxRow][boxCol] === ch) return false;
        }
        return true;
    };

    const backtrack = (): boolean => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") {
                    for (let ch = 1; ch <= 9; ch++) {
                        const char = ch.toString();
                        if (isValid(r, c, char)) {
                            board[r][c] = char;
                            if (backtrack()) return true;
                            board[r][c] = ".";
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    backtrack();
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input:  
[
 ["5","3",".",".","7",".",".",".","."],
 ["6",".",".","1","9","5",".",".","."],
 [".","9","8",".",".",".",".","6","."],
 ["8",".",".",".","6",".",".",".","3"],
 ["4",".",".","8",".","3",".",".","1"],
 ["7",".",".",".","2",".",".",".","6"],
 [".","6",".",".",".",".","2","8","."],
 [".",".",".","4","1","9",".",".","5"],
 [".",".",".",".","8",".",".","7","9"]
]

Output: The filled valid board.
\`\`\`

---

### ⏱ Complexity

- **Time:** O(9⁸²) worst case, but pruned with backtracking  
- **Space:** O(1) in-place
            `,
            "platforms": [
              { "name": "LeetCode", "url": "https://leetcode.com/problems/sudoku-solver/" },
              { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/sudoku-backtracking-7/" }
            ],
            "youtubeLinks": [
              { "title": "Sudoku Solver | Backtracking", "url": "https://www.youtube.com/watch?v=FWAIf_EVUKE" },
              { "title": "Sudoku Solving Algorithm", "url": "https://www.youtube.com/watch?v=eqUwSA0xI-s" }
            ]
          },
          {
            "id": 30,
            "name": "Graph Coloring Problem",
            "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],
            "difficulty": "Hard",
            "tags": ["Backtracking", "Graph"],
            postedDate: "",
            solution: `
# 🎨 Graph Coloring Problem  
**Backtracking + Graph Theory**

---

### ✅ Problem Summary
> Given an undirected graph and an integer \`m\`, determine if the graph can be colored using at most \`m\` colors such that **no two adjacent vertices share the same color**.

---

### 🧠 Approach
Use **Backtracking**:
1. Try assigning colors to each vertex.  
2. For each color, check if it's safe (no adjacent node has that color).  
3. If valid, recurse to the next vertex.

---

### 💡 Key Insight
Try all color assignments one by one and backtrack if an invalid assignment is made.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function graphColoring(graph: number[][], m: number): boolean {
    const n = graph.length;
    const colors = new Array(n).fill(0);

    const isSafe = (node: number, color: number): boolean => {
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (graph[node][neighbor] && colors[neighbor] === color) {
                return false;
            }
        }
        return true;
    };

    const solve = (node: number): boolean => {
        if (node === n) return true;

        for (let color = 1; color <= m; color++) {
            if (isSafe(node, color)) {
                colors[node] = color;
                if (solve(node + 1)) return true;
                colors[node] = 0;
            }
        }
        return false;
    };

    return solve(0);
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input:
graph = [
  [0, 1, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [1, 0, 1, 0]
], m = 3

Output: true
Explanation: It is possible to color the graph using 3 colors.
\`\`\`

---

### ⏱ Complexity

- **Time:** O(mⁿ) — worst-case, all color combinations  
- **Space:** O(n) — color array
            `,
            "platforms": [
              { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/" }
            ],
            "youtubeLinks": [
              { "title": "Graph Coloring | Backtracking", "url": "https://www.youtube.com/watch?v=w7TvjAT6bI0" },
              { "title": "M-Coloring Problem Explained", "url": "https://www.youtube.com/watch?v=ZVCdLiV6IM4" }
            ]
          },
          {
            "id": 31,
            "name": "Longest Palindromic Subsequence",
            "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],
            "difficulty": "Medium",
            "tags": ["Dynamic Programming", "String"],
            postedDate: "",
            solution: `
# 🔁 Longest Palindromic Subsequence  
**LeetCode #516**  
🔗 [Problem Link](https://leetcode.com/problems/longest-palindromic-subsequence/)

---

### ✅ Problem Summary
> Given a string \`s\`, return the **length** of the longest palindromic subsequence in \`s\`.

---

### 🧠 Approach
Use **Dynamic Programming**:
- \`dp[i][j]\` stores the length of the longest palindromic subsequence in \`s[i..j]\`.

---

### 💡 Key Insight
If \`s[i] === s[j]\`, they can form a palindrome:  
\`dp[i][j] = 2 + dp[i+1][j-1]\`  
Else, take the best from shrinking either side:  
\`dp[i][j] = max(dp[i+1][j], dp[i][j-1])\`

---

### 🧮 Code (TypeScript)

\`\`\`ts
function longestPalindromeSubseq(s: string): number {
    const n = s.length;
    const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = 2 + dp[i + 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[0][n - 1];
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: s = "bbbab"  
Output: 4  
Explanation: One LPS is "bbbb"
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n²)  
- **Space:** O(n²)
            `,
            "platforms": [
              { "name": "LeetCode", "url": "https://leetcode.com/problems/longest-palindromic-subsequence/" },
              { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/" }
            ],
            "youtubeLinks": [
              { "title": "Longest Palindromic Subsequence | DP", "url": "https://www.youtube.com/watch?v=UflHuQj6MVA" },
              { "title": "LPS | DP Solution Explained", "url": "https://www.youtube.com/watch?v=O7_wZc90xts" }
            ]
          },
            {
              "id": 32,
              "name": "Trapping Rain Water",
              "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],
              "difficulty": "Hard",
              "tags": ["Two Pointers", "Dynamic Programming", "Stack"],
              postedDate: "",
              solution: `
# 🌧️ Trapping Rain Water  
**LeetCode #42**  
🔗 [Problem Link](https://leetcode.com/problems/trapping-rain-water/)

---

### ✅ Problem Summary
> Given an array of elevations, compute how much water it can trap after raining.

---

### 🧠 Approach
Use **Two Pointers**:
1. Maintain two pointers \`left\` and \`right\`.  
2. Track \`leftMax\` and \`rightMax\`.  
3. Water trapped at each index = \`min(leftMax, rightMax) - height[i]\`.

---

### 💡 Key Insight
Water at a bar depends on the shorter of the tallest bars to its left and right.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function trap(height: number[]): number {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]  
Output: 6  
Explanation: Total water trapped between bars is 6.
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(1)
              `,
              "platforms": [
                { "name": "LeetCode", "url": "https://leetcode.com/problems/trapping-rain-water/" },
                { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/trapping-rain-water/" }
              ],
              "youtubeLinks": [
                { "title": "Trapping Rain Water | Two Pointers", "url": "https://www.youtube.com/watch?v=ZI2z5pq0TqA" },
                { "title": "Trapping Rain Water Explained", "url": "https://www.youtube.com/watch?v=HmBbcDiJapY" }
              ]
            },
            {
              "id": 33,
              "name": "Sliding Window Maximum",
              "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],
              "difficulty": "Hard",
              "tags": ["Deque", "Sliding Window"],
              postedDate: "",
              solution: `
# 🔍 Sliding Window Maximum  
**LeetCode #239**  
🔗 [Problem Link](https://leetcode.com/problems/sliding-window-maximum/)

---

### ✅ Problem Summary
> Given an array \`nums\` and an integer \`k\`, return the **maximum** value in every sliding window of size \`k\`.

---

### 🧠 Approach
Use a **Monotonic Deque** to store indices:
- Keeps values in decreasing order.
- Front always holds the max of current window.

---

### 💡 Key Insight
Pop indices from:
- 🧼 Back: if current element is greater than the back.
- ❌ Front: if it’s outside the window.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function maxSlidingWindow(nums: number[], k: number): number[] {
    const deque: number[] = [];
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove indices out of current window
        if (deque.length && deque[0] <= i - k) deque.shift();

        // Remove smaller values from back
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        // Push max to result starting from i >= k - 1
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3  
Output: [3,3,5,5,6,7]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(k)
              `,
              "platforms": [
                { "name": "LeetCode", "url": "https://leetcode.com/problems/sliding-window-maximum/" },
                { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/" }
              ],
              "youtubeLinks": [
                { "title": "Sliding Window Maximum | Deque", "url": "https://www.youtube.com/watch?v=DfljaUwZsOk" },
                { "title": "Optimized Sliding Window", "url": "https://www.youtube.com/watch?v=CZQGRp93K4k" }
              ]
            },
            {
              "id": 34,
              "name": "Find Median from Data Stream",
              "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],
              "difficulty": "Hard",
              "tags": ["Heap", "Sorting"],
              postedDate: "",
              solution: `
# 📊 Find Median from Data Stream  
**LeetCode #295**  
🔗 [Problem Link](https://leetcode.com/problems/find-median-from-data-stream/)

---

### ✅ Problem Summary
> Implement a data structure that supports:  
- \`addNum(num)\`: Add a number to the stream  
- \`findMedian()\`: Return the median of all elements so far

---

### 🧠 Approach
Use **2 Heaps**:
- Max Heap (lower half)  
- Min Heap (upper half)  
Maintain size difference ≤ 1

---

### 💡 Key Insight
- Max Heap stores smaller half  
- Min Heap stores larger half  
- If total is even → average of both tops  
- If odd → top of larger heap

---

### 🧮 Code (TypeScript)

\`\`\`ts
class MedianFinder {
    private small: number[] = []; // Max Heap (invert values)
    private large: number[] = []; // Min Heap

    private pushMaxHeap(heap: number[], val: number) {
        heap.push(-val);
        heap.sort((a, b) => a - b);
    }

    private pushMinHeap(heap: number[], val: number) {
        heap.push(val);
        heap.sort((a, b) => a - b);
    }

    addNum(num: number): void {
        this.pushMaxHeap(this.small, num);
        const maxSmall = -this.small.shift()!;
        this.pushMinHeap(this.large, maxSmall);

        if (this.large.length > this.small.length) {
            const minLarge = this.large.shift()!;
            this.pushMaxHeap(this.small, minLarge);
        }
    }

    findMedian(): number {
        if (this.small.length > this.large.length) {
            return -this.small[0];
        } else {
            return (-this.small[0] + this.large[0]) / 2;
        }
    }
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
mf.findMedian(); // 1.5
mf.addNum(3);
mf.findMedian(); // 2
\`\`\`

---

### ⏱ Complexity

- **Time:** O(log n) for \`addNum\`, O(1) for \`findMedian\`  
- **Space:** O(n) total storage
              `,
              "platforms": [
                { "name": "LeetCode", "url": "https://leetcode.com/problems/find-median-from-data-stream/" },
                { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/" }
              ],
              "youtubeLinks": [
                { "title": "Median of Data Stream | Heap", "url": "https://www.youtube.com/watch?v=itmhHWaHupI" },
                { "title": "Efficient Median Finder", "url": "https://www.youtube.com/watch?v=VmogG01IjYc" }
              ]
            },
            {
              "id": 35,
              "name": "Longest Consecutive Sequence",
              "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],
              "difficulty": "Medium",
              "tags": ["Sorting", "Union-Find", "HashSet"],
              postedDate: "",
              solution: `
# 🔗 Longest Consecutive Sequence  
**LeetCode #128**  
🔗 [Problem Link](https://leetcode.com/problems/longest-consecutive-sequence/)

---

### ✅ Problem Summary
> Given an unsorted array of integers, return the length of the **longest consecutive elements sequence**.  
Must run in **O(n)** time.

---

### 🧠 Approach
Use a **Set** to store all elements, then iterate only from sequence **starts** — elements with no predecessor.

---

### 💡 Key Insight
Only start counting from numbers where \`num - 1\` is **not** in the set. Expand forward while \`num + 1\` exists.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let maxLen = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let current = num;
            let streak = 1;

            while (numSet.has(current + 1)) {
                current++;
                streak++;
            }

            maxLen = Math.max(maxLen, streak);
        }
    }

    return maxLen;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: [100, 4, 200, 1, 3, 2]  
Output: 4  // Sequence: [1, 2, 3, 4]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(n)
              `,
              "platforms": [
                { "name": "LeetCode", "url": "https://leetcode.com/problems/longest-consecutive-sequence/" },
                { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/longest-consecutive-subsequence/" }
              ],
              "youtubeLinks": [
                { "title": "Longest Consecutive Sequence | HashSet", "url": "https://www.youtube.com/watch?v=P6RZZMu_maU" },
                { "title": "Union-Find Approach", "url": "https://www.youtube.com/watch?v=YNtde-OEv6w" }
              ]
            },
            {
              "id": 36,
              "name": "Longest Common Subsequence",
              "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],
              "difficulty": "Medium",
              "tags": ["Dynamic Programming", "String"],
              postedDate: "",
              solution: `
# 🔁 Longest Common Subsequence (LCS)  
**LeetCode #1143**  
🔗 [Problem Link](https://leetcode.com/problems/longest-common-subsequence/)

---

### ✅ Problem Summary
> Given two strings \`text1\` and \`text2\`, return the length of their **longest common subsequence**.

---

### 🧠 Approach
Use **Dynamic Programming**:
- \`dp[i][j]\` = length of LCS of \`text1[0..i-1]\` and \`text2[0..j-1]\`

---

### 💡 Key Insight
- If \`text1[i-1] === text2[j-1]\` → \`dp[i][j] = 1 + dp[i-1][j-1]\`  
- Else → \`dp[i][j] = max(dp[i-1][j], dp[i][j-1])\`

---

### 🧮 Code (TypeScript)

\`\`\`ts
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: text1 = "abcde", text2 = "ace"  
Output: 3  // "ace" is the LCS
\`\`\`

---

### ⏱ Complexity

- **Time:** O(m × n)  
- **Space:** O(m × n)
              `,
              "platforms": [
                { "name": "LeetCode", "url": "https://leetcode.com/problems/longest-common-subsequence/" },
                { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/" }
              ],
              "youtubeLinks": [
                { "title": "Longest Common Subsequence | DP", "url": "https://www.youtube.com/watch?v=NPZn9jBrX8U" },
                { "title": "Efficient LCS Computation", "url": "https://www.youtube.com/watch?v=sSno9rV8Rhg" }
              ]
            },
            {
              "id": 37,
              "name": "Reverse Nodes in k-Group",
              "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],
              "difficulty": "Hard",
              "tags": ["Linked List", "Recursion"],
              postedDate: "",
              solution: `
# 🔁 Reverse Nodes in k-Group  
**LeetCode #25**  
🔗 [Problem Link](https://leetcode.com/problems/reverse-nodes-in-k-group/)

---

### ✅ Problem Summary
> Given a linked list, reverse the nodes of a linked list \`k\` at a time and return its modified list.  
If the number of nodes is not a multiple of \`k\`, leave the last group as-is.

---

### 🧠 Approach
Use a helper to:
- Check if at least \`k\` nodes remain  
- Reverse next \`k\` nodes  
- Recursively call for next group

---

### 💡 Key Insight
Only reverse when the group size is exactly \`k\`. Use a dummy head to simplify pointer manipulation.

---

### 🧮 Code (TypeScript)

\`\`\`ts
class ListNode {
    val: number;
    next: ListNode | null = null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let count = 0;
    let node = head;

    // Count k nodes ahead
    while (node && count < k) {
        node = node.next;
        count++;
    }

    if (count === k) {
        // Reverse first k nodes
        let prev: ListNode | null = null;
        let curr = head;
        for (let i = 0; i < k; i++) {
            const next = curr!.next;
            curr!.next = prev;
            prev = curr;
            curr = next;
        }
        // Recursively reverse next group
        head!.next = reverseKGroup(node, k);
        return prev;
    }

    return head;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: head = [1,2,3,4,5], k = 2  
Output: [2,1,4,3,5]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n) — each node visited once  
- **Space:** O(n/k) recursion stack (or O(1) iterative)
              `,
              "platforms": [
                { "name": "LeetCode", "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
                { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/" }
              ],
              "youtubeLinks": [
                { "title": "Reverse Linked List in K-Groups", "url": "https://www.youtube.com/watch?v=1UOPsfP85V4" },
                { "title": "Optimized k-Group Reversal", "url": "https://www.youtube.com/watch?v=HC7wzAB6ByM" }
              ]
            },
            {
              "id": 38,
              "name": "Word Search",
              "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],
              "difficulty": "Medium",
              "tags": ["Backtracking", "Matrix"],
              postedDate: "",
              solution: `
# 🔤 Word Search  
**LeetCode #79**  
🔗 [Problem Link](https://leetcode.com/problems/word-search/)

---

### ✅ Problem Summary
> Given a 2D board and a word, return true if the word exists in the grid.  
The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically), but the same cell may not be used more than once.

---

### 🧠 Approach
Use **DFS Backtracking**:
- Try all 4 directions from each cell.
- Mark visited cells temporarily.
- Backtrack if path doesn't lead to solution.

---

### 💡 Key Insight
Modify the board in-place (e.g. mark visited with \`'#'\`) and restore after recursion to avoid extra space.

---

### 🧮 Code (TypeScript)

\`\`\`ts
function exist(board: string[][], word: string): boolean {
    const rows = board.length, cols = board[0].length;

    const dfs = (i: number, j: number, index: number): boolean => {
        if (index === word.length) return true;
        if (i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== word[index]) return false;

        const temp = board[i][j];
        board[i][j] = '#';  // mark as visited

        const found = dfs(i + 1, j, index + 1) ||
                      dfs(i - 1, j, index + 1) ||
                      dfs(i, j + 1, index + 1) ||
                      dfs(i, j - 1, index + 1);

        board[i][j] = temp;  // backtrack
        return found;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
], word = "ABCCED"  
Output: true
\`\`\`

---

### ⏱ Complexity

- **Time:** O(m × n × 4^L), where L = length of word  
- **Space:** O(L) recursion stack

              `,
              "platforms": [
                { "name": "LeetCode", "url": "https://leetcode.com/problems/word-search/" },
                { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/word-search-puzzle-backtracking-3/" }
              ],
              "youtubeLinks": [
                { "title": "Word Search | Backtracking", "url": "https://www.youtube.com/watch?v=m9TrOL1ETxI" },
                { "title": "Optimized Word Search Algorithm", "url": "https://www.youtube.com/watch?v=ptvCwL6mMDU" }
              ]
            },
            {
              "id": 39,
              "name": "Largest Rectangle in Histogram",
              "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],

              "difficulty": "Hard",
              "tags": ["Stack", "Monotonic Stack"],
              postedDate: "",
              solution: `
\`\`\`md
# 🧱 Largest Rectangle in Histogram  
**LeetCode #84**  
🔗 [Problem Link](https://leetcode.com/problems/largest-rectangle-in-histogram/)

---

### ✅ Problem Summary
> Given an array of integers \`heights\` representing histogram bar heights, return the **area** of the largest rectangle.

---

### 🧠 Approach
Use a **Monotonic Stack**:
- Push increasing bar indices  
- When a smaller bar is found, calculate area with heights from the stack

---

### 💡 Key Insight
For each popped bar:
- Width = \`i - stackTop - 1\`  
- Height = \`heights[popped]\`

---

### 🧮 Code (TypeScript)

\`\`\`ts
function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [];
    heights.push(0); // Add sentinel to flush the stack
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()!];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: heights = [2,1,5,6,2,3]  
Output: 10  // From bars [5,6]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(n)
\`\`\`
              `,
              "platforms": [
                { "name": "LeetCode", "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
                { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/largest-rectangle-under-histogram/" }
              ],
              "youtubeLinks": [
                { "title": "Largest Rectangle in Histogram | Stack", "url": "https://www.youtube.com/watch?v=zx5Sw9130L0" },
                { "title": "Monotonic Stack Approach", "url": "https://www.youtube.com/watch?v=vcv3REr0kP8" }
              ]
            },
            {
              "id": 40,
              "name": "Maximum Product Subarray",
              "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],

              "difficulty": "Medium",
              "tags": ["Dynamic Programming", "Kadane’s Algorithm"],
              postedDate: "",
              solution: `
# ✖️ Maximum Product Subarray  
**LeetCode #152**  
🔗 [Problem Link](https://leetcode.com/problems/maximum-product-subarray/)

---

### ✅ Problem Summary
> Find the contiguous subarray (containing at least one number) with the **largest product** and return the product.

---

### 🧠 Approach
Use **Dynamic Programming**:
- Track both **max product** and **min product** at each position
- Negative numbers can flip max ↔ min

---

### 💡 Key Insight
At each index:  
- \`maxProd[i] = max(nums[i], nums[i]*maxProd[i-1], nums[i]*minProd[i-1])\`  
- Similarly for \`minProd[i]\`

---

### 🧮 Code (TypeScript)

\`\`\`ts
function maxProduct(nums: number[]): number {
    let maxSoFar = nums[0];
    let maxProd = nums[0];
    let minProd = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const tempMax = Math.max(num, maxProd * num, minProd * num);
        minProd = Math.min(num, maxProd * num, minProd * num);
        maxProd = tempMax;
        maxSoFar = Math.max(maxSoFar, maxProd);
    }

    return maxSoFar;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: nums = [2,3,-2,4]  
Output: 6  // Subarray [2,3]
\`\`\`

---

### ⏱ Complexity

- **Time:** O(n)  
- **Space:** O(1)
              `,

              "platforms": [
                { "name": "LeetCode", "url": "https://leetcode.com/problems/maximum-product-subarray/" },
                { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/maximum-product-subarray/" }
              ],
              "youtubeLinks": [
                { "title": "Maximum Product Subarray | Kadane’s Algorithm", "url": "https://www.youtube.com/watch?v=lXVy6YWFcRM" },
                { "title": "Optimized Maximum Product Subarray", "url": "https://www.youtube.com/watch?v=hnswaLJvr6g" }
              ]
            },
            {
              "id": 41,
              "name": "Find Peak Element",
              "companys":   ["Microsoft", "Amazon", "Apple", "IBM", "Sony", "Salesforce", "PayPal", "Netflix", "Tesla", "Google", "Nvidia", "Oracle", "Adobe", "Samsung"],
              "difficulty": "Medium",
              "tags": ["Binary Search", "Array"],
              postedDate: "",
              solution: `
# ⛰️ Find Peak Element  
**LeetCode #162**  
🔗 [Problem Link](https://leetcode.com/problems/find-peak-element/)

---

### ✅ Problem Summary
> A peak element is an element strictly greater than its neighbors.  
Return the index of **any** peak element.  
Assume \`nums[-1] = -∞\` and \`nums[n] = -∞\`.

---

### 🧠 Approach
Use **Binary Search** to find a peak efficiently in **O(log n)** time.

---

### 💡 Key Insight
- If \`nums[mid] > nums[mid + 1]\`, the **peak lies on the left**  
- Else, the **peak lies on the right**

---

### 🧮 Code (TypeScript)

\`\`\`ts
function findPeakElement(nums: number[]): number {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid; // peak is on the left (including mid)
        } else {
            left = mid + 1; // peak is on the right
        }
    }

    return left;
}
\`\`\`

---

### 🧪 Example

\`\`\`ts
Input: nums = [1,2,3,1]  
Output: 2  // nums[2] = 3 is a peak
\`\`\`

---

### ⏱ Complexity

- **Time:** O(log n)  
- **Space:** O(1)
              `,
              "platforms": [
                { "name": "LeetCode", "url": "https://leetcode.com/problems/find-peak-element/" },
                { "name": "GeeksforGeeks", "url": "https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/" }
              ],
              "youtubeLinks": [
                { "title": "Find Peak Element | Binary Search", "url": "https://www.youtube.com/watch?v=CFgUQUL7j_k" },
                { "title": "Peak Element Problem Explained", "url": "https://www.youtube.com/watch?v=6aYb6Vnk6nY" }
              ]
            }                   
]


export const problem_based_on_company = [
  {
    name: "Google",
    problem_set: [  
    {
      id: 1,
      name: "Two Sum",
      difficulty: "Easy",
      tags: ["Arrays", "Hash Table"],
      status: false,
      favorite: false,
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com/problems/two-sum/" },
        { name: "HackerRank", url: "https://www.hackerrank.com/challenges/two-sum/" },
      ],
      youtubeLinks: [
        { title: "Two Sum - Optimal Solution", url: "https://www.youtube.com/watch?v=KLlXCFG5TnA" },
        { title: "Two Sum for Beginners", url: "https://www.youtube.com/watch?v=U8B984M1VcU" },
      ],
    },
    {
      id: 2,
      name: "LRU Cache",
      difficulty: "Medium",
      tags: ["Hash Table", "Linked List", "Design"],
      status: true,
      favorite: true,
      platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/lru-cache/" }],
      youtubeLinks: [{ title: "LRU Cache Implementation", url: "https://www.youtube.com/watch?v=7ABFKPK2hD4" }],
    },
    {
      id: 3,
      name: "Merge K Sorted Lists",
      difficulty: "Hard",
      tags: ["Linked List", "Heap", "Divide and Conquer"],
      status: false,
      favorite: false,
      platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/merge-k-sorted-lists/" }],
      youtubeLinks: [
        { title: "Merge K Sorted Lists - Heap Solution", url: "https://www.youtube.com/watch?v=kpCesr9VXDA" },
      ],
    },
    {
      id: 4,
      name: "Word Break",
      difficulty: "Medium",
      tags: ["Dynamic Programming", "Trie"],
      status: false,
      favorite: true,
      platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/word-break/" }],
      youtubeLinks: [{ title: "Word Break - DP Approach", url: "https://www.youtube.com/watch?v=Sx9NNgInc3A" }],
    },
    {
      id: 5,
      name: "Trapping Rain Water",
      difficulty: "Hard",
      tags: ["Arrays", "Two Pointers", "Stack"],
      status: true,
      favorite: false,
      platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/" }],
      youtubeLinks: [{ title: "Trapping Rain Water Explained", url: "https://www.youtube.com/watch?v=ZI2z5pq0TqA" }],
    },
    {
      id: 6,
      name: "Maximum Subarray",
      difficulty: "Easy",
      tags: ["Arrays", "Dynamic Programming"],
      status: true,
      favorite: true,
      platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray/" }],
      youtubeLinks: [
        { title: "Maximum Subarray - Kadane's Algorithm", url: "https://www.youtube.com/watch?v=5WZl3MMT0Eg" },
      ],
    },
    {
      id: 7,
      name: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      tags: ["Arrays", "Binary Search", "Divide and Conquer"],
      status: false,
      favorite: false,
      platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" }],
      youtubeLinks: [
        { title: "Median of Two Sorted Arrays - Optimal Solution", url: "https://www.youtube.com/watch?v=LPFhl65R7ww" },
      ],
    },
    {
      id: 8,
      name: "Course Schedule",
      difficulty: "Medium",
      tags: ["Graph", "DFS", "BFS", "Topological Sort"],
      status: false,
      favorite: true,
      platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/course-schedule/" }],
      youtubeLinks: [{ title: "Course Schedule - Graph Solution", url: "https://www.youtube.com/watch?v=rKQaZuoUR4M" }],
    },
    {
      id: 9,
      name: "Course Schedule II",
      difficulty: "Medium",
      tags: ["Graph", "DFS", "BFS", "Topological Sort"],
      status: false,
      favorite: true,
      platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/course-schedule-ii/" }],
      youtubeLinks: [
        { title: "Course Schedule II - Graph Solution", url: "https://www.youtube.com/watch?v=Akt3glAwyfY" },
      ],
    },
    {
      "id": 10,
      "name": "Binary Tree Inorder Traversal",
      "difficulty": "Easy",
      "tags": ["Tree", "Stack", "DFS"],
      "status": false,
      "favorite": false,
      "platforms": [
        { "name": "LeetCode", "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/" }
      ],
      "youtubeLinks": [
        { "title": "Binary Tree Inorder Traversal Explained", "url": "https://www.youtube.com/watch?v=5DYuK9pIjl0" }
      ]
    },
    {
      "id": 11,
      "name": "Implement Trie (Prefix Tree)",
      "difficulty": "Medium",
      "tags": ["Trie", "Design", "Hash Table"],
      "status": false,
      "favorite": false,
      "platforms": [
        { "name": "LeetCode", "url": "https://leetcode.com/problems/implement-trie-prefix-tree/" }
      ],
      "youtubeLinks": [
        { "title": "Implement Trie - Prefix Tree", "url": "https://www.youtube.com/watch?v=oobqoCJlHA0" }
      ]
    },
    {
      "id": 12,
      "name": "Find the Duplicate Number",
      "difficulty": "Medium",
      "tags": ["Arrays", "Binary Search", "Two Pointers"],
      "status": false,
      "favorite": true,
      "platforms": [
        { "name": "LeetCode", "url": "https://leetcode.com/problems/find-the-duplicate-number/" }
      ],
      "youtubeLinks": [
        { "title": "Find the Duplicate Number - Optimal Approach", "url": "https://www.youtube.com/watch?v=pKO9UjSeLew" }
      ]
    },
    {
      "id": 13,
      "name": "Largest Rectangle in Histogram",
      "difficulty": "Hard",
      "tags": ["Stack", "Monotonic Stack"],
      "status": false,
      "favorite": false,
      "platforms": [
        { "name": "LeetCode", "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/" }
      ],
      "youtubeLinks": [
        { "title": "Largest Rectangle in Histogram - Stack Approach", "url": "https://www.youtube.com/watch?v=zx5Sw9130L0" }
      ]
    },
    {
      "id": 14,
      "name": "Sudoku Solver",
      "difficulty": "Hard",
      "tags": ["Backtracking"],
      "status": false,
      "favorite": false,
      "platforms": [
        { "name": "LeetCode", "url": "https://leetcode.com/problems/sudoku-solver/" }
      ],
      "youtubeLinks": [
        { "title": "Sudoku Solver - Backtracking", "url": "https://www.youtube.com/watch?v=FLbqgyJ-70I" }
      ]
    }
    ]
  },
  {
    name: "Microsoft",
    problem_set: [
      {
        id: 1,
        name: "Reverse Linked List",
        difficulty: "Easy",
        tags: ["Linked List"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/reverse-linked-list/" }],
        youtubeLinks: [{ title: "Reverse Linked List - Explanation", url: "https://www.youtube.com/watch?v=G0_I-ZF0S38" }],
      },
      {
        id: 2,
        name: "Course Schedule",
        difficulty: "Medium",
        tags: ["Graph", "Topological Sort"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/course-schedule/" }],
        youtubeLinks: [{ title: "Course Schedule Graph Approach", url: "https://www.youtube.com/watch?v=EgI5nU9etnU" }],
      },
      {
        id: 3,
        name: "Find Median from Data Stream",
        difficulty: "Hard",
        tags: ["Heap", "Design"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/find-median-from-data-stream/" }],
        youtubeLinks: [{ title: "Find Median using Heap", url: "https://www.youtube.com/watch?v=itmhHWaHupI" }],
      },
    ],
  },
  {
    name: "Amazon",
    problem_set: [
      {
        id: 1,
        name: "K Closest Points to Origin",
        difficulty: "Medium",
        tags: ["Heap", "Sorting"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/k-closest-points-to-origin/" }],
        youtubeLinks: [{ title: "K Closest Points - Heap Approach", url: "https://www.youtube.com/watch?v=1rEUgAG7fZU" }],
      },
      {
        id: 2,
        name: "Trapping Rain Water",
        difficulty: "Hard",
        tags: ["Two Pointers", "Dynamic Programming"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/" }],
        youtubeLinks: [{ title: "Trapping Rain Water - Optimal Approach", url: "https://www.youtube.com/watch?v=ZI2z5pq0TqA" }],
      },
      {
        id: 3,
        name: "Word Ladder",
        difficulty: "Hard",
        tags: ["Graph", "BFS"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/word-ladder/" }],
        youtubeLinks: [{ title: "Word Ladder BFS Approach", url: "https://www.youtube.com/watch?v=h9iTnkgv05E" }],
      },
    ],
  },
  {
    name: "Apple",
    problem_set: [
      {
        id: 1,
        name: "Longest Palindromic Substring",
        difficulty: "Medium",
        tags: ["String", "Dynamic Programming"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/longest-palindromic-substring/" }],
        youtubeLinks: [{ title: "Longest Palindromic Substring - DP Approach", url: "https://www.youtube.com/watch?v=UflHuQj6MVA" }],
      },
      {
        id: 2,
        name: "Container With Most Water",
        difficulty: "Medium",
        tags: ["Two Pointers"],
        status: true,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/container-with-most-water/" }],
        youtubeLinks: [{ title: "Container With Most Water - Two Pointers", url: "https://www.youtube.com/watch?v=UuiTKBwPgAo" }],
      },
      {
        id: 3,
        name: "LFU Cache",
        difficulty: "Hard",
        tags: ["Design", "Hash Table"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/lfu-cache/" }],
        youtubeLinks: [{ title: "LFU Cache - Explanation", url: "https://www.youtube.com/watch?v=0PSB9y8ehbk" }],
      },
    ],
  },
  {
    name: "Meta",
    problem_set: [
      {
        id: 1,
        name: "Valid Parentheses",
        difficulty: "Easy",
        tags: ["Stack"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/" }],
        youtubeLinks: [{ title: "Valid Parentheses - Stack Approach", url: "https://www.youtube.com/watch?v=QZOLb0xHB_Q" }],
      },
      {
        id: 2,
        name: "Add Two Numbers",
        difficulty: "Medium",
        tags: ["Linked List", "Math"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/add-two-numbers/" }],
        youtubeLinks: [{ title: "Add Two Numbers - Linked List", url: "https://www.youtube.com/watch?v=KjI5D2T6k4A" }],
      },
      {
        id: 3,
        name: "Alien Dictionary",
        difficulty: "Hard",
        tags: ["Graph", "Topological Sort"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/alien-dictionary/" }],
        youtubeLinks: [{ title: "Alien Dictionary - Graph Explanation", url: "https://www.youtube.com/watch?v=6kTZYvNNyps" }],
      },
    ],
  },
  {
    name: "Netflix",
    problem_set: [
      {
        id: 1,
        name: "Longest Consecutive Sequence",
        difficulty: "Medium",
        tags: ["Array", "Union Find"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/longest-consecutive-sequence/" }],
        youtubeLinks: [{ title: "Longest Consecutive Sequence - Optimal Approach", url: "https://www.youtube.com/watch?v=P6RZZMu_maU" }],
      },
      {
        id: 2,
        name: "Sudoku Solver",
        difficulty: "Hard",
        tags: ["Backtracking"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/sudoku-solver/" }],
        youtubeLinks: [{ title: "Sudoku Solver - Backtracking", url: "https://www.youtube.com/watch?v=FWAIf_EVUKE" }],
      },
      {
        id: 3,
        name: "Design Twitter",
        difficulty: "Hard",
        tags: ["Design", "Heap"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/design-twitter/" }],
        youtubeLinks: [{ title: "Design Twitter - Explanation", url: "https://www.youtube.com/watch?v=pNichitDD2E" }],
      },
    ],
  },
  {
    name: "Intel",
    problem_set: [
      {
        id: 1,
        name: "Find Peak Element",
        difficulty: "Medium",
        tags: ["Binary Search", "Array"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/find-peak-element/" }],
        youtubeLinks: [{ title: "Find Peak Element - Binary Search", url: "https://www.youtube.com/watch?v=CFgUQUL7j6o" }],
      },
      {
        id: 2,
        name: "Bitwise AND of Numbers Range",
        difficulty: "Medium",
        tags: ["Bit Manipulation"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/bitwise-and-of-numbers-range/" }],
        youtubeLinks: [{ title: "Bitwise AND of Range", url: "https://www.youtube.com/watch?v=RQ0pMYxR0Xk" }],
      },
      {
        id: 3,
        name: "LRU Cache",
        difficulty: "Hard",
        tags: ["Design", "Hash Table"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/lru-cache/" }],
        youtubeLinks: [{ title: "LRU Cache Implementation", url: "https://www.youtube.com/watch?v=7ABFKPK2hD4" }],
      },
    ],
  },
  {
    name: "IBM",
    problem_set: [
      {
        id: 1,
        name: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        tags: ["Tree", "Design"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }],
        youtubeLinks: [{ title: "Serialize & Deserialize Binary Tree", url: "https://www.youtube.com/watch?v=suj1ro8TIVY" }],
      },
      {
        id: 2,
        name: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        tags: ["Trie", "Design"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" }],
        youtubeLinks: [{ title: "Trie Data Structure", url: "https://www.youtube.com/watch?v=giiaIofn31A" }],
      },
      {
        id: 3,
        name: "Hamming Distance",
        difficulty: "Easy",
        tags: ["Bit Manipulation"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/hamming-distance/" }],
        youtubeLinks: [{ title: "Hamming Distance Explanation", url: "https://www.youtube.com/watch?v=aCFPtBjY8rk" }],
      },
    ],
  },
  {
    name: "Adobe",
    problem_set: [
      {
        id: 1,
        name: "Minimum Window Substring",
        difficulty: "Hard",
        tags: ["Sliding Window", "String"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/" }],
        youtubeLinks: [{ title: "Minimum Window Substring - Sliding Window", url: "https://www.youtube.com/watch?v=eS6PZLjoaq8" }],
      },
      {
        id: 2,
        name: "Basic Calculator",
        difficulty: "Hard",
        tags: ["Stack", "Math"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/basic-calculator/" }],
        youtubeLinks: [{ title: "Basic Calculator - Stack Approach", url: "https://www.youtube.com/watch?v=081AqOuasw0" }],
      },
      {
        id: 3,
        name: "Convert BST to Greater Tree",
        difficulty: "Medium",
        tags: ["Tree", "DFS"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/convert-bst-to-greater-tree/" }],
        youtubeLinks: [{ title: "Convert BST to Greater Tree - DFS", url: "https://www.youtube.com/watch?v=7vWbV9FPo_Q" }],
      },
    ],
  },
  {
    name: "Oracle",
    problem_set: [
      {
        id: 1,
        name: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        tags: ["Stack", "Math"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" }],
        youtubeLinks: [{ title: "Reverse Polish Notation Evaluation", url: "https://www.youtube.com/watch?v=8Q7bBA8lJpA" }],
      },
      {
        id: 2,
        name: "Subsets",
        difficulty: "Medium",
        tags: ["Backtracking", "Bit Manipulation"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/subsets/" }],
        youtubeLinks: [{ title: "Subsets - Backtracking", url: "https://www.youtube.com/watch?v=REOH22Xwdkk" }],
      },
      {
        id: 3,
        name: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        tags: ["Backtracking"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" }],
        youtubeLinks: [{ title: "Letter Combinations - Backtracking", url: "https://www.youtube.com/watch?v=0snEunUacZY" }],
      },
    ],
  },
  {
    name: "Tesla",
    problem_set: [
      {
        id: 1,
        name: "Robot Bounded In Circle",
        difficulty: "Medium",
        tags: ["Math", "Simulation"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/robot-bounded-in-circle/" }],
        youtubeLinks: [{ title: "Robot Bounded in Circle - Explanation", url: "https://www.youtube.com/watch?v=n1tSl1_f5tM" }],
      },
      {
        id: 2,
        name: "Jump Game",
        difficulty: "Medium",
        tags: ["Greedy", "Dynamic Programming"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/jump-game/" }],
        youtubeLinks: [{ title: "Jump Game - Greedy Approach", url: "https://www.youtube.com/watch?v=Yan0cv2cLy8" }],
      },
      {
        id: 3,
        name: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        tags: ["Graph", "DFS"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" }],
        youtubeLinks: [{ title: "Pacific Atlantic Water Flow - DFS", url: "https://www.youtube.com/watch?v=s-VkcjHqkGI" }],
      },
    ],
  },
  {
    name: "Nvidia",
    problem_set: [
      {
        id: 1,
        name: "Maximum Subarray",
        difficulty: "Easy",
        tags: ["Dynamic Programming", "Array"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray/" }],
        youtubeLinks: [{ title: "Kadane’s Algorithm - Maximum Subarray", url: "https://www.youtube.com/watch?v=86CQq3pKSUw" }],
      },
      {
        id: 2,
        name: "Game of Life",
        difficulty: "Medium",
        tags: ["Array", "Simulation"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/game-of-life/" }],
        youtubeLinks: [{ title: "Game of Life Explanation", url: "https://www.youtube.com/watch?v=jeantnuxbD4" }],
      },
      {
        id: 3,
        name: "Find the Celebrity",
        difficulty: "Medium",
        tags: ["Graph", "Two Pointers"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/find-the-celebrity/" }],
        youtubeLinks: [{ title: "Find the Celebrity - Graph Approach", url: "https://www.youtube.com/watch?v=CII5iYxDnmY" }],
      },
    ],
  },
  {
    name: "Samsung",
    problem_set: [
      {
        id: 1,
        name: "Sudoku Solver",
        difficulty: "Hard",
        tags: ["Backtracking"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/sudoku-solver/" }],
        youtubeLinks: [{ title: "Sudoku Solver - Backtracking", url: "https://www.youtube.com/watch?v=FWAIf_EVUO8" }],
      },
      {
        id: 2,
        name: "Rotate Image",
        difficulty: "Medium",
        tags: ["Array", "Matrix"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/rotate-image/" }],
        youtubeLinks: [{ title: "Rotate Image - Matrix Manipulation", url: "https://www.youtube.com/watch?v=fMSJSS7eO1w" }],
      },
      {
        id: 3,
        name: "Spiral Matrix",
        difficulty: "Medium",
        tags: ["Array", "Matrix"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/spiral-matrix/" }],
        youtubeLinks: [{ title: "Spiral Matrix - Traversal Explanation", url: "https://www.youtube.com/watch?v=BJnMZNwUk1M" }],
      },
    ],
  },
  {
    name: "Sony",
    problem_set: [
      {
        id: 1,
        name: "Design Tic-Tac-Toe",
        difficulty: "Medium",
        tags: ["Design", "Array"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/design-tic-tac-toe/" }],
        youtubeLinks: [{ title: "Tic-Tac-Toe Game Design", url: "https://www.youtube.com/watch?v=9rIi3Nqi6O0" }],
      },
      {
        id: 2,
        name: "Longest Palindromic Substring",
        difficulty: "Medium",
        tags: ["Dynamic Programming", "String"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/longest-palindromic-substring/" }],
        youtubeLinks: [{ title: "Longest Palindromic Substring - DP Approach", url: "https://www.youtube.com/watch?v=UflHuQj6MVA" }],
      },
      {
        id: 3,
        name: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        tags: ["Array", "Greedy"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" }],
        youtubeLinks: [{ title: "Best Time to Buy & Sell Stock - Greedy Approach", url: "https://www.youtube.com/watch?v=1pkOgXD63yU" }],
      },
    ],
  },
  {
    name: "PayPal",
    problem_set: [
      {
        id: 1,
        name: "Valid Parentheses",
        difficulty: "Easy",
        tags: ["Stack", "String"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/" }],
        youtubeLinks: [{ title: "Valid Parentheses - Stack Approach", url: "https://www.youtube.com/watch?v=WTzjTskDFMg" }],
      },
      {
        id: 2,
        name: "Group Anagrams",
        difficulty: "Medium",
        tags: ["Hash Table", "String"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/group-anagrams/" }],
        youtubeLinks: [{ title: "Group Anagrams - Hash Table", url: "https://www.youtube.com/watch?v=OouMdzOMeYA" }],
      },
      {
        id: 3,
        name: "Container With Most Water",
        difficulty: "Medium",
        tags: ["Two Pointers", "Greedy"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/container-with-most-water/" }],
        youtubeLinks: [{ title: "Container With Most Water - Two Pointers", url: "https://www.youtube.com/watch?v=UuiTKBwPgAo" }],
      },
    ],
  },
  {
    name: "Salesforce",
    problem_set: [
      {
        id: 1,
        name: "Course Schedule",
        difficulty: "Medium",
        tags: ["Graph", "Topological Sort"],
        status: false,
        favorite: true,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/course-schedule/" }],
        youtubeLinks: [{ title: "Course Schedule - Topological Sort", url: "https://www.youtube.com/watch?v=EgI5nU9etnU" }],
      },
      {
        id: 2,
        name: "Merge Intervals",
        difficulty: "Medium",
        tags: ["Sorting", "Greedy"],
        status: true,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/merge-intervals/" }],
        youtubeLinks: [{ title: "Merge Intervals - Sorting Approach", url: "https://www.youtube.com/watch?v=qKczfGUrFY4" }],
      },
      {
        id: 3,
        name: "Word Ladder",
        difficulty: "Hard",
        tags: ["BFS", "Graph"],
        status: false,
        favorite: false,
        platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/word-ladder/" }],
        youtubeLinks: [{ title: "Word Ladder - BFS Approach", url: "https://www.youtube.com/watch?v=h9iTnkgv05E" }],
      },
    ],
  },
];




// export const svg_logo_for_companys: { name: string; svg_logo: JSX.Element }[] = [
//   {
//     name: "Google",
//     svg_logo: (
//       <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M45.9997 37.7273V53.2183H67.527C66.5817 58.2002 63.745 62.4186 59.4905 65.2549L72.4724 75.3278C80.036 68.3461 84.3997 58.0914 84.3997 45.9096C84.3997 43.0733 84.1453 40.3457 83.6724 37.7278L45.9997 37.7273Z" fill="#4285F4"/>
//         <path d="M23.5822 52.6137L20.6543 54.855L10.2904 62.9276C16.8722 75.9821 30.3622 85.0005 45.9986 85.0005C56.7984 85.0005 65.8529 81.4368 72.4713 75.3278L59.4894 65.255C55.9258 67.655 51.3802 69.1097 45.9986 69.1097C35.5986 69.1097 26.7624 62.0915 23.5985 52.6368L23.5822 52.6137Z" fill="#34A853"/>
//         <path d="M10.2906 27.0729C7.56349 32.4545 6 38.5274 6 45C6 51.4727 7.56323 57.546 10.2904 62.9276C10.2904 62.9637 23.6001 52.5998 23.6001 52.5998C22.8001 50.1998 22.3272 47.6545 22.3272 44.9996C22.3272 42.3447 22.8001 39.7994 23.6001 37.3994L10.2906 27.0729Z" fill="#FBBC05"/>
//         <path d="M45.9994 20.9274C51.8905 20.9274 57.1268 22.9637 61.3086 26.891L72.7631 15.4366C65.8176 8.96391 56.7997 5 45.9994 5C30.3631 5 16.8725 13.9819 10.2906 27.0729L23.5994 37.4002C26.7629 27.9455 35.5994 20.9274 45.9994 20.9274Z" fill="#EA4335"/>
//       </svg>
//     )
//   },
//   {
//     name: "Microsoft"
//   },
//   {
//     name: "Amazon"
//   },
//   {
//     name: "Apple"
//   },
//   {
//     name: "Meta"
//   },
//   {
//     name: "Netflix"
//   },
//   {
//     name: "Intel"
//   },
//   {
//     name: "IBM"
//   },
//   {
//     name: "Adobe"
//   },
//   {
//     name: "Oracle"
//   },
//   {
//     name: "Tesla"
//   },
//   {
//     name: "Nvidia"
//   },
//   {
//     name: "Samsung"
//   },
//   {
//     name: "Sony"
//   },
//   {
//     name: "PayPal"
//   }
//   ,
//   {
//     name: "Salesforce"
//   }
// ]
