export const handleImagePreview = (file: string) => {
  const reader = new FileReader();
  let imageDataUrl;

  reader.readAsDataURL(file);

  reader.onloadend = () => {
    imageDataUrl = reader.result as string;
  };

  return imageDataUrl;
};
