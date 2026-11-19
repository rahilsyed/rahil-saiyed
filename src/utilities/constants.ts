export const CONSTANTS = {
  LANGUAGE :{
    GERMAN:'de',
    ENGLISH:'en'
  } as const,
}
export const NODES = [
    { x: 40, y: 40, w: 120, h: 46, title: "CLIENT", sub: "React / Next.js" },
    { x: 220, y: 110, w: 120, h: 46, title: "API", sub: "GraphQL / REST" },
    { x: 40, y: 180, w: 150, h: 46, title: "COMPUTE", sub: "Node.js + Lambda" },
    { x: 220, y: 250, w: 130, h: 46, title: "DATA", sub: "MongoDB / DynamoDB" },
    { x: 40, y: 320, w: 150, h: 46, title: "DELIVERY", sub: "S3 + CloudFront" },
];
export const PATHS = [
    "M100,86 L100,110 L280,110 L280,110", // client -> api (down then right) approx
    "M220,133 L115,133 L115,180",         // api -> compute
    "M115,226 L115,250 L280,250 L280,250",// compute -> data
    "M220,273 L115,273 L115,320",         // data -> delivery
];
export const SKILL_GROUPS = [
  {title:"Languages", items:["JavaScript (ES6+)","TypeScript (intermediate)"]},
  {title:"Frontend", items:["React.js","Next.js","HTML5 / CSS3","Responsive UI"]},
  {title:"Backend", items:["Node.js","Express.js","REST APIs","GraphQL APIs","Authentication & OAuth"]},
  {title:"Database", items:["MongoDB","Mongoose","DynamoDB"]},
  {title:"Cloud & DevOps", items:["AWS Lambda","S3 & CloudFront","IAM & Cognito","AppSync (Amplify GraphQL)","Serverless architecture"]},
  {title:"AI & Automation", items:["Claude AI integration","OpenAI API","Puppeteer / PDF generation"]},
];




export const awsServices = [
  {abbr:"λ",  name:"AWS Lambda",     cat:"Compute"},
  {abbr:"S3", name:"Amazon S3",      cat:"Storage"},
  {abbr:"CF", name:"CloudFront",     cat:"CDN"},
  {abbr:"AS", name:"AppSync",        cat:"GraphQL API"},
  {abbr:"DB", name:"DynamoDB",       cat:"NoSQL database"},
  {abbr:"CG", name:"Cognito",        cat:"Authentication"},
  {abbr:"IAM",name:"IAM",            cat:"Permissions"},
  {abbr:"AM", name:"Amplify",        cat:"Full-stack hosting"},
];

export const techStack = [
  {abbr:"Re", name:"React",          cat:"Frontend"},
  {abbr:"Nx", name:"Next.js",        cat:"Framework"},
  {abbr:"JS", name:"JavaScript",     cat:"Language"},
  {abbr:"TS", name:"TypeScript",     cat:"Language"},
  {abbr:"No", name:"Node.js",        cat:"Runtime"},
  {abbr:"Ex", name:"Express",        cat:"Backend"},
  {abbr:"GQ", name:"GraphQL",        cat:"API"},
  {abbr:"Mg", name:"MongoDB",        cat:"Database"},
  {abbr:"Pp", name:"Puppeteer",      cat:"Automation"},
  {abbr:"Cl", name:"Claude API",     cat:"AI"},
  {abbr:"AI", name:"OpenAI API",     cat:"AI"},
  {abbr:"Gt", name:"Git & GitHub",   cat:"Version control"},
  {abbr:"Pm", name:"Postman",        cat:"API testing"},
];