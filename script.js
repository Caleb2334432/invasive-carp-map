
const yearSelect = document.getElementById("year");
const regions = document.querySelectorAll(".region");

function updateRegions() {
  const selectedYear = yearSelect.value;
  regions.forEach(region => {
    const years = region.dataset.regions.split(",");
    region.style.display = years.includes(selectedYear) ? "block" : "none";
  });
}

yearSelect.addEventListener("change", updateRegions);
updateRegions();
