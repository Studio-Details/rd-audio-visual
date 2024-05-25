/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  output: 'export',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vert|frag)$/,
      use: [
        'raw-loader',
        {
          loader: 'glslify-loader',
          options: {
            basedir: path.resolve(__dirname, './src/glsl'),
          },
        },
      ]
    })
    return config
  },
};

export default nextConfig;
