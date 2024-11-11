// Add Item to Bucket List
function addBucketItem() {
  const bucketItem = document.getElementById("bucketItem").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (bucketItem && startDate && endDate) {
      let bucketList = JSON.parse(localStorage.getItem("bucketList")) || [];
      bucketList.push({ name: bucketItem, startDate: startDate, endDate: endDate });
      localStorage.setItem("bucketList", JSON.stringify(bucketList));
      document.getElementById("bucketItem").value = "";
      document.getElementById("startDate").value = "";
      document.getElementById("endDate").value = "";
      displayBucketList();
  }
}

// Display Bucket List Items
function displayBucketList() {
  const bucketList = JSON.parse(localStorage.getItem("bucketList")) || [];
  const bucketListContainer = document.getElementById("bucketList");
  bucketListContainer.innerHTML = "";
  bucketList.forEach((item, index) => {
      bucketListContainer.innerHTML += `
          <li>
              <span class="bucket-item-name">${item.name}</span>
              <div class="bucket-item-dates">
                  <span><strong>From:</strong> ${item.startDate}</span>
                  <span><strong>To:</strong> ${item.endDate}</span>
              </div>
              <button onclick="removeBucketItem(${index})">Remove</button>
          </li>
      `;
  });
}

// Remove Item from Bucket List
function removeBucketItem(index) {
  let bucketList = JSON.parse(localStorage.getItem("bucketList"));
  bucketList.splice(index, 1);
  localStorage.setItem("bucketList", JSON.stringify(bucketList));
  displayBucketList();
}

// Initialize Bucket List Display
window.onload = displayBucketList;
