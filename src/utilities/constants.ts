export const CONSTANTS = {
    NAV_BAR_DATA: {
        title: `RAHIL-SAIYED / PORTFOLIO`,
        systems: "Systems",
        timeLines: "Timeline",
        builds: "Builds",
        contact: "Contact"
    },


}
export const NODES = [
    { x: 40, y: 40, w: 120, h: 46, title: "CLIENT", sub: "React / Next.js" },
    { x: 220, y: 110, w: 120, h: 46, title: "API", sub: "GraphQL" },
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


export const EXPERIENCE = [
  {
    role:"Full Stack Developer", company:"Perception System", badge:"Current",
    current:true,
    desc:"Building production features across the stack — React/Next.js interfaces, Node.js and Express APIs, and AWS Amplify GraphQL schemas with live subscriptions.",
    bullets:[
      "Designed and shipped AI-powered features: AI-generated eBooks, LLM-driven HTML generation, and image-generation pipelines.",
      "Built a serverless PDF pipeline on AWS Lambda using Puppeteer and headless Chromium, with S3 delivery.",
      "Owned cloud infrastructure — CloudFront CDN configuration, IAM permissions, presigned URLs, and CORS.",
      "Debugged production issues spanning GraphQL payload limits, Lambda packaging, and Next.js build failures.",
    ],
    certificatePath:""
  },
  {
    role:"Backend Developer Intern", company:"Mayora Infotech", badge:"Internship",
    current:false,
    desc:"Focused on backend fundamentals — building and maintaining REST APIs with Node.js and Express, and working with database design and CRUD operations.",
    bullets:[],
    certificatePath:"Rahil_InternshipCertificate.pdf"
  },
  {
    role:"Summer Intern", company:"Adani Green Energy", badge:"Internship",
    current:false,
    desc:"Early hands-on exposure to software development workflows, version control, and collaborative engineering practices.",
    bullets:[],
    certificatePath:"ScannedDocument.pdf"
  },
];