import { urlFor } from "@/libs/utils";

export const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="font-bold mt-4 text-[36px] sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight">
        {children}
      </h1>
    ),

    h2: ({ children }: any) => (
      <h2 className="font-semibold mt-4 text-[28px] sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-snug">
        {children}
      </h2>
    ),

    h3: ({ children }: any) => (
      <h3 className="font-semibold mt-4 text-[24px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
        {children}
      </h3>
    ),

    h4: ({ children }: any) => (
      <h4 className="font-medium mt-4 text-[20px] sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
        {children}
      </h4>
    ),

    h5: ({ children }: any) => (
      <h5 className="font-medium mt-4 text-[18px] sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
        {children}
      </h5>
    ),

    h6: ({ children }: any) => (
      <h6 className="font-normal mt-4 text-base md:text-lg lg:text-xl 2xl:text-2xl">
        {children}
      </h6>
    ),

    normal: ({ children }: any) => (
      <p className="leading-relaxed mt-4 text-justify indent-8 text-base md:text-lg lg:text-xl 2xl:text-2xl">
        {children}
      </p>
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
    bullet: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),

    number: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
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
    underline: ({ children }: any) => (
      <span className="underline">{children}</span>
    ),
    "strike-through": ({ children }: any) => (
      <span className="line-through">{children}</span>
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

export const portableTextIntroduction = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="font-bold mt-4 text-[36px] sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight">
        {children}
      </h1>
    ),

    h2: ({ children }: any) => (
      <h2 className="font-semibold mt-4 text-[28px] sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-snug">
        {children}
      </h2>
    ),

    h3: ({ children }: any) => (
      <h3 className="font-semibold mt-4 text-[24px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
        {children}
      </h3>
    ),

    h4: ({ children }: any) => (
      <h4 className="font-medium mt-4 text-[20px] sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
        {children}
      </h4>
    ),

    h5: ({ children }: any) => (
      <h5 className="font-medium mt-4 text-[18px] sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
        {children}
      </h5>
    ),

    h6: ({ children }: any) => (
      <h6 className="font-normal mt-4 text-[16px] sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
        {children}
      </h6>
    ),

    normal: ({ children }: any) => (
      <p className="leading-relaxed mt-4 xl:text-justify indent-8">
        {children}
      </p>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold">{children}</strong>
    ),

    em: ({ children }: any) => <em className="italic">{children}</em>,

    underline: ({ children }: any) => (
      <span className="underline">{children}</span>
    ),

    "strike-through": ({ children }: any) => (
      <span className="line-through">{children}</span>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 mt-4 space-y-2">{children}</ul>
    ),

    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 mt-4 space-y-2">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),

    number: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
};
