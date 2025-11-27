import Icons from 'unplugin-icons/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.plugins.push(
      Icons({
        compiler: 'react',
        jsx: 'react-jsx',
      })
    )
    return config
  }
}

export default nextConfig
