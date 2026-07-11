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