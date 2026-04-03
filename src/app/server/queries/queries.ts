export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){_id, title, "imageUrl": image.asset->url, description, slug}`;
export const POST = `*[_type == "post" && slug.current == $slug][0]{ _id, title, slug, content }`;
export const WEBSITE_NAME = `*[_type == "websiteName"]{websiteName}`;
export const LOGO = `*[_type == "logo"]{logo}`;
export const CATEGOTY = `*[_type == "category"] | order(order asc){_id, title, slug, "imageUrl": image.asset->url}`;
export const CURRENT_CATEGORY = `*[_type == "category" && slug.current == $category][0].title`;
export const NAV_QUERY = `*[_type == "category" && !(_id in path("drafts.**"))] | order(order asc) {
  _id,
  title,
  "posts": *[_type == "post" && !(_id in path("drafts.**")) && references(^._id)] {
    _id,
    title,
    "slug": slug.current 
  }
}`;
export const FOOTER = `*[_type == "footer"]`;
export const HOME_QUERY = `*[_type == "category" && !(_id in path("drafts.**"))] | order(order asc) {
  _id,
  title,
  "posts": *[_type == "post" && !(_id in path("drafts.**")) && references(^._id)] {
    _id,
    title,
      "imageUrl": image.asset->url,
      description,
    slug,
  }
}`;
export const POST_CATEGORY = `*[_type == "post" && category->slug.current == $category] | order(order asc){
_id, title, "imageUrl": image.asset->url, description, slug
}`;
export const PROFILE = `*[_type == "profile"][0]{_id, name,"imageUrl": image.asset->url, introduction,  slogan}`;