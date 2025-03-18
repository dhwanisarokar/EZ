export const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email format";
    if (email.endsWith("@ez.works")) return "Emails ending with @ez.works are not allowed";
    return null;
};
