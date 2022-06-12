import { getSession } from '@auth0/nextjs-auth0'

export const AuthUser = async (req, res) => {
    const session =  getSession(req, res);

      if (!session || !session.user) {
        res.writeHead(302, {
            Location: '/api/v1/login'
        });
          res.end()
          
        return null
    }

        return session.name
}
