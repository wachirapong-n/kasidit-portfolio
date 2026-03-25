

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
};