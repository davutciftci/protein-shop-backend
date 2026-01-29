import nodemailer from 'nodemailer';

// App password'deki boşlukları temizle
const emailPassword = process.env.EMAIL_PASSWORD?.replace(/\s/g, '') || '';

console.log('[EMAIL CONFIG] Host:', process.env.EMAIL_HOST);
console.log('[EMAIL CONFIG] Port:', process.env.EMAIL_PORT);
console.log('[EMAIL CONFIG] User:', process.env.EMAIL_USER);
console.log('[EMAIL CONFIG] Password length:', emailPassword.length);

export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: emailPassword
    },
    tls: {
        rejectUnauthorized: false // Gmail için gerekli olabilir
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log('[EMAIL] Error verifying email: ', error);
    } else {
        console.log('[EMAIL] Email is verified');
    }
})

export const sendEmail = async (to: string, subject: string, html: string, text?: string) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            html,
            text
        })
        console.log('[EMAIL] Email sent successfully. Message ID: ', info.messageId);
        return info
    } catch (error: any) {
        console.error('[EMAIL] Failed to send email: ', error);
        
        // SMTP kimlik doğrulama hatası
        if (error.code === 'EAUTH' || error.responseCode === 535) {
            throw new Error('Email gönderimi başarısız: Email kimlik doğrulama hatası. Lütfen sistem yöneticisiyle iletişime geçin.');
        }
        
        // Bağlantı hatası
        if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT' || error.code === 'ENOTFOUND') {
            throw new Error('Email gönderimi başarısız: Email sunucusuna bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.');
        }
        
        // Geçersiz alıcı adresi
        if (error.responseCode === 550 || error.code === 'EENVELOPE') {
            throw new Error('Email gönderimi başarısız: Geçersiz email adresi.');
        }
        
        // Genel hata
        throw new Error('Email gönderimi başarısız: Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
}