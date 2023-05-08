import { NextApiRequest, NextApiResponse } from 'next';
import { OAuth2Client } from 'google-auth-library';
import { setTokenCookie } from '../../lib/authCookies';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export default async function googleAuth(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { tokenId } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID!,
    });
    const { email_verified, email, name, picture } = ticket.getPayload();
    if (email_verified) {
      const token = await setTokenCookie({ email, name, picture }, res);
      res.status(200).json({ success: true, token });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: 'Invalid token' });
  }
}
