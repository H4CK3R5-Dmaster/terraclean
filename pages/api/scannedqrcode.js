import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient();

    try {
        const slug = req.headers['code_id'];

        const qr = await prisma.qr_code.findMany({
            where:{
                code: slug
            }
        })
        if(qr.length == 0) {
            res.status(404).json({ isValid: false });
        }
        if (qr.length > 0) {
            const qrCode = qr[0];
            const qrCodes = await prisma.qr_code.findUnique({
                where: {
                    id: qrCode.id 
                },
            });
            if (qrCodes) {
                const updatedQRCode = await prisma.qr_code.update({
                    where: {
                        id: qrCode.id // Utilisation de l'identifiant unique pour spécifier le code QR à mettre à jour
                    },
                    data: {
                        scanned: qrCode.scanned + 1
                    }
                });
                res.status(200).json({ isValid: true });
            } else {
                console.error("error")
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