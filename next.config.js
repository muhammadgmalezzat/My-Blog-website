import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

export default (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
            env: {
                mongodb_username: 'gemy',
                mongodb_password: 'gemy200',
                mongodb_clustername: 'blog-database',
                mongodb_database: "my-site-development"
            },
        };
  }

  return {
        env: {
            mongodb_username: 'gemy',
            mongodb_password: 'gemy200',
            mongodb_clustername: 'blog-database',
            mongodb_database: "my-site-production"
        },
    };
};