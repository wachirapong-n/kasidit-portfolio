import { urlFor } from "@/libs/utils";

export const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
    normal: ({ children }: any) => (
      <p className="leading-relaxed mb-4">{children}</p>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 space-y-2">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a href={value?.href} className="text-blue-500 underline">
        {children}
      </a>
    ),
  },

  types: {
    image: ({ value }: any) => (
      <img src={urlFor(value).url()} className="my-6 rounded-lg" alt="" />
    ),

    subtitleSection: ({ value }: any) => (
      <div className="my-6">
        <h2 className="text-2xl font-bold">{value.subtitle}</h2>
        <p className="text-gray-600 mt-2">{value.description}</p>
      </div>
    ),

    gallery: ({ value }: any) => (
      <div className="grid grid-cols-2 gap-4 my-6">
        {value.images?.map((img: any) => (
          <img
            key={img._key}
            src={urlFor(img).url()}
            className="rounded-lg"
            alt=""
          />
        ))}
      </div>
    ),
  },
};
