import Icons from 'unplugin-icons/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: (config) => {
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
