/* eslint-disable node/no-process-env */

export default {
  nodeEnv: (process.env.NODE_ENV ?? ''),
  port: (process.env.PORT ?? 0),
  folder: (process.env.FOLDER ?? 'uploads'),
  cookieProps: {
    key: 'ExpressGeneratorTs',
    secret: (process.env.COOKIE_SECRET ?? ''),
    options: {
      httpOnly: true,
      signed: true,
      path: (process.env.COOKIE_PATH ?? ''),
      maxAge: Number(process.env.COOKIE_EXP ?? 0),
      domain: (process.env.COOKIE_DOMAIN ?? ''),
      secure: (process.env.SECURE_COOKIE === 'true'),
    },
  },
  jwt: {
    secret: (process.env.JWT_SECRET ?? ''),
    exp: (process.env.COOKIE_EXP ?? ''), // exp at the same time as the cookie
  },
  aws: {
    secret: (process.env.AWS_SECRECT_ACCESS_KEY ?? ''),
    access: (process.env.AWS_ACCESS_KEY ?? ''),
    region: (process.env.AWS_REGION ?? 'us-east-1'),
    bucket: (process.env.BUCKET_NAME ?? 'bucket_name')
  }
} as const;
