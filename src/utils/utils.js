export const getClassName = (baseClass, modes) => {
    return Object.entries(modes)
      .filter(([key, value]) => value) // اختر الحالات المفعّلة فقط
      .map(([key]) => `${baseClass}-${key}`) // أضف اسم الحالة إلى الـ baseClass
      .join(" ");
  };
  