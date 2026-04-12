import { urlFor } from "@/libs/utils";

export const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-6xl font-bold mt-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-5xl font-semibold mt-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-4xl font-semibold mt-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-3xl font-medium mt-4">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-2xl font-medium mt-4">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-xl font-normal mt-4">{children}</h6>
    ),
    normal: ({ children }: any) => (
      <p className="leading-relaxed mt-4 text-justify indent-10">{children}</p>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-12 space-y-2 mt-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-12 space-y-2 mt-4">{children}</ol>
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
      <div className="relative flex justify-center items-center">
        <img src={urlFor(value).url()} className="my-6 rounded-lg" alt="" />
      </div>
    ),

    subtitleSection: ({ value }: any) => (
      <div className="my-6">
        <h2 className="text-2xl font-bold">{value.subtitle}</h2>
        <p className="text-gray-600 mt-2">{value.description}</p>
      </div>
    ),

    gallery: ({ value }: any) => {
      const images = value.images || [];
      const isOdd = images.length % 2 !== 0;

      const mainImages = isOdd ? images.slice(0, -1) : images;
      const lastImage = isOdd ? images[images.length - 1] : null;

      return (
        <div className="my-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mainImages.map((img: any) => (
              <div
                key={img._key}
                className="w-full max-h-250 overflow-hidden rounded-lg"
              >
                <img
                  src={urlFor(img).url()}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>

          {lastImage && (
            <div className="flex justify-center">
              <img
                src={urlFor(lastImage).url()}
                className="rounded-lg w-full sm:w-1/2 object-cover"
                alt=""
              />
            </div>
          )}
        </div>
      );
    },
  },
};
