const forgotPasswordEmail = (emailData: string) => ({
  subject: "Reset Your Password – Action Required",
  body: `
    <html>
      <body style="font-family: Inter, sans-serif; color: #18181b;">
        <h2>Hi ${emailData},</h2>
        <p>We received a request to reset your password for your <strong>[Your Company Name]</strong> account. If you made this request, click the button below to set a new password:</p>
        
        <a href=[Reset Password Link] style="cursor: pointer;">
  <button
   style="display: inline-block; padding: 8px 16px; font-size: 16px; 
          color: #ffffff; background-color: #18181b; border-radius: 8px; text-decoration: none; 
          transition: background-color 0.2s ease-in-out; font-family: Inter, sans-serif; outline: none; border: 0; cursor: pointer;"
   onmouseover="this.style.backgroundColor='#2f2f31'"
   onmouseout="this.style.backgroundColor='#18181b'">
   Reset Password
</button>
</a>
        
        <p>If you didn’t request a password reset, you can safely ignore this email. Your password will remain unchanged.</p>
        <p>This link will expire in <strong>[X hours]</strong>, so be sure to reset your password soon.</p>
        
        <p>If you need any help, feel free to reach out to us at <a href="mailto:[support email]">[support email]</a>.</p>
        
        <p>Stay secure,</p>
        <p><strong>[Your Company Name]</strong><br>
           <a href="[Your Website URL]">[Your Website URL]</a><br>
           <a href="[Your Social Links]">Follow us</a>
        </p>
      </body>
    </html>
  `,
  to: emailData,
});

export default forgotPasswordEmail;
