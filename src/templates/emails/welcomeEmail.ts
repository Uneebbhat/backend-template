export const welcomeEmail = (userName: string) => ({
  subject: "Welcome to [Your Company Name] – Let’s Get Started! 🎉",
  text: `Dear ${userName},

Welcome to [Your Company Name]! We’re excited to have you on board. 🚀

Your account has been successfully created, and you’re all set to explore everything we have to offer. Here’s what you can do next:

✅ Complete your profile to get personalized recommendations
✅ Explore our features and get familiar with our platform
✅ Get started with [briefly mention a key feature or benefit]

👉 <a href="https://www.google.com/" style="cursor: pointer;">
  <button
   style="display: inline-block; padding: 8px 16px; font-size: 16px; 
          color: #ffffff; background-color: #18181b; border-radius: 8px; text-decoration: none; 
          transition: background-color 0.2s ease-in-out; font-family: Inter, sans-serif; outline: none; border: 0; cursor: pointer;"
   onmouseover="this.style.backgroundColor='#2f2f31'"
   onmouseout="this.style.backgroundColor='#18181b'">
   Get Started
</button>
</a>


If you didn’t sign up for this account, please ignore this email or contact us at [support email].

Have any questions? We’re here to help! 💡

Cheers,
[Your Company Name]
[Your Website URL]
[Your Social Links]`,
});
