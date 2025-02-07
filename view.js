// Initialize view counter
  let viewCount = localStorage.getItem("viewCount") || 0;

  // Update view counter
  viewCount++;
  localStorage.setItem("viewCount", viewCount);

  // Update view counter display
  document.getElementById("view-count").innerHTML = viewCount;