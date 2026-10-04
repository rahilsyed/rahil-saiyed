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

export const PROJECTS = [
  {
    title:"Lugelo Platform", desc:"A production platform spanning AI eBook generation, interactive storybooks, VR experiences, and a full user dashboard for media management.",
    tags:["React","Node.js","AWS","GraphQL","DynamoDB","S3","CloudFront"],
    challenge:"Synced frontend state, across long-running AI generation jobs without polling, using GraphQL subscriptions.",
    link:'http://lugelo.com/',
    image:'/projects_images/lgl-img.png'
  },
  {
    title:"Monitor Mate", desc:"An AI workflow that generates complete HTML books through LLMs, tracks generation status.",
    tags:["LLM orchestration","GraphQL Subscriptions","Prompt engineering"],
    challenge:"Kept the UI honest during multi-minute generations — real-time status, retries, and clear failure states.",
    image:'/projects_images/monitor-mate-dashboard.png'
  },
  {
    title:"Medisync - Doctor Appointment Booking System", desc:"A full-stack web application designed to streamline the process of booking medical appointments online.",
    tags:["ReactJS","NodeJS","MongoDB","Express.js"],
    challenge:"Streamlined appointment booking and scheduling by implementing role-based access, real-time availability, and efficient doctor–patient management in a responsive full-stack platform.",
    image:'/projects_images/Medisync.png'
  
  },
  {
    title:"AI Ebooks Generator", desc:"An AWS Lambda service that renders HTML, generates PDFs with headless Chromium, and delivers secure, downloadable files via S3.",
    tags:["AWS Lambda","Puppeteer","S3","Performance"],
    challenge:"Got headless Chromium running reliably inside Lambda's size and memory constraints.",
    image:'/projects_images/aie.png'
  },
];


export const GALLERY_ITEMS = [
  {
    tag:"Workplace", title:"Perception System", subtitle:"Full Stack Developer — current",
    photos: [
      "/work_images/perception/ps1.jpeg",
      "/work_images/perception/ps2.jpeg",
      "/work_images/perception/ps3.jpeg"
    ],
    back:"Wherever you shipped AI eBooks, PDF pipelines, or the desk you built it all from — swap this text for the real story behind the photos."
  },
  {
    tag:"Internship", title:"Mayora Infotech", subtitle:"Backend Developer Intern",
    photos:["", ""],
    back:"A team photo, a certificate, and a screenshot of your first deployed API — stack all of them here."
  },
  {
    tag:"Internship", title:"Adani Green Energy", subtitle:"Summer Intern",
    photos:["/work_images/adani/ada2.jpeg","/work_images/adani/ada1.jpeg", "/work_images/adani/ada3.jpeg", "/work_images/adani/ada4.jpeg", "/work_images/adani/ada5.jpeg", "/work_images/adani/ada6.jpeg","/work_images/adani/ada7.jpeg"],
    back:"Your first taste of a real engineering team. Drop in photos from the site visit, the office, and the closing presentation."
  },
  
];
