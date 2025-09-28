// export const middleware = async () => {
//     console.log("Hello from middleware");
// };
// export const config = {
//     matcher: ["/about"],
// }

export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }
