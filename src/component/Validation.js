export const validation = (formData) => {
    const newErrors = {};

    if (formData.name === "") {
      newErrors.name = "Name is required**";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required**";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address**";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (formData.phone === " ") {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits**";
    }

    
    if (formData.company === "") {
      newErrors.company = "Company is required**";
    }
    return newErrors;
}