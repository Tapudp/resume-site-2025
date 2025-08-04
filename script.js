// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Enhanced download functionality
const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", function (e) {
  // Only use this for browsers that don't support download attribute
  if (!this.hasAttribute("download")) {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = this.href;
    link.download = "Divyesh_Parmar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  // For browsers that support download attribute, let it handle naturally
});

console.log("Resume website loaded");
