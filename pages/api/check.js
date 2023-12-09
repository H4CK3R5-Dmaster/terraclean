import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient();

    try {
        const slug = req.headers['tok'];

        const qr = await prisma.user.findMany({
            where:{
                token: slug
            }
        })
        if(qr.length == 0) {
            res.status(404).json({ isValid: false });
        }
        if (qr.length > 0) {
            const userad = qr[0];
            const qrCodes = await prisma.user.findUnique({
                where: {
                    id: userad.id 
                },
            });
            if (qrCodes) {
                
                res.status(200).json({ isValid: true });
            } else {
                console.error("error")
                res.status(401).json({isValid: false})
            }

            
        } else {
            res.status(404).json({ isValid: false });
        }
    } catch (error) {
        
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await prisma.$disconnect();
    }
}