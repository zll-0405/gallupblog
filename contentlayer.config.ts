import { defineDocumentType, makeSource } from '@contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeImgSize from 'rehype-img-size';
import remarkGfm from 'remark-gfm';
import remarkExternalLinks from 'remark-external-links';

export const Case = defineDocumentType(() => ({
  name: 'Case',
  filePathPattern: './case/**.md',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (blog) => `/case/${blog._raw.sourceFileName.replace('.md', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (blog) => blog._raw.sourceFileName.replace('.md', ''),
    },
  },
}));

export const Talent = defineDocumentType(() => ({
  name: 'Talent',
  filePathPattern: './talent/**.md',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (talent) => `/talent/${talent._raw.sourceFileName.replace('.md', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (talent) => talent._raw.sourceFileName.replace('.md', ''),
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Case, Talent],
  mdx: {
    rehypePlugins: [
      [rehypePrettyCode, { theme: 'github-dark' }],
      [rehypeImgSize, { dir: 'public' }],
    ],
    remarkPlugins: [remarkGfm, remarkExternalLinks],
  },
});
