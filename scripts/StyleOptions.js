// StyleOptions.js

export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  const styleOptionsHTML = styles.map(style => {
    return `
      <input type="radio" id="${style.id}" name="style" value="${style.id}">
      <label for="${style.id}">${style.style}</label><br>
    `;
  }).join("");

  return styleOptionsHTML;
};