import { app } from './app'
import { env } from './env'

// GET, POST, PUT, PATCH, DELETE

// http://localhost:3333/hello

app
  .listen({
    port: env.PORT,
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
  })

  .then(() => {
    console.log('Server is running on port 3333')
  })
