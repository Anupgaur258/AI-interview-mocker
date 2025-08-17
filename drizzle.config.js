/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_K4oTm3gpnbPH@ep-old-base-adq6g2wo-pooler.c-2.us-east-1.aws.neon.tech/AI-MOCKER-INTERVIEW?sslmode=require&channel_binding=require',
    }
};