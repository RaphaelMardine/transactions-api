import { app } from './app'
import { env } from './env'

// GET, POST, PUT, PATCH, DELETE

// http://localhost:3333/hello

app
  .listen({
    port: env.PORT,
  })

  .then(() => {
    console.log('Server is running on port 3333')
  })
