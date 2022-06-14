import * as dotenv from "dotenv"

dotenv.config();

export const config = {
    url: <string>process.env.MONGO_URL,
    saltRounds: <string>process.env.SALT_ROUNDS,
    pepper: process.env.PEPPER,
    bcryptPassword: process.env.BCRYPT_PASSWORD,
    tokenSecret: process.env.TOKEN_SECRET,
    paypalClientId: <string>process.env.PAYPAL_CLIENT_ID,
    paypalClientSecret: <string>process.env.PAYPAL_CLIENT_SECRET,
    stripeSecretKey: <string>process.env.STRIPE_SECRET_KEY,
    stripePublicKey: <string>process.env.STRIPE_PUBLIC_KEY,
};