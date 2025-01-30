// SizeOptions.js

export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  const sizeOptionsHTML = sizes.map(size => {
    return `
      <input type="radio" id="${size.id}" name="size" value="${size.id}">
      <label for="${size.id}">${size.carets} carats</label><br>
    `;
  }).join("");

  return sizeOptionsHTML;
};