import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
};

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
  },
});

export default withMDX(nextConfig);
