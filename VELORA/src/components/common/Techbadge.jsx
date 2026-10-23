import React, { useState } from 'react';
import { Code2 } from 'lucide-react';



const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

// normalized tech name -> devicon slug
// (normalized = lowercase, only letters/numbers/#/+  e.g. "Next.js" -> "nextjs")
const ICONS = {
  // Frontend
  react: 'react',
  reactjs: 'react',
  reactnative: 'react',
  nextjs: 'nextjs',
  vue: 'vuejs',
  vuejs: 'vuejs',
  nuxtjs: 'nuxtjs',
  angular: 'angularjs',
  svelte: 'svelte',
  typescript: 'typescript',
  javascript: 'javascript',
  html: 'html5',
  html5: 'html5',
  css: 'css3',
  css3: 'css3',
  sass: 'sass',
  scss: 'sass',
  tailwind: 'tailwindcss',
  tailwindcss: 'tailwindcss',
  bootstrap: 'bootstrap',
  redux: 'redux',
  framermotion: 'framermotion',
  threejs: 'threejs',
  three: 'threejs',
  vite: 'vitejs',
  webpack: 'webpack',
  storybook: 'storybook',
  figma: 'figma',

  // Backend
  node: 'nodejs',
  nodejs: 'nodejs',
  express: 'express',
  expressjs: 'express',
  nestjs: 'nestjs',
  python: 'python',
  django: 'django',
  flask: 'flask',
  fastapi: 'fastapi',
  java: 'java',
  spring: 'spring',
  springboot: 'spring',
  net: 'dotnetcore',
  dotnet: 'dotnetcore',
  csharp: 'csharp',
  'c#': 'csharp',
  go: 'go',
  golang: 'go',
  php: 'php',
  laravel: 'laravel',
  ruby: 'ruby',
  rails: 'rails',
  rubyonrails: 'rails',
  rust: 'rust',
  graphql: 'graphql',

  // Mobile
  swift: 'swift',
  swiftui: 'swift',
  kotlin: 'kotlin',
  flutter: 'flutter',
  dart: 'dart',
  android: 'android',
  ios: 'apple',
  firebase: 'firebase',

  // Data
  postgresql: 'postgresql',
  postgres: 'postgresql',
  mysql: 'mysql',
  mongodb: 'mongodb',
  mongo: 'mongodb',
  redis: 'redis',
  sqlite: 'sqlite',
  supabase: 'supabase',

  // Cloud / DevOps
  aws: 'amazonwebservices',
  amazonwebservices: 'amazonwebservices',
  azure: 'azure',
  googlecloud: 'googlecloud',
  gcp: 'googlecloud',
  docker: 'docker',
  kubernetes: 'kubernetes',
  terraform: 'terraform',
  nginx: 'nginx',
  linux: 'linux',
  git: 'git',
  github: 'github',
  githubactions: 'githubactions',
  gitlab: 'gitlab',
  jenkins: 'jenkins',
  vercel: 'vercel',

  // Testing
  jest: 'jest',
  cypress: 'cypressio',

  // AI / ML
  tensorflow: 'tensorflow',
  pytorch: 'pytorch',
  keras: 'keras',
  scikitlearn: 'scikitlearn',
  pandas: 'pandas',
  numpy: 'numpy',
  opencv: 'opencv',
  jupyter: 'jupyter',

  // CMS / commerce
  wordpress: 'wordpress',
  shopify: 'shopify',
};

const normalize = (name = '') => name.toLowerCase().replace(/[^a-z0-9#+]/g, '');

export default function TechBadge({ name, size = 'sm' }) {
  const [broken, setBroken] = useState(false);
  const slug = ICONS[normalize(name)];
  const showLogo = Boolean(slug) && !broken;
  const px = size === 'lg' ? 40 : 16;

  const icon = showLogo ? (
    <img
      src={`${DEVICON_BASE}/${slug}/${slug}-original.svg`}
      width={px}
      height={px}
      loading="lazy"
      alt=""
      onError={() => setBroken(true)}
      className="shrink-0 object-contain"
      style={{ width: px, height: px }}
    />
  ) : (
    <Code2 size={px} className="shrink-0 text-orange" aria-hidden="true" />
  );

  if (size === 'lg') {
    return (
      <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-cream border border-sand-border hover:border-orange hover:shadow-md transition-all duration-200 text-center">
        {icon}
        <span className="text-xs sm:text-sm font-heading font-semibold text-nearblack leading-tight">
          {name}
        </span>
      </div>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs bg-cream text-nearblack font-medium border border-sand-border">
      {icon}
      {name}
    </span>
  );
}