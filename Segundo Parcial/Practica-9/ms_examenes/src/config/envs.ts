import 'dotenv/config';
import * as joi from 'joi'

interface EnvVars {
    NATS_SERVER: string[];
} 

const envVarsSchema = joi.object({
    NATS_SERVER: joi.array().items(joi.string()).required(),
}).unknown(true)

const { error, value } = 
envVarsSchema.validate({
    ...process.env,
    NATS_SERVER: process.env.NATS_SERVERS.split(',')
})

if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

const envVars: EnvVars = value as EnvVars
export const envs= {
    NATS_SERVER: envVars.NATS_SERVER,
}