export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){_id, title, "imageUrl": image.asset->url, description, slug}`;
export const POST = `*[_type == "post" && slug.current == $slug][0]{ _id, title, slug, content }`;
export const WEBSITE_NAME = `*[_type == "websiteName"]{websiteName}`;
export const LOGO = `*[_type == "logo"]{logo}`;
export const CATEGOTY = `*[_type == "category"] | order(order asc){title}`;
export const NAV_QUERY = `*[_type == "category" && !(_id in path("drafts.**"))] | order(order asc) {
  _id,
  title,
  // ดึงเฉพาะ Post ที่ไม่ได้เป็น Draft และอ้างอิงถึง Category นี้
  "posts": *[_type == "post" && !(_id in path("drafts.**")) && references(^._id)] {
    _id,
    title,
    "slug": slug.current 
  }
}`;
export const FOOTER = `*[_type == "footer"]`;
