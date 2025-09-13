export const envs = {
    isProd: process.env.isProd === 'true',
    isCotec: process.env.COTEC === 'true',
    BASE_PATH: process.env.BASE_PATH || '',
}