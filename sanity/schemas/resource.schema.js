const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule) => Rule.required(),
    },
    // when you click the document it generate a url in the address bar
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    // keep track of no of downloads
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    },
    // Photo/Poster
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    // Categories for menu bars
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: ["frontend", "backend", "fullstack", "next 13", "other"],
      },
    },
  ],
};

export default schema;
