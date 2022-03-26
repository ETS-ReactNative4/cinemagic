import {Save, Read} from '@/utils/helpers';

export default async function handler(req, res) {
    const {uuid, ns} = req.body;
    await Save(uuid, ns);
    res.status(200).json({ name: 'John Doe' })
  }
  